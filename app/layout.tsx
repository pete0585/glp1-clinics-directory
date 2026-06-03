import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'FindGLP1Clinic.com — Find a GLP-1 Weight Loss Clinic Near You',
    template: '%s | FindGLP1Clinic.com',
  },
  description:
    'Compare GLP-1 weight loss clinics by medication type (semaglutide, tirzepatide), pricing, insurance, and physician credentials. Find a verified clinic near you.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.findglp1clinic.com'),
  openGraph: {
    siteName: 'FindGLP1Clinic.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
