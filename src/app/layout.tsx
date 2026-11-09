import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WebVitals } from "./web-vitals";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"), // use your real domain in production
  title: {
    default: "Cambodia Guide",
    template: "%s | Cambodia Guide", // child pages become "About Us | Cambodia Guide"
  },
  description: "Learn about Cambodia, a beautiful country in Southeast Asia",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Cambodia Guide",
    description: "Explore Cambodia National Beauty",
    url: "/",
    siteName: "Cambodia Guide",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambodia Guide",
    description: "Summary with Large Image Card",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <WebVitals />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}