// backend/server.js
// Express backend to handle contact form submissions and send email via Nodemailer

import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables with robust fallbacks
dotenv.config();
if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
  // Try common alternative env files/locations (local dev convenience only)
  const candidatePaths = [
    path.join(process.cwd(), '.env'),
    path.join(__dirname, '.env'),
    path.join(__dirname, '.env.local'),
    path.join(__dirname, '..', '.env'),
    path.join(__dirname, '.env.development'),
  ];
  for (const p of candidatePaths) {
    dotenv.config({ path: p });
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      break;
    }
  }
}

const app = express();
const PORT = process.env.PORT || 3000; // Render sets PORT automatically

// Security headers
app.use(helmet());

// Body parsers
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true }));

// CORS (configure allowed origins via env, supports wildcards like https://*.netlify.app)
function originMatches(pattern, origin) {
  if (pattern === '*' || !pattern) return true;
  if (!origin) return false;
  if (pattern.includes('*')) {
    // Escape regex special chars then replace \* with .*
    const esc = pattern
      .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
      .replace(/\\\*/g, '.*')
      .replace(/\*/g, '.*');
    const re = new RegExp(`^${esc}$`);
    return re.test(origin);
  }
  return pattern === origin;
}

const allowedOrigins = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow non-browser or same-origin requests without Origin header
    if (!origin) return callback(null, true);
    if (allowedOrigins.length === 0) return callback(null, true);
    const ok = allowedOrigins.some(p => originMatches(p, origin));
    return callback(ok ? null : new Error('Not allowed by CORS'), ok);
  },
}));

// Rate limiting for contact endpoint
const contactLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
});

// Health check
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Config health (does not expose secrets)
app.get('/health/config', (_req, res) => {
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const hasHost = !!process.env.SMTP_HOST;
  const hasUser = !!process.env.SMTP_USER;
  const hasPass = !!process.env.SMTP_PASS;
  const toEmail = !!(process.env.TO_EMAIL || process.env.SMTP_USER);
  res.json({
    ok: hasHost && hasUser && hasPass,
    smtp: {
      hostConfigured: hasHost,
      userConfigured: hasUser,
      passConfigured: hasPass,
      port,
      secure: port === 465,
      toEmailConfigured: toEmail
    }
  });
});

// Contact endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, subject, message, website } = req.body || {};

    // Honeypot check
    if (website) {
      return res.status(200).json({ ok: true, message: 'Thank you!' });
    }

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Missing required fields.' });
    }

    // Create transporter
    const host = process.env.SMTP_HOST; // e.g., smtp.gmail.com
    const port = parseInt(process.env.SMTP_PORT || '587', 10); // 587 for TLS, 465 for SSL
    const user = process.env.SMTP_USER; // e.g., your gmail
    const pass = process.env.SMTP_PASS; // app password
    const toEmail = process.env.TO_EMAIL || user;

    const missing = [];
    if (!host) missing.push('SMTP_HOST');
    if (!user) missing.push('SMTP_USER');
    if (!pass) missing.push('SMTP_PASS');
    if (missing.length) {
      return res.status(500).json({ ok: false, error: `Email transport not configured. Missing env: ${missing.join(', ')}` });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const mailOptions = {
      from: `Portfolio Contact <${user}>`,
      to: toEmail,
      replyTo: email,
      subject: subject ? `[Portfolio] ${subject}` : '[Portfolio] New contact form message',
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || '-'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject || '-') }</p>
          <hr />
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.json({ ok: true, message: 'Message sent successfully.' });
  } catch (err) {
    console.error('Contact error:', err);
    return res.status(500).json({ ok: false, error: 'Failed to send message. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
  // Try verifying transporter at startup for clearer diagnostics
  try {
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || '587', 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    if (host && user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });
      transporter.verify((error, success) => {
        if (error) {
          console.error('SMTP verify failed:', error.message);
        } else {
          console.log('SMTP transport ready:', success);
        }
      });
    } else {
      const missing = [];
      if (!host) missing.push('SMTP_HOST');
      if (!user) missing.push('SMTP_USER');
      if (!pass) missing.push('SMTP_PASS');
      console.warn('SMTP not fully configured at startup. Missing:', missing.join(', '));
    }
  } catch (e) {
    console.error('SMTP startup verification error:', e);
  }
});

// Utility to escape HTML
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
