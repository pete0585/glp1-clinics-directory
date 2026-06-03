import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck, ArrowRight, DollarSign, Stethoscope, Wifi, CheckCircle, TrendingUp, Users } from 'lucide-react'
import SearchBar from '@/components/SearchBar'
import ListingCard from '@/components/ListingCard'
import { getFeaturedListings, getTotalCount } from '@/lib/data'
import { CATEGORIES } from '@/lib/types'

export const metadata: Metadata = {
  title: 'FindGLP1Clinic.com — Find a GLP-1 Weight Loss Clinic Near You',
  description:
    'Compare GLP-1 weight loss clinics by medication type (semaglutide, tirzepatide), pricing, insurance, and physician credentials. Free to search. Thousands of verified clinics nationwide.',
}

const TOP_CITIES = [
  { name: 'Houston', state: 'TX' }, { name: 'Dallas', state: 'TX' },
  { name: 'Miami', state: 'FL' }, { name: 'Orlando', state: 'FL' },
  { name: 'Los Angeles', state: 'CA' }, { name: 'San Diego', state: 'CA' },
  { name: 'New York', state: 'NY' }, { name: 'Chicago', state: 'IL' },
  { name: 'Phoenix', state: 'AZ' }, { name: 'Atlanta', state: 'GA' },
  { name: 'Denver', state: 'CO' }, { name: 'Nashville', state: 'TN' },
]

export default async function HomePage() {
  const [featured, listingCount] = await Promise.all([
    getFeaturedListings(6).catch(() => []),
    getTotalCount().catch(() => 0),
  ])

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-hero pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-100 px-4 py-2 text-sm text-teal-700 mb-6">
            <TrendingUp className="h-4 w-4 text-teal" />
            <span>
              {listingCount > 0
                ? `${listingCount.toLocaleString()} GLP-1 clinics across the US`
                : 'The largest GLP-1 clinic directory in the US'}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-charcoal leading-tight sm:text-5xl md:text-6xl tracking-tight text-balance">
            Find a GLP-1 clinic{' '}
            <span className="text-teal">that fits your situation</span>
          </h1>

          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Compare medication types, monthly pricing, insurance acceptance, and physician
            credentials — before you book. Semaglutide, tirzepatide, brand name or compounded.
          </p>

          <div className="mt-8 flex justify-center">
            <SearchBar size="large" />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <DollarSign className="h-4 w-4 text-amber" />
              Price transparency
            </span>
            <span className="flex items-center gap-1.5">
              <Stethoscope className="h-4 w-4 text-teal-400" />
              Physician credentials
            </span>
            <span className="flex items-center gap-1.5">
              <Wifi className="h-4 w-4 text-teal-400" />
              Telehealth options
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              Insurance filters
            </span>
          </div>
        </div>
      </section>

      {/* Why this directory */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 mx-auto mb-4">
                <DollarSign className="h-7 w-7 text-teal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">See Real Pricing</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                GLP-1 costs vary wildly — $150 to $600+/month depending on brand vs.
                compounded, clinic type, and insurance. We show you what to expect before you call.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 mx-auto mb-4">
                <Stethoscope className="h-7 w-7 text-amber" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Know Who&apos;s Supervising</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                MD/DO-supervised vs. NP/PA-led vs. med spa — it matters for safety and coverage.
                Filter by physician credentials to find the right level of medical oversight.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 mx-auto mb-4">
                <ShieldCheck className="h-7 w-7 text-teal" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Filter by Insurance</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Some GLP-1 clinics take insurance for Wegovy or Ozempic — others are cash-pay
                only. Filter to see only clinics that work with your coverage before you call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by category */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-offwhite">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="section-heading">Browse by Medication or Type</h2>
            <p className="section-subheading">
              Find clinics that offer exactly what you&apos;re looking for.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="card p-5 flex items-center gap-3 group hover:border-teal-200"
              >
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-charcoal group-hover:text-teal transition-colors">
                    {cat.label}
                  </p>
                  <p className="text-xs text-gray-400 leading-tight mt-0.5 hidden sm:block">
                    {cat.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-teal ml-auto flex-shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured clinics */}
      {featured.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="section-heading">Featured GLP-1 Clinics</h2>
                <p className="section-subheading">Verified, transparent pricing, accepting new patients.</p>
              </div>
              <Link href="/listings" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-600">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((listing) => (
                <ListingCard key={listing.id} listing={listing} featured />
              ))}
            </div>

            <div className="mt-6 text-center sm:hidden">
              <Link href="/listings" className="btn-secondary">
                Browse all clinics <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Browse by city */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-offwhite">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="section-heading">Find a Clinic in Your City</h2>
            <p className="section-subheading">GLP-1 clinics in all 50 states.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {TOP_CITIES.map((city) => (
              <Link
                key={`${city.name}-${city.state}`}
                href={`/listings?state=${city.state}&city=${encodeURIComponent(city.name)}`}
                className="rounded-xl bg-white px-3 py-3.5 text-center shadow-soft hover:shadow-card transition-shadow group"
              >
                <p className="text-sm font-semibold text-charcoal group-hover:text-teal transition-colors">
                  {city.name}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{city.state}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/listings" className="btn-secondary">
              Browse all cities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* For clinic owners CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm text-white/80 mb-6">
            <Users className="h-4 w-4" />
            For GLP-1 clinic owners
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            One new patient covers your listing fee in the first month.
          </h2>
          <p className="text-teal-100 text-lg mb-8 leading-relaxed">
            GLP-1 patients are actively searching right now. A Verified listing puts your clinic
            in front of motivated patients who are ready to start treatment — for $99/year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-teal hover:bg-teal-50 transition-colors">
              Get Listed Free
            </Link>
            <Link href="/submit#pricing" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/50 px-8 py-4 text-base font-semibold text-white hover:border-white transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-10 px-4 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-teal-300" /> Free to search, always</span>
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-amber-400" /> Verified listings available</span>
            <span className="flex items-center gap-2"><DollarSign className="h-4 w-4 text-teal-300" /> Transparent pricing data</span>
          </div>
        </div>
      </section>
    </div>
  )
}
