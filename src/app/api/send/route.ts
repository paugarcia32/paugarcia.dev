'use server'

import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req: any) {
  try {
    const body = await req.json()
    const { name, email,subject, message } = body;
    const data = await resend.emails.send({
      from: `${name} <form@itodyssey.dev>`,
      to: ['paugarcia32@gmail.com'],
      subject: `${subject}>`,
      react: EmailTemplate({ name, email,subject, message }),
      text: ''
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}