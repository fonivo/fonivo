import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Fonivo - Recepcja AI dla prywatnych klinik medycznych",
  description:
    "Voice agent AI, który odbiera telefony Twojej kliniki 24/7. Sprawdza kalendarz, umawia wizyty, brzmi jak człowiek. Wdrożenie w 14 dni.",
  keywords:
    "voice ai, recepcja ai, voice agent, ai dla kliniki, automatyzacja recepcji, fonivo",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Fonivo - Recepcja AI dla prywatnych klinik medycznych",
    description:
      "Voice agent AI dla Twojej kliniki. Odbiera 24/7. Wdrożenie w 14 dni.",
    url: "https://fonivo.pl",
    siteName: "Fonivo",
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://fonivo.pl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
