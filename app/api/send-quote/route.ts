'use server';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customer, itemsSummary, notes } = body as {
      customer: { name: string; email: string; phone: string };
      itemsSummary: string;
      notes?: string;
    };

    if (!customer?.email || !customer?.name) {
      return NextResponse.json(
        { success: false, error: 'Missing required customer details.' },
        { status: 400 }
      );
    }
    console.log(process.env.SMTP_HOST);
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error('Missing SMTP environment variables', {
        SMTP_HOST,
        SMTP_USER,
      });
      return NextResponse.json(
        {
          success: false,
          error:
            'Email service not configured. Please set SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local.',
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const toEmail = process.env.QUOTE_TO_EMAIL || 'ameerjafar123@gmail.com';

    const mailSubject = `New Quote Request - ${customer.name}`;
    const mailText = `You have received a new quote request from Limeria Colours.

Customer Details:
Name: ${customer.name}
Email: ${customer.email}
Phone: ${customer.phone}

Cart Items:
${itemsSummary}

Additional Notes:
${notes || 'N/A'}

---
Sent from Limeria Colours website.`;

    await transporter.sendMail({
      from:
        process.env.SMTP_FROM || '"Limeria" <ameerjafar123@gmail.com>',
      to: toEmail,
      subject: mailSubject,
      text: mailText,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error sending quote email:', error);
    return NextResponse.json(
      {
        success: false,
        error:
          error?.message || error?.toString() || 'Failed to send email',
      },
      { status: 500 }
    );
  }
}

