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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
        {children}
        <Analytics />
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}
