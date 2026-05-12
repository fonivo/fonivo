import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, clinic, email, phone, message } = await req.json();

    if (!name || !clinic || !email) {
      return NextResponse.json({ error: 'Brakuje wymaganych pól' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Fonivo <noreply@send.fonivo.pl>',
      to: 'kontakt@fonivo.pl',
      subject: `Nowe zapytanie Fonivo: ${clinic}`,
      html: `
        <h2>Nowe zapytanie ze strony fonivo.pl</h2>
        <p><strong>Imię i nazwisko:</strong> ${name}</p>
        <p><strong>Klinika:</strong> ${clinic}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'nie podano'}</p>
        <p><strong>Wiadomość:</strong> ${message || 'nie podano'}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Błąd wysyłania' }, { status: 500 });
  }
}
