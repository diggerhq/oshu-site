import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oshu - Embed AI Agents into Your SaaS",
  description:
    "Oshu is an API that lets SaaS companies embed agentic functionality into their products. Like Stripe for payments, but for AI agents.",
  openGraph: {
    title: "Oshu - Embed AI Agents into Your SaaS",
    description:
      "An API to give your customers native AI agents. Secure sandboxes, MCP support, Claude Code/Codex/OpenCode out of the box.",
    url: "https://oshu.dev",
    siteName: "Oshu",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
