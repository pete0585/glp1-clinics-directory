'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Syringe } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-teal-50 shadow-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-display font-bold text-teal text-lg">
            <Syringe className="h-5 w-5" aria-label="Find GLP-1 Clinic logo" />
            <span>FindGLP1Clinic<span className="text-amber">.com</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/listings" className="hover:text-teal transition-colors">Browse Clinics</Link>
            <Link href="/categories/semaglutide-clinics" className="hover:text-teal transition-colors">Semaglutide</Link>
            <Link href="/categories/tirzepatide-clinics" className="hover:text-teal transition-colors">Tirzepatide</Link>
            <Link href="/categories/telehealth-weight-loss" className="hover:text-teal transition-colors">Telehealth</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/submit" className="btn-secondary text-xs px-4 py-2">
              List Your Clinic
            </Link>
          </div>

          <button
            className="md:hidden text-gray-600 hover:text-teal"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-teal-50 bg-white px-4 py-4 space-y-3">
          <Link href="/listings" className="block text-sm font-medium text-gray-700 hover:text-teal" onClick={() => setOpen(false)}>Browse Clinics</Link>
          <Link href="/categories/semaglutide-clinics" className="block text-sm font-medium text-gray-700 hover:text-teal" onClick={() => setOpen(false)}>Semaglutide Clinics</Link>
          <Link href="/categories/tirzepatide-clinics" className="block text-sm font-medium text-gray-700 hover:text-teal" onClick={() => setOpen(false)}>Tirzepatide Clinics</Link>
          <Link href="/categories/telehealth-weight-loss" className="block text-sm font-medium text-gray-700 hover:text-teal" onClick={() => setOpen(false)}>Telehealth</Link>
          <Link href="/categories/insurance-accepted" className="block text-sm font-medium text-gray-700 hover:text-teal" onClick={() => setOpen(false)}>Insurance Accepted</Link>
          <Link href="/submit" className="btn-primary w-full text-center mt-2" onClick={() => setOpen(false)}>List Your Clinic</Link>
        </div>
      )}
    </header>
  )
}
