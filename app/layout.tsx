import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono"
});

const ibmMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-mono"
});

export const metadata: Metadata = {
  title: 'cgram — Anonymous E2E Encrypted Terminal Messenger',
  description: 'A terminal-based anonymous end-to-end encrypted messenger. Built with Go, Bubble Tea, and the Nord color palette. Private conversations, no compromise.',
  keywords: ['messenger', 'encrypted', 'e2e', 'terminal', 'cli', 'anonymous', 'privacy', 'secure'],
  authors: [{ name: 'isalikov' }],
  openGraph: {
    title: 'cgram — Anonymous E2E Encrypted Terminal Messenger',
    description: 'Private conversations in your terminal. End-to-end encrypted. Anonymous.',
    url: 'https://cgram.live',
    siteName: 'cgram',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'cgram — Anonymous E2E Encrypted Terminal Messenger',
    description: 'Private conversations in your terminal. End-to-end encrypted. Anonymous.',
  },
}

export const viewport: Viewport = {
  themeColor: '#2e3440',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} ${ibmMono.variable} font-mono antialiased tracking-tight`}>
        {children}
      </body>
    </html>
  )
}
