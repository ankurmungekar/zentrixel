/**
 * Returns a branded HTML email string for a contact form submission.
 * @param {Object} data - { name, email, phone, company, message }
 * @returns {string} HTML string
 */
export function buildEmailHtml({ name, email, phone, company, message }) {
  const timestamp = new Date().toLocaleString('en-GB', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })

  const row = (label, value) => value ? `
    <tr>
      <td style="padding:10px 16px;background:#f8fafc;font-weight:600;color:#0d1429;font-size:13px;width:140px;border-bottom:1px solid #e2e8f0;">${label}</td>
      <td style="padding:10px 16px;color:#475569;font-size:13px;border-bottom:1px solid #e2e8f0;">${value}</td>
    </tr>` : ''

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Form Submission — Zentrixel</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0d1429 0%,#103592 100%);padding:32px 40px;text-align:center;">
              <p style="margin:0 0 4px 0;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#19AAE9;">Zentrixel</p>
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;line-height:1.3;">New Contact Form Submission</h1>
              <p style="margin:8px 0 0 0;font-size:13px;color:rgba(255,255,255,0.6);">Received on ${timestamp} (IST / India)</p>
            </td>
          </tr>

          <!-- Divider accent -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#19AAE9,#103592);"></td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding:28px 40px 16px 40px;">
              <p style="margin:0;font-size:15px;color:#0d1429;font-weight:600;">
                👋 You have a new message from <span style="color:#19AAE9;">${name}</span>
              </p>
              <p style="margin:8px 0 0 0;font-size:13px;color:#64748b;">Here are the details submitted via the Zentrixel contact form:</p>
            </td>
          </tr>

          <!-- Details table -->
          <tr>
            <td style="padding:0 40px 24px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
                ${row('Full Name', name)}
                ${row('Email', `<a href="mailto:${email}" style="color:#19AAE9;text-decoration:none;">${email}</a>`)}
                ${row('Phone', phone)}
                ${row('Company', company)}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:0 40px 32px 40px;">
              <p style="margin:0 0 10px 0;font-size:13px;font-weight:600;color:#0d1429;text-transform:uppercase;letter-spacing:1px;">Message</p>
              <div style="background:#f8fafc;border-left:4px solid #19AAE9;border-radius:4px;padding:16px 20px;font-size:14px;color:#334155;line-height:1.7;white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:0 40px 32px 40px;text-align:center;">
              <a href="mailto:${email}?subject=Re: Your enquiry to Zentrixel"
                style="display:inline-block;background:#19AAE9;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 28px;border-radius:30px;">
                Reply to ${name} →
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;padding:20px 40px;border-top:1px solid #e2e8f0;text-align:center;">
              <p style="margin:0;font-size:12px;color:#94a3b8;">
                © ${new Date().getFullYear()} Zentrixel
              </p>
              <p style="margin:6px 0 0 0;font-size:11px;color:#cbd5e1;">
                This email was auto-generated from the contact form at zentrixel.com
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}
