import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import ThisScript from './ThisScript/ThisScript'
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Loan officer Utah | Utah mortgage | Mortgage broker Utah | Reverse Mortgage Florida | Kenny Farshchian W/Primary Residential Mortgage, Inc.',
  description: 'Best Reverse Mortgage expert in Utah, Florida, and Texas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
      <Navbar />
      <main>
      <ThisScript />
        {children}
        <Analytics />
      </main>
      <Footer />
      </body>
    </html>
  )
}
