import type { Metadata } from "next";
import { Geist, Geist_Mono, Syncopate } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  weight: ["700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://infloura.com"),
  title: "Infloura — Creator Revenue Simulator",
  description: "Predict how much creators can earn across YouTube, TikTok and Instagram.",
  openGraph: {
    title: "Infloura — Creator Revenue Simulator",
    description: "Predict how much creators can earn across YouTube, TikTok and Instagram.",
    url: "https://infloura.com",
    siteName: "Infloura",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infloura — Creator Revenue Simulator",
    description: "Predict how much creators can earn across YouTube, TikTok and Instagram.",
  },
};

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NQVGSLRGJ9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NQVGSLRGJ9');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syncopate.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics />
          <SpeedInsights />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
