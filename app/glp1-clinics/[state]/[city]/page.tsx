import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, MapPin, ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

// State abbreviation → display name
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

// URL state slug (lowercase abbr) → uppercase abbreviation
function slugToStateAbbr(slug: string): string {
  return slug.toUpperCase()
}

// City URL slug → display name ("san-antonio" → "San Antonio")
function slugToCityName(slug: string): string {
  return slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

// City/state pairs to generate static pages for (top metros with GLP-1 demand)
const STATIC_CITY_PARAMS = [
  { state: 'tx', city: 'houston' },
  { state: 'tx', city: 'dallas' },
  { state: 'tx', city: 'san-antonio' },
  { state: 'tx', city: 'austin' },
  { state: 'tx', city: 'el-paso' },
  { state: 'ca', city: 'los-angeles' },
  { state: 'ca', city: 'san-diego' },
  { state: 'ca', city: 'sacramento' },
  { state: 'ca', city: 'san-jose' },
  { state: 'fl', city: 'miami' },
  { state: 'fl', city: 'orlando' },
  { state: 'fl', city: 'jacksonville' },
  { state: 'fl', city: 'tampa' },
  { state: 'ny', city: 'new-york' },
  { state: 'ny', city: 'buffalo' },
  { state: 'az', city: 'phoenix' },
  { state: 'az', city: 'scottsdale' },
  { state: 'az', city: 'tucson' },
  { state: 'il', city: 'chicago' },
  { state: 'tn', city: 'nashville' },
  { state: 'tn', city: 'memphis' },
  { state: 'nc', city: 'charlotte' },
  { state: 'nc', city: 'raleigh' },
  { state: 'co', city: 'denver' },
  { state: 'nv', city: 'las-vegas' },
  { state: 'nv', city: 'reno' },
  { state: 'va', city: 'virginia-beach' },
  { state: 'va', city: 'richmond' },
  { state: 'ga', city: 'atlanta' },
  { state: 'pa', city: 'philadelphia' },
  { state: 'oh', city: 'columbus' },
  { state: 'oh', city: 'cleveland' },
  { state: 'mi', city: 'detroit' },
  { state: 'wa', city: 'seattle' },
  { state: 'or', city: 'portland' },
]

// Nearby cities per state for cross-linking
const NEARBY_CITIES: Record<string, { city: string; stateSlug: string }[]> = {
  TX: [{ city: 'Houston', stateSlug: 'tx' }, { city: 'Dallas', stateSlug: 'tx' }, { city: 'San Antonio', stateSlug: 'tx' }, { city: 'Austin', stateSlug: 'tx' }],
  CA: [{ city: 'Los Angeles', stateSlug: 'ca' }, { city: 'San Diego', stateSlug: 'ca' }, { city: 'Sacramento', stateSlug: 'ca' }],
  FL: [{ city: 'Miami', stateSlug: 'fl' }, { city: 'Orlando', stateSlug: 'fl' }, { city: 'Jacksonville', stateSlug: 'fl' }, { city: 'Tampa', stateSlug: 'fl' }],
  NY: [{ city: 'New York', stateSlug: 'ny' }, { city: 'Buffalo', stateSlug: 'ny' }],
  AZ: [{ city: 'Phoenix', stateSlug: 'az' }, { city: 'Scottsdale', stateSlug: 'az' }, { city: 'Tucson', stateSlug: 'az' }],
  TN: [{ city: 'Nashville', stateSlug: 'tn' }, { city: 'Memphis', stateSlug: 'tn' }],
  NC: [{ city: 'Charlotte', stateSlug: 'nc' }, { city: 'Raleigh', stateSlug: 'nc' }],
  NV: [{ city: 'Las Vegas', stateSlug: 'nv' }, { city: 'Reno', stateSlug: 'nv' }],
}

interface PageProps {
  params: Promise<{ state: string; city: string }>
}

export async function generateStaticParams() {
  return STATIC_CITY_PARAMS
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state, city } = await params
  const stateAbbr = slugToStateAbbr(state)
  const cityName = slugToCityName(city)
  const stateName = STATE_NAMES[stateAbbr] ?? stateAbbr

  return {
    title: `GLP-1 Clinics in ${cityName}, ${stateName} — Semaglutide & Tirzepatide Providers`,
    description: `Find GLP-1 weight loss clinics in ${cityName}, ${stateName}. Compare semaglutide and tirzepatide providers by pricing, insurance acceptance, and physician credentials. Browse clinics near you.`,
    alternates: {
      canonical: `/glp1-clinics/${state}/${city}`,
    },
    openGraph: {
      title: `GLP-1 Weight Loss Clinics in ${cityName}, ${stateName}`,
      description: `Compare GLP-1 clinics in ${cityName}: semaglutide, tirzepatide, pricing, insurance, and physician-supervised programs.`,
    },
  }
}

export default async function CityPage({ params }: PageProps) {
  const { state, city } = await params
  const stateAbbr = slugToStateAbbr(state)
  const cityName = slugToCityName(city)
  const stateName = STATE_NAMES[stateAbbr]

  if (!stateName) notFound()

  const listings = await getListingsByCity(cityName, stateAbbr, 30)

  const nearbyCities = (NEARBY_CITIES[stateAbbr] ?? []).filter(
    (c) => c.city.toLowerCase().replace(/\s+/g, '-') !== city
  )

  const listingCount = listings.length
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How many GLP-1 clinics are in ${cityName}, ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `FindGLP1Clinic.com currently lists ${listingCount > 0 ? listingCount : 'multiple'} GLP-1 weight loss clinics in ${cityName}, ${stateName}. New clinics are added daily as the directory grows.`,
        },
      },
      {
        '@type': 'Question',
        name: `How much does semaglutide cost in ${cityName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `GLP-1 medication costs in ${cityName} typically range from $150–$600 per month depending on whether you use brand-name (Wegovy, Ozempic) or compounded semaglutide, and whether your insurance covers it. Many clinics offer initial consultation packages that include the first month of medication.`,
        },
      },
      {
        '@type': 'Question',
        name: `Does insurance cover GLP-1 treatment in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Insurance coverage for GLP-1 medications like Wegovy and Ozempic varies by plan and employer. Some ${stateName} Medicaid plans now cover semaglutide for obesity treatment. Use the insurance filter on this page to find clinics that verify coverage for you.`,
        },
      },
      {
        '@type': 'Question',
        name: `Can I do GLP-1 treatment via telehealth in ${cityName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. Many GLP-1 providers serving ${cityName} offer telehealth consultations, meaning you can start semaglutide or tirzepatide treatment without an in-person visit. Look for the "Telehealth" badge on clinic listings.`,
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
              <Link href={`/glp1-clinics/${state}`} className="hover:text-teal transition-colors">{stateName}</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-charcoal font-medium">{cityName}</span>
            </nav>

            <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl">
              GLP-1 Weight Loss Clinics in {cityName}, {stateName}
            </h1>
            <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
              Browse {listingCount > 0 ? listingCount : 'available'} GLP-1 clinics in {cityName} offering semaglutide (Ozempic, Wegovy), tirzepatide (Mounjaro, Zepbound), and medically-supervised weight loss programs. Compare pricing, insurance, and physician credentials before you book.
            </p>

            {/* Quick filters */}
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/categories/semaglutide-clinics" className="badge badge-teal text-xs py-1.5 px-3 hover:bg-teal-100 transition-colors">
                Semaglutide
              </Link>
              <Link href="/categories/tirzepatide-clinics" className="badge badge-teal text-xs py-1.5 px-3 hover:bg-teal-100 transition-colors">
                Tirzepatide
              </Link>
              <Link href="/categories/insurance-accepted" className="badge badge-teal text-xs py-1.5 px-3 hover:bg-teal-100 transition-colors">
                Insurance Accepted
              </Link>
              <Link href="/categories/telehealth-weight-loss" className="badge badge-teal text-xs py-1.5 px-3 hover:bg-teal-100 transition-colors">
                Telehealth
              </Link>
              <Link href="/categories/physician-supervised" className="badge badge-teal text-xs py-1.5 px-3 hover:bg-teal-100 transition-colors">
                Physician-Supervised
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="flex-1 min-w-0">
              {listings.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-soft">
                  <MapPin className="h-10 w-10 text-teal-200 mx-auto mb-3" />
                  <p className="text-lg font-semibold text-charcoal mb-2">
                    No clinics listed in {cityName} yet
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    We&apos;re adding clinics daily. Check back soon, or browse all {stateName} GLP-1 clinics.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href={`/glp1-clinics/${state}`} className="btn-primary">
                      Browse {stateName} clinics
                    </Link>
                    <Link href="/submit" className="btn-secondary">
                      Add your clinic
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-5 flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold text-charcoal">{listingCount}</span> clinics in {cityName}, {stateAbbr}
                    </p>
                    <Link href="/listings" className="text-sm text-teal hover:underline flex items-center gap-1">
                      Browse all <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {listings.map((listing) => (
                      <ListingCard key={listing.id} listing={listing} />
                    ))}
                  </div>

                  {/* Submit CTA */}
                  <div className="mt-8 rounded-2xl bg-teal-50 border border-teal-100 p-6 text-center">
                    <h2 className="text-lg font-bold text-charcoal mb-2">
                      Own a GLP-1 clinic in {cityName}?
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">
                      Claim your free listing or add your clinic to reach patients actively searching in {cityName}.
                    </p>
                    <Link href="/submit" className="btn-primary">
                      Add Your Clinic — Free
                    </Link>
                  </div>
                </>
              )}

              {/* FAQ Section */}
              <div className="mt-10">
                <h2 className="text-xl font-bold text-charcoal mb-5">
                  GLP-1 Clinics in {cityName} — FAQ
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: `How many GLP-1 clinics are in ${cityName}?`,
                      a: `FindGLP1Clinic.com lists ${listingCount > 0 ? listingCount : 'multiple'} GLP-1 weight loss clinics in ${cityName}, ${stateName}. This includes physician-supervised programs, med spas offering semaglutide, and telehealth providers that serve the area. New clinics are added weekly.`,
                    },
                    {
                      q: `How much does semaglutide cost in ${cityName}?`,
                      a: `GLP-1 treatment in ${cityName} typically costs $150–$600 per month. Brand-name Wegovy and Ozempic are on the higher end ($800–$1,300/month without insurance). Compounded semaglutide — available at many ${cityName} clinics — runs $150–$350/month. Many clinics bundle the initial consultation into the first month's cost.`,
                    },
                    {
                      q: `Does insurance cover Ozempic or Wegovy in ${stateName}?`,
                      a: `Coverage varies. Some commercial plans cover Wegovy for obesity (BMI ≥30 or ≥27 with a comorbidity) when prescribed by a physician. Ozempic is primarily covered for type 2 diabetes — weight loss coverage is narrower. ${stateName} Medicaid coverage depends on your specific plan. The best way to know: call the clinics that list "Insurance Accepted" and ask them to verify your specific plan.`,
                    },
                    {
                      q: `Can I start GLP-1 treatment via telehealth in ${cityName}?`,
                      a: `Yes — several GLP-1 providers serving ${cityName} offer fully virtual consultations. You can get a prescription for semaglutide or tirzepatide without an in-person visit, with medication shipped directly to you. Look for the Telehealth badge on listings above. Note: some telehealth providers don't accept insurance, so compare options carefully.`,
                    },
                    {
                      q: `What's the difference between semaglutide and tirzepatide?`,
                      a: `Both are GLP-1 receptor agonists that reduce appetite and promote weight loss. Semaglutide (Wegovy, Ozempic) targets the GLP-1 receptor only. Tirzepatide (Mounjaro, Zepbound) targets both GLP-1 and GIP receptors, which tends to produce slightly more weight loss on average (around 20–22% vs. 14–16% for semaglutide). Cost and insurance coverage differ — tirzepatide is newer and often harder to get covered.`,
                    },
                  ].map(({ q, a }, i) => (
                    <details
                      key={i}
                      className="bg-white rounded-xl border border-gray-100 shadow-soft group"
                    >
                      <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                        {q}
                        <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
                      </summary>
                      <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{a}</div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Guide links */}
              <div className="mt-10 rounded-2xl bg-white border border-gray-100 shadow-soft p-6">
                <h2 className="text-lg font-bold text-charcoal mb-4">GLP-1 Research Guides</h2>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {[
                    { title: 'Semaglutide vs. Tirzepatide: Which Is Right for You?', href: '/guides/semaglutide-vs-tirzepatide' },
                    { title: 'Does Insurance Cover Ozempic, Wegovy, or Mounjaro?', href: '/guides/does-insurance-cover-ozempic' },
                    { title: 'Brand vs. Compounded Semaglutide', href: '/guides/brand-vs-compounded-semaglutide' },
                    { title: 'How Much Does Semaglutide Cost Per Month?', href: '/guides/how-much-does-semaglutide-cost' },
                    { title: '8 Red Flags When Choosing a GLP-1 Clinic', href: '/guides/red-flags-choosing-glp1-clinic' },
                  ].map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="flex items-center gap-2 text-sm text-teal hover:underline py-1"
                    >
                      <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" />
                      {guide.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-64 flex-shrink-0 space-y-5">
              {/* Nearby cities */}
              {nearbyCities.length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-soft p-5">
                  <h3 className="text-sm font-bold text-charcoal mb-3">Nearby Cities</h3>
                  <ul className="space-y-2">
                    {nearbyCities.map((c) => (
                      <li key={c.city}>
                        <Link
                          href={`/glp1-clinics/${c.stateSlug}/${c.city.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-teal transition-colors"
                        >
                          <MapPin className="h-3.5 w-3.5 text-teal-300 flex-shrink-0" />
                          {c.city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* State page link */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-soft p-5">
                <h3 className="text-sm font-bold text-charcoal mb-2">All {stateName} Clinics</h3>
                <p className="text-xs text-gray-500 mb-3">See every GLP-1 clinic in {stateName}</p>
                <Link href={`/glp1-clinics/${state}`} className="btn-primary text-xs py-2 px-4 w-full justify-center">
                  Browse {stateName}
                </Link>
              </div>

              {/* Claim CTA */}
              <div className="bg-amber-50 rounded-2xl border border-amber-100 p-5">
                <h3 className="text-sm font-bold text-charcoal mb-2">Clinic Owner?</h3>
                <p className="text-xs text-gray-600 mb-3">
                  Claim your free listing and show patients your pricing, medication types, and insurance options.
                </p>
                <Link href="/submit" className="btn-amber text-xs py-2 px-4 w-full justify-center">
                  Claim Your Listing
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
