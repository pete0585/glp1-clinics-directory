import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Star } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best GLP-1 Weight Loss Clinics in Miami, FL (2026) | FindGLP1Clinic.com',
  description: 'Top GLP-1 clinics in Miami, Florida for semaglutide and tirzepatide treatment. Compare physician-supervised programs, pricing, insurance, and telehealth options in South Florida.',
  alternates: { canonical: '/best/glp1-clinics-in-miami-fl' },
}

export default async function BestMiamiPage() {
  const listings = await getListingsByCity('Miami', 'FL', 15)
  const topListings = listings.slice(0, 9)

  return (
    <div className="min-h-screen bg-offwhite">
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/glp1-clinics/fl" className="hover:text-teal transition-colors">Florida</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-charcoal">Best GLP-1 Clinics in Miami</span>
          </nav>

          <div className="flex items-center gap-2 mb-3">
            <Star className="h-5 w-5 text-amber fill-amber" />
            <span className="badge badge-amber text-xs">Featured List</span>
          </div>

          <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl">
            Best GLP-1 Weight Loss Clinics in Miami, FL
          </h1>
          <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
            Miami is one of the most competitive GLP-1 markets in the country. With a health-conscious population, a large Spanish-speaking community seeking bilingual providers, and one of the highest concentrations of med spas per capita in the US, Miami has dozens of GLP-1 options across South Florida. Here are the top clinics currently listed in Miami on FindGLP1Clinic.com.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 rounded-2xl bg-teal-50 border border-teal-100 p-5">
          <h2 className="text-sm font-bold text-charcoal mb-2">Miami-specific things to ask before booking</h2>
          <ul className="text-sm text-gray-600 space-y-1.5">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Bilingual providers — Miami has a large Spanish-speaking population; many clinics offer fully bilingual consultations</li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Florida Medicaid (Medicaid Managed Medical Assistance) coverage for GLP-1 varies by managed care plan — verify before assuming</li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Watch for med spa upsells — Miami&apos;s aesthetic medicine market is aggressive; GLP-1 programs bundled with IV therapy, hormone pellets, or aesthetic treatments are common. Make sure the GLP-1 component has real physician oversight</li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> South Florida heat affects compliance — some patients find self-injections harder in humid summer months; ask about storage guidelines</li>
          </ul>
        </div>

        {topListings.length > 0 ? (
          <>
            <h2 className="text-lg font-bold text-charcoal mb-4">
              {topListings.length} Top GLP-1 Clinics in Miami
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-soft">
            <p className="text-charcoal font-semibold mb-2">Loading Miami clinics…</p>
            <Link href="/glp1-clinics/fl/miami" className="btn-primary mt-4">
              Browse All Miami GLP-1 Clinics
            </Link>
          </div>
        )}

        {listings.length > 9 && (
          <div className="mt-6 text-center">
            <Link href="/glp1-clinics/fl/miami" className="btn-secondary inline-flex items-center gap-2">
              See all Miami GLP-1 clinics <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}

        <div className="mt-10 prose-guide">
          <h2>GLP-1 Treatment in Miami: What to Know</h2>
          <p>
            Miami&apos;s GLP-1 market is dominated by two types of providers: independent obesity medicine physicians (often affiliated with Coral Gables or Brickell-area practices) and med spa operators who added semaglutide programs to their existing aesthetic menus. The price range is wide — from $175/month compounded telehealth to $600+/month for concierge programs in Bal Harbour or South Beach.
          </p>
          <p>
            Florida does not have a state income tax, so there&apos;s no Florida-specific drug coverage program — insurance coverage is entirely employer-plan or Medicaid dependent. Florida Medicaid&apos;s coverage for GLP-1 obesity medications is limited; the most reliable pathway is a commercial plan that explicitly lists Wegovy or Zepbound on formulary.
          </p>
          <p>
            If you&apos;re in South Florida and want to compare more options, Boca Raton and Fort Lauderdale clinics are accessible from Miami and sometimes offer different pricing tiers.
          </p>

          <h2>Nearby Florida Cities</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-4">
            {[
              { city: 'Orlando', slug: 'orlando' },
              { city: 'Jacksonville', slug: 'jacksonville' },
              { city: 'Tampa', slug: 'tampa' },
            ].map((c) => (
              <Link
                key={c.slug}
                href={`/glp1-clinics/fl/${c.slug}`}
                className="badge badge-teal text-xs py-1.5 px-3 hover:bg-teal-100 transition-colors"
              >
                GLP-1 clinics in {c.city}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-amber-50 border border-amber-100 p-6 text-center">
          <h2 className="text-lg font-bold text-charcoal mb-2">Own a GLP-1 clinic in Miami?</h2>
          <p className="text-sm text-gray-600 mb-4">
            Claim your free listing and show Miami patients your pricing, medication types, and credentials.
          </p>
          <Link href="/submit" className="btn-amber">Claim Your Listing — Free</Link>
        </div>
      </div>
    </div>
  )
}
