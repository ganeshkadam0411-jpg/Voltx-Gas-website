const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = Number(process.env.PORT || 3000);
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', async (req, res) => {
  const {
    name,
    email,
    telephone,
    message,
    energyType,
    consumptionKnown,
    consumption,
    aq,
    mprn,
    address,
  } = req.body || {};

  if (!name || !email || !telephone) {
    return res.status(400).json({
      message: 'Please provide your name, email address, and telephone number.',
    });
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return res.status(500).json({
      message:
        'SMTP settings are not configured yet. Add your SMTP credentials to the .env file before sending emails.',
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || 'false').toLowerCase() === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailText = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Telephone: ${telephone}`,
      `Energy Type: ${energyType || 'Not provided'}`,
      `Consumption Known: ${consumptionKnown || 'Not provided'}`,
      `Consumption: ${consumption || 'Not provided'}`,
      `AQ: ${aq || 'Not provided'}`,
      `MPRN Number: ${mprn || 'Not provided'}`,
      `Supply Site Address: ${address || 'Not provided'}`,
      '',
      'Message:',
      message || 'No message provided',
    ].join('\n');

    const emailHtml = `
      <h2>New enquiry from Voltex Gas website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telephone:</strong> ${telephone}</p>
      <p><strong>Energy Type:</strong> ${energyType || 'Not provided'}</p>
      <p><strong>Consumption Known:</strong> ${consumptionKnown || 'Not provided'}</p>
      <p><strong>Consumption:</strong> ${consumption || 'Not provided'}</p>
      <p><strong>AQ:</strong> ${aq || 'Not provided'}</p>
      <p><strong>MPRN Number:</strong> ${mprn || 'Not provided'}</p>
      <p><strong>Supply Site Address:</strong> ${address || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${(message || 'No message provided').replace(/\n/g, '<br>')}</p>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: `New gas enquiry from ${name}`,
      text: emailText,
      html: emailHtml,
    });

    return res.json({
      success: true,
      message: 'Thank you. Your enquiry has been sent successfully.',
    });
  } catch (error) {
    console.error('Failed to send contact email:', error);

    return res.status(500).json({
      message: 'Unable to send the enquiry right now. Please try again later.',
    });
  }
});

if (isProduction) {
  const distPath = path.join(__dirname, 'dist');

  app.use(express.static(distPath));

  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) {
      return next();
    }

    return res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
