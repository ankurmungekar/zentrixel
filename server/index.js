import 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'
import rateLimit from 'express-rate-limit'
import { buildEmailHtml } from './emailTemplate.js'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST_DIR = path.join(__dirname, '..', 'dist')

const app = express()
const PORT = process.env.PORT || 3001

// ────────────────────────────────────────────────
// ✅ CORS FIX (Manual - works reliably on Hostinger)
// ────────────────────────────────────────────────
const allowedOrigins = [
  'https://zentrixel.com',
  'https://www.zentrixel.com'
]

app.use((req, res, next) => {
  const origin = req.headers.origin

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Credentials', 'true')

  // ✅ Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }

  next()
})

// ────────────────────────────────────────────────
// ✅ JSON parser AFTER CORS
// ────────────────────────────────────────────────
app.use(express.json())

// ────────────────────────────────────────────────
// Rate limiting
// ────────────────────────────────────────────────
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
})

// ────────────────────────────────────────────────
// Nodemailer
// ────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

// ────────────────────────────────────────────────
// Validation
// ────────────────────────────────────────────────
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

// ────────────────────────────────────────────────
// API Routes
// ────────────────────────────────────────────────
app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, phone, company, message } = req.body ?? {}

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

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

// ────────────────────────────────────────────────
// Static (optional - if FE bundled here)
// ────────────────────────────────────────────────
if (fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR))

  app.get('*', (_req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'))
  })
}

// ────────────────────────────────────────────────
// Start server
// ────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n✅ API running on port ${PORT}`)
})