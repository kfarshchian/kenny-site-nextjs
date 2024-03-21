import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import ThisScript from './ThisScript/ThisScript'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ['latin'] })
import {GoogleAnalyticsTracking} from '../components/GoogleAnalyticsTracking/GoogleAnalyticsTracking'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="robots" content="all" />
      <GoogleAnalyticsTracking/>
      <body>
      <SpeedInsights/>
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
