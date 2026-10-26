import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * POST /api/career
 * Handles career application form submissions.
 *
 * Accepts multipart/form-data with:
 *   - name, email, phone, location, position (text fields)
 *   - resume (optional file upload)
 *
 * Sends email notification to Thomas.Bynum@nattaste.com
 *
 * Required env vars (.env.local):
 *   EMAIL_HOST          — SMTP host (e.g., smtp.gmail.com)
 *   EMAIL_PORT          — SMTP port (e.g., 587)
 *   EMAIL_USER          — SMTP username/email
 *   EMAIL_PASSWORD      — SMTP password/app password
 *   EMAIL_FROM          — From email address
 */
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const location = formData.get('location') as string;
    const position = formData.get('position') as string;
    const resume = formData.get('resume') as File | null;

    if (!email || !name || !phone || !location || !position) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Log the application locally
    console.log('Career application received:', {
      name,
      email,
      phone,
      location,
      position,
      hasResume: !!resume,
      resumeName: resume?.name,
      resumeSize: resume?.size,
    });

    // Check if email credentials are configured
    const emailHost = process.env.EMAIL_HOST;
    const emailPort = process.env.EMAIL_PORT;
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;
    const emailFrom = process.env.EMAIL_FROM;

    if (!emailHost || !emailPort || !emailUser || !emailPassword || !emailFrom) {
      console.warn('Email credentials not configured. Application received but not emailed:', {
        name, email, phone, location, position,
      });
      return NextResponse.json({ success: true });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: parseInt(emailPort),
      secure: false, // true for 465, false for other ports
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    // Prepare email content
    const emailContent = `
New Career Application - Wize Guyz Grille

Name: ${name}
Email: ${email}
Phone: ${phone}
Preferred Location: ${location}
Position of Interest: ${position}
Resume Attached: ${resume ? 'Yes' : 'No'}${resume ? ` (${resume.name}, ${(resume.size / 1024).toFixed(2)} KB)` : ''}

---
This application was submitted via the Wize Guyz Grille website career form.
    `.trim();

    const mailOptions = {
      from: emailFrom,
      to: 'Thomas.Bynum@nattaste.com',
      subject: `New Career Application: ${name} - ${position}`,
      text: emailContent,
      attachments: resume ? [
        {
          filename: resume.name,
          content: Buffer.from(await resume.arrayBuffer()),
        },
      ] : [],
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Career application email sent to Thomas.Bynum@nattaste.com');

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Career route error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
