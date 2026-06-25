import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { formType, formData } = req.body;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.RESEND_TO_EMAIL || 'academy@hyproplatform.com';
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  if (!apiKey) {
    return res.status(500).json({ error: 'RESEND_API_KEY is not configured.' });
  }

  // Format email body based on form type
  let subject = 'New Inquiry from Hypro Academy';
  let html = '';

  if (formType === 'quick') {
    subject = 'Quick Registration - Hypro Academy';
    html = `
      <h3>New Quick Registration Submission</h3>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Governorate:</strong> ${formData.city}</p>
    `;
  } else if (formType === 'volunteer') {
    subject = 'Volunteer Application - Hypro Academy';
    html = `
      <h3>New Volunteer Application</h3>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email / WhatsApp:</strong> ${formData.contact}</p>
      <p><strong>Skill / Background:</strong> ${formData.skill}</p>
    `;
  } else {
    subject = `New Partnership Inquiry (${formData.category || 'General'})`;
    html = `
      <h3>New Inquiry Details</h3>
      <p><strong>Category:</strong> ${formData.category}</p>
      <ul>
        ${Object.entries(formData)
        .filter(([key]) => key !== 'category')
        .map(([key, val]) => `<li><strong>${key}:</strong> ${val}</li>`)
        .join('')}
      </ul>
    `;
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmail,
        subject: subject,
        html: html
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send email via Resend.');
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email.' });
  }
}
