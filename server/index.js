import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import rateLimit from 'express-rate-limit'
import { buildEmailHtml } from './emailTemplate.js'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST_DIR = path.join(__dirname, '..', 'dist')
const isProd = process.env.NODE_ENV === 'production'

const app = express()
const PORT = process.env.PORT || 3001

// ── Middleware ────────────────────────────────────────────────
app.use(express.json())

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:4173',
  process.env.ALLOWED_ORIGIN,
].filter(Boolean)

// Always apply CORS — frontend and backend are on different origins.
app.use(
  cors({
    origin: (origin, cb) => {
      // Allow no-origin requests (e.g. curl, same-origin future)
      if (!origin) return cb(null, true)
      const allowed = isProd
        ? [process.env.ALLOWED_ORIGIN].filter(Boolean)
        : ['http://localhost:5173', 'http://localhost:4173']
      if (allowed.includes(origin)) return cb(null, true)
      cb(new Error(`CORS: origin ${origin} not allowed`))
    },
    methods: ['POST', 'GET', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
)

// Rate-limit: max 10 contact submits per 15 min per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
})

// ── Nodemailer transporter ────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

// ── Validation helpers ────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[+\d\s\-().]{7,20}$/

function validateBody(body) {
  const errors = {}
  const { name, email, phone, company, message } = body

  if (!name || name.trim().length < 2) {
    errors.name = 'Full name is required (at least 2 characters).'
  }
  if (!email || !EMAIL_REGEX.test(email.trim())) {
    errors.email = 'A valid email address is required.'
  }
  if (!phone || !PHONE_REGEX.test(phone.trim())) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!company || !company.trim()) {
    errors.company = 'Company name is required.'
  }
  if (!message || message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }

  return errors
}

// ── POST /api/contact ─────────────────────────────────────────
app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, phone, company, message } = req.body ?? {}

  // Server-side validation
  const errors = validateBody({ name, email, phone, company, message })
  if (Object.keys(errors).length > 0) {
    return res.status(422).json({ errors })
  }

  const sanitised = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone?.trim() || '',
    company: company?.trim() || '',
    message: message.trim(),
  }

  try {
    await transporter.sendMail({
      from: `"Zentrixel Website" <${process.env.GMAIL_USER}>`,
      to: [process.env.GMAIL_USER, 'sales@zentrixel.com'],
      replyTo: sanitised.email,
      subject: `New enquiry from ${sanitised.name}`,
      html: buildEmailHtml(sanitised),
      text: [
        `New contact form submission`,
        `Name:    ${sanitised.name}`,
        `Email:   ${sanitised.email}`,
        `Phone:   ${sanitised.phone || '—'}`,
        `Company: ${sanitised.company || '—'}`,
        `Message: ${sanitised.message}`,
      ].join('\n'),
    })

    return res.status(200).json({ ok: true, message: 'Email sent successfully.' })
  } catch (err) {
    console.error('[contact] Failed to send email:', err.message)
    return res.status(500).json({ error: 'Could not send email. Please try again later.' })
  }
})

// Health-check
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

// ── Static files ───────────────────────────
if (fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR))
  // SPA fallback — let React Router handle all non-API routes
  app.get('*', (_req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`\n✅  Zentrixel API server running at http://localhost:${PORT}`)
  console.log(`   Gmail user: ${process.env.GMAIL_USER ?? '(not set — check .env)'}`)
})
