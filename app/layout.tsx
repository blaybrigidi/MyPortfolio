import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brigidi Ackah Blay | Full Stack Developer',
  description: 'Portfolio of Brigidi Ackah Blay - Full Stack Developer specializing in scalable APIs, ML-integrated systems, and modern web applications.',
  keywords: 'Full Stack Developer, React, Node.js, Python, Machine Learning, API Development',
  authors: [{ name: 'Brigidi Ackah Blay' }],
  openGraph: {
    title: 'Brigidi Ackah Blay | Full Stack Developer',
    description: 'Portfolio showcasing innovative projects and technical expertise',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
} 