import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, MapPin, ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import ListingCard from '@/components/ListingCard'
import { getListingsByState } from '@/lib/data'

const STATE_NAMES: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California',
  CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', FL: 'Florida', GA: 'Georgia',
  HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa',
  KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana', ME: 'Maine', MD: 'Maryland',
  MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi', MO: 'Missouri',
  MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire', NJ: 'New Jersey',
  NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio',
  OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina',
  SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont',
  VA: 'Virginia', WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming',
  DC: 'Washington, DC',
}

// Top cities per state (for cross-linking)
const STATE_CITIES: Record<string, { city: string; slug: string }[]> = {
  TX: [
    { city: 'Houston', slug: 'houston' }, { city: 'Dallas', slug: 'dallas' },
    { city: 'San Antonio', slug: 'san-antonio' }, { city: 'Austin', slug: 'austin' },
    { city: 'El Paso', slug: 'el-paso' },
  ],
  CA: [
    { city: 'Los Angeles', slug: 'los-angeles' }, { city: 'San Diego', slug: 'san-diego' },
    { city: 'Sacramento', slug: 'sacramento' }, { city: 'San Jose', slug: 'san-jose' },
  ],
  FL: [
    { city: 'Miami', slug: 'miami' }, { city: 'Orlando', slug: 'orlando' },
    { city: 'Jacksonville', slug: 'jacksonville' }, { city: 'Tampa', slug: 'tampa' },
  ],
  NY: [
    { city: 'New York', slug: 'new-york' }, { city: 'Buffalo', slug: 'buffalo' },
  ],
  AZ: [
    { city: 'Phoenix', slug: 'phoenix' }, { city: 'Scottsdale', slug: 'scottsdale' },
    { city: 'Tucson', slug: 'tucson' },
  ],
  TN: [
    { city: 'Nashville', slug: 'nashville' }, { city: 'Memphis', slug: 'memphis' },
  ],
  NC: [
    { city: 'Charlotte', slug: 'charlotte' }, { city: 'Raleigh', slug: 'raleigh' },
  ],
  NV: [
    { city: 'Las Vegas', slug: 'las-vegas' }, { city: 'Reno', slug: 'reno' },
  ],
  VA: [
    { city: 'Virginia Beach', slug: 'virginia-beach' }, { city: 'Richmond', slug: 'richmond' },
  ],
  GA: [
    { city: 'Atlanta', slug: 'atlanta' },
  ],
  CO: [
    { city: 'Denver', slug: 'denver' },
  ],
  IL: [
    { city: 'Chicago', slug: 'chicago' },
  ],
  PA: [
    { city: 'Philadelphia', slug: 'philadelphia' },
  ],
  OH: [
    { city: 'Columbus', slug: 'columbus' }, { city: 'Cleveland', slug: 'cleveland' },
  ],
}

const STATIC_STATE_PARAMS = [
  'tx', 'ca', 'fl', 'ny', 'az', 'tn', 'nc', 'nv', 'va', 'ga',
  'co', 'il', 'pa', 'oh', 'mi', 'wa', 'or', 'md', 'mn', 'sc',
]

interface PageProps {
  params: Promise<{ state: string }>
}

export async function generateStaticParams() {
  return STATIC_STATE_PARAMS.map((state) => ({ state }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state } = await params
  const stateAbbr = state.toUpperCase()
  const stateName = STATE_NAMES[stateAbbr] ?? stateAbbr

  return {
    title: `GLP-1 Weight Loss Clinics in ${stateName} — Semaglutide & Tirzepatide Directory`,
    description: `Find GLP-1 clinics across ${stateName} offering semaglutide (Ozempic, Wegovy) and tirzepatide (Mounjaro, Zepbound). Compare pricing, insurance, and physician credentials by city.`,
    alternates: {
      canonical: `/glp1-clinics/${state}`,
    },
  }
}

export default async function StatePage({ params }: PageProps) {
  const { state } = await params
  const stateAbbr = state.toUpperCase()
  const stateName = STATE_NAMES[stateAbbr]

  if (!stateName) notFound()

  const listings = await getListingsByState(stateAbbr, 50)
  const cities = STATE_CITIES[stateAbbr] ?? []

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How many GLP-1 clinics are in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `FindGLP1Clinic.com lists ${listings.length > 0 ? listings.length + '+' : 'dozens of'} GLP-1 weight loss clinics across ${stateName}. This includes in-person clinics, telehealth providers, and physician-supervised programs.`,
        },
      },
      {
        '@type': 'Question',
        name: `Does ${stateName} Medicaid cover semaglutide for weight loss?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${stateName} Medicaid coverage for GLP-1 medications varies by plan and diagnosis. Some Medicaid managed care plans in ${stateName} now cover Wegovy for obesity treatment, while others require a type 2 diabetes diagnosis for Ozempic coverage. Contact your Medicaid plan directly or ask a clinic to verify your specific coverage.`,
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-offwhite">
        {/* Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-teal transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-charcoal font-medium">{stateName}</span>
            </nav>

            <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl">
              GLP-1 Weight Loss Clinics in {stateName}
            </h1>
            <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
              Browse GLP-1 clinics across {stateName} offering semaglutide and tirzepatide treatment. Compare providers by city, medication type, insurance acceptance, and physician credentials.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {/* City grid */}
          {cities.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-bold text-charcoal mb-4">Browse by City in {stateName}</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {cities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/glp1-clinics/${state}/${c.slug}`}
                    className="flex items-center gap-2 rounded-xl bg-white border border-gray-100 shadow-soft px-4 py-3 text-sm font-medium text-charcoal hover:border-teal hover:text-teal transition-colors"
                  >
                    <MapPin className="h-3.5 w-3.5 text-teal-300 flex-shrink-0" />
                    {c.city}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Listings */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-bold text-charcoal">
              {listings.length > 0 ? `${listings.length}+ GLP-1 Clinics` : 'GLP-1 Clinics'} in {stateName}
            </h2>
            <Link href="/listings" className="text-sm text-teal hover:underline flex items-center gap-1">
              Browse all states <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {listings.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-soft">
              <MapPin className="h-10 w-10 text-teal-200 mx-auto mb-3" />
              <p className="text-lg font-semibold text-charcoal mb-2">No clinics listed in {stateName} yet</p>
              <p className="text-sm text-gray-500 mb-6">We&apos;re adding clinics daily. Submit your clinic below.</p>
              <Link href="/submit" className="btn-primary">Add Your Clinic — Free</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-8 rounded-2xl bg-teal-50 border border-teal-100 p-6 text-center">
            <h2 className="text-lg font-bold text-charcoal mb-2">
              Own a GLP-1 clinic in {stateName}?
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Claim your free listing and let patients in {stateName} find your clinic when they&apos;re ready to start treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/submit" className="btn-primary">Add Your Clinic — Free</Link>
              <Link href="/listings" className="btn-secondary">Browse All Clinics</Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-10">
            <h2 className="text-xl font-bold text-charcoal mb-5">GLP-1 Clinics in {stateName} — FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: `How many GLP-1 clinics are in ${stateName}?`,
                  a: `FindGLP1Clinic.com lists ${listings.length > 0 ? listings.length + '+' : 'dozens of'} GLP-1 weight loss clinics across ${stateName}. Clinics range from large multi-location weight loss chains to independent physician practices and med spas offering semaglutide and tirzepatide programs.`,
                },
                {
                  q: `Does ${stateName} Medicaid cover GLP-1 weight loss medications?`,
                  a: `${stateName} Medicaid coverage for GLP-1 drugs like Wegovy and Ozempic varies by plan. Some managed care plans now cover semaglutide for obesity when BMI ≥30 with comorbidities. The most reliable way to verify coverage: call a clinic that accepts insurance and ask them to run your benefits before your first appointment.`,
                },
                {
                  q: `What's the cheapest way to get GLP-1 treatment in ${stateName}?`,
                  a: `Compounded semaglutide — available through licensed 503B compounding pharmacies — typically runs $150–$350/month in ${stateName}, compared to $800–$1,300/month for brand-name Wegovy. Many telehealth providers also offer lower-cost programs because they have lower overhead than brick-and-mortar clinics. Use the filter above to find telehealth and compounding options in ${stateName}.`,
                },
              ].map(({ q, a }, i) => (
                <details key={i} className="bg-white rounded-xl border border-gray-100 shadow-soft group">
                  <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                    {q}
                    <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
                  </summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
