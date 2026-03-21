import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

// ── Types ─────────────────────────────────────────────────────
interface FormFields {
  name: string
  email: string
  phone: string
  company: string
  message: string
}
type FormErrors = Partial<FormFields>
type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

// ── Validation ────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+\d\s\-().]{7,20}$/

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {}
  if (!fields.name.trim() || fields.name.trim().length < 2) {
    errors.name = 'Full name is required.'
  }
  if (!EMAIL_RE.test(fields.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (fields.phone && !PHONE_RE.test(fields.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!fields.message.trim() || fields.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }
  return errors
}

// ── Input + Textarea components ───────────────────────────────
function Field({
  label, error, children,
}: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-body text-xs font-semibold uppercase tracking-wide text-muted">
        {label}
      </label>
      {children}
      {error && <p className="font-body text-xs text-red-500">{error}</p>}
    </div>
  )
}

const inputCls = (hasError: boolean) =>
  `rounded-lg border px-4 py-3 font-body text-sm text-navy outline-none transition-colors focus:border-primary ${hasError ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
  }`

// ── Page ──────────────────────────────────────────────────────
export default function ContactPage() {
  const [fields, setFields] = useState<FormFields>({
    name: '', email: '', phone: '', company: '', message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [serverError, setServerError] = useState<string>('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const validationErrors = validate(fields)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')
    setServerError('')
    try {
      const API_BASE = import.meta.env.VITE_API_URL ?? ''
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      const data = await res.json()

      if (!res.ok) {
        // Server-side validation errors
        if (res.status === 422 && data.errors) {
          setErrors(data.errors)
          setStatus('idle')
        } else {
          throw new Error(data.error || 'Something went wrong.')
        }
        return
      }

      setStatus('success')
      setFields({ name: '', email: '', phone: '', company: '', message: '' })
      setErrors({})
    } catch (err: unknown) {
      setStatus('error')
      setServerError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Zentrixel</title>
        <meta
          name="description"
          content="Get in touch with Zentrixel. Book a free consultation, request a demo, or discuss your enterprise technology needs."
        />
      </Helmet>

      <main>
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="bg-navy pt-32 pb-20 max-md:pt-28 max-md:pb-14">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <p className="font-sub-heading text-lg text-primary">Contact Us</p>
            <h1 className="mt-3 max-w-[700px] font-heading text-4xl font-semibold leading-snug text-white max-md:text-3xl">
              We'd Love to Hear From You
            </h1>
            <p className="mt-6 max-w-[680px] font-body text-lg leading-relaxed text-white/70 max-md:text-base">
              Let's connect and explore how we can turn your ideas into innovative, high-impact digital solutions.
            </p>
            <p className="mt-4 max-w-[680px] font-body text-base leading-relaxed text-white/60 max-md:text-sm">
              Whether you have a question, need a consultation, or want to learn more about our
              services — Zentrixel is your one-stop partner for technological excellence.
            </p>
          </div>
        </section>

        {/* ── Form + Info ────────────────────────────────────────── */}
        <section className="py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid gap-16 lg:grid-cols-2">

              {/* Left — Form */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-navy">Drop us a line!</h2>
                <p className="mt-2 font-body text-base text-muted">
                  Fill in the form and we'll get back to you within 24 hours.
                </p>

                {/* Success banner */}
                {status === 'success' && (
                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-5 py-4">
                    <svg className="mt-0.5 shrink-0 text-green-600" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <p className="font-body text-sm font-semibold text-green-800">Message sent!</p>
                      <p className="mt-0.5 font-body text-sm text-green-700">
                        Thank you for reaching out. We'll be in touch shortly.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error banner */}
                {status === 'error' && (
                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-5 py-4">
                    <svg className="mt-0.5 shrink-0 text-red-500" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
                    </svg>
                    <div>
                      <p className="font-body text-sm font-semibold text-red-800">Failed to send</p>
                      <p className="mt-0.5 font-body text-sm text-red-700">{serverError}</p>
                    </div>
                  </div>
                )}

                <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
                  {/* Name + Email row */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name *" error={errors.name}>
                      <input
                        id="name" name="name" type="text"
                        placeholder="Your name"
                        value={fields.name}
                        onChange={handleChange}
                        className={inputCls(!!errors.name)}
                        autoComplete="name"
                      />
                    </Field>
                    <Field label="Email Address *" error={errors.email}>
                      <input
                        id="email" name="email" type="email"
                        placeholder="john@company.com"
                        value={fields.email}
                        onChange={handleChange}
                        className={inputCls(!!errors.email)}
                        autoComplete="email"
                      />
                    </Field>
                  </div>

                  {/* Company + Phone row */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Company Name" error={errors.company}>
                      <input
                        id="company" name="company" type="text"
                        placeholder="Your company"
                        value={fields.company}
                        onChange={handleChange}
                        className={inputCls(!!errors.company)}
                        autoComplete="organization"
                      />
                    </Field>
                    <Field label="Phone Number" error={errors.phone}>
                      <input
                        id="phone" name="phone" type="tel"
                        placeholder="+91 0000000000"
                        value={fields.phone}
                        onChange={handleChange}
                        className={inputCls(!!errors.phone)}
                        autoComplete="tel"
                      />
                    </Field>
                  </div>

                  {/* Message */}
                  <Field label="Message *" error={errors.message}>
                    <textarea
                      id="message" name="message"
                      placeholder="Tell us about your project or question…"
                      rows={5}
                      value={fields.message}
                      onChange={handleChange}
                      className={`resize-none ${inputCls(!!errors.message)}`}
                    />
                  </Field>

                  {/* Submit */}
                  <div className="flex flex-col gap-3">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="inline-flex h-12 w-fit items-center justify-center gap-2.5 rounded-[30px] bg-primary px-8 font-body text-base text-white transition-colors hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Right — Info */}
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-navy">Get in Touch</h2>
                  <p className="mt-3 font-body text-base leading-relaxed text-muted">
                    We're here to help. Reach out to us through any of the channels below.
                  </p>
                </div>

                {/* Contact details */}
                <div>
                  <div className="mt-3 flex flex-col gap-2 font-body text-sm leading-relaxed text-muted">
                    <p>
                      <span className="font-medium text-navy">Email: </span>
                      <a href="mailto:sales@zentrixel.com" className="hover:text-primary">
                        sales@zentrixel.com
                      </a>
                    </p>
                    <p>
                      <span className="font-medium text-navy">Phone: </span>
                      +971 504711076, +91 9764013221
                    </p>
                  </div>
                  {/* WhatsApp CTA */}
                  <a
                    href="https://wa.me/919764013221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-[30px] border border-[#25D366] px-5 py-2.5 font-body text-sm font-medium text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                    </svg>
                    Message us on WhatsApp
                  </a>
                </div>

                {/* UAE Office */}
                <div>
                  <h3 className="font-heading text-lg font-semibold text-navy">Head Office — UAE</h3>
                  <div className="mt-3 font-body text-sm leading-relaxed text-muted">
                    <p className="font-medium text-navy">Zentrixel LLC-FZ</p>
                    <p>Meydan Grandstand, 6th Floor</p>
                    <p>Meydan Road, Nad Al Sheba, Dubai, UAE</p>
                  </div>
                </div>

                {/* India Office */}
                <div>
                  <h3 className="font-heading text-lg font-semibold text-navy">India Office</h3>
                  <div className="mt-3 font-body text-sm leading-relaxed text-muted">
                    <p className="font-medium text-navy">Zentrixel Private Limited</p>
                    <p>17th Floor, Nyati Enthral</p>
                    <p>Kharadi, Pune, Maharashtra, India – 411014</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
