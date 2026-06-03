import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { getListingsByCategory } from '@/lib/data'
import ListingCard from '@/components/ListingCard'
import { CATEGORIES } from '@/lib/types'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const cat = CATEGORIES.find((c) => c.slug === slug)
  if (!cat) return {}

  return {
    title: `${cat.label} Near You | FindGLP1Clinic.com`,
    description: `${cat.description}. Compare pricing, credentials, and insurance. Find the right GLP-1 clinic for you.`,
  }
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ slug: cat.slug }))
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const cat = CATEGORIES.find((c) => c.slug === slug)
  if (!cat) notFound()

  const filterParams: Parameters<typeof getListingsByCategory>[0] = {}
  if ('medication' in cat && cat.medication) filterParams.medication = cat.medication
  if ('clinic_type' in cat && cat.clinic_type) filterParams.clinic_type = cat.clinic_type
  if ('insurance_accepted' in cat && cat.insurance_accepted) filterParams.insurance_accepted = true
  if ('physician_supervised' in cat && cat.physician_supervised) filterParams.physician_supervised = true

  const listings = await getListingsByCategory(filterParams, 50)

  return (
    <div className="min-h-screen bg-offwhite">
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-teal">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/listings" className="hover:text-teal">Browse</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-charcoal">{cat.label}</span>
          </nav>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{cat.icon}</span>
            <h1 className="text-2xl font-bold text-charcoal sm:text-3xl">{cat.label}</h1>
          </div>
          <p className="text-gray-500 max-w-2xl">{cat.description}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-charcoal">{listings.length}</span> clinics
          </p>
          <Link href="/listings" className="text-sm text-teal hover:underline flex items-center gap-1">
            Browse all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {listings.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg font-semibold mb-2">No clinics found in this category yet</p>
            <p className="text-sm mb-4">Check back soon — we&apos;re adding clinics daily.</p>
            <Link href="/listings" className="btn-primary">Browse all clinics</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}

        {/* CTA for clinics */}
        <div className="mt-12 rounded-2xl bg-teal p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Is your clinic missing from this list?</h2>
          <p className="text-teal-100 mb-4 text-sm">
            Submit your clinic for free. Verified listings show up in category searches like this one.
          </p>
          <Link href="/submit" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal hover:bg-teal-50">
            List Your Clinic Free
          </Link>
        </div>
      </div>
    </div>
  )
}
