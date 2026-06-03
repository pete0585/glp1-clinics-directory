import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Star } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best GLP-1 Weight Loss Clinics in Los Angeles, CA (2026) | FindGLP1Clinic.com',
  description: 'Top GLP-1 clinics in Los Angeles for semaglutide and tirzepatide treatment. Physician-supervised programs, compounded options, insurance, and telehealth availability in LA.',
  alternates: { canonical: '/best/glp1-clinics-in-los-angeles-ca' },
}

export default async function BestLAPage() {
  const listings = await getListingsByCity('Los Angeles', 'CA', 15)
  const topListings = listings.slice(0, 9)

  return (
    <div className="min-h-screen bg-offwhite">
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/glp1-clinics/ca" className="hover:text-teal transition-colors">California</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-charcoal">Best GLP-1 Clinics in Los Angeles</span>
          </nav>

          <div className="flex items-center gap-2 mb-3">
            <Star className="h-5 w-5 text-amber fill-amber" />
            <span className="badge badge-amber text-xs">Featured List</span>
          </div>

          <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl">
            Best GLP-1 Weight Loss Clinics in Los Angeles, CA
          </h1>
          <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
            Los Angeles is one of the top markets for GLP-1 treatment — driven by a health-conscious population, a dense concentration of concierge medical practices, and strong demand from patients who want physician-supervised programs. Here are the top GLP-1 clinics currently listed in Los Angeles on FindGLP1Clinic.com.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 rounded-2xl bg-teal-50 border border-teal-100 p-5">
          <h2 className="text-sm font-bold text-charcoal mb-2">What to look for in an LA GLP-1 clinic</h2>
          <ul className="text-sm text-gray-600 space-y-1.5">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Physician oversight — LA has many med spas offering semaglutide; physician-supervised programs provide a higher standard of care</li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Medi-Cal compatibility — some LA clinics accept Medi-Cal for GLP-1 prescriptions; ask before assuming</li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Telehealth options — LA traffic is real; telehealth-capable clinics save hours per month</li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> All-inclusive pricing — some LA clinics bundle labs, follow-ups, and medication; compare total cost, not just the medication sticker price</li>
          </ul>
        </div>

        {topListings.length > 0 ? (
          <>
            <h2 className="text-lg font-bold text-charcoal mb-4">
              {topListings.length} Top GLP-1 Clinics in Los Angeles
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-soft">
            <p className="text-charcoal font-semibold mb-2">Loading Los Angeles clinics…</p>
            <Link href="/glp1-clinics/ca/los-angeles" className="btn-primary mt-4">
              Browse All LA GLP-1 Clinics
            </Link>
          </div>
        )}

        {listings.length > 9 && (
          <div className="mt-6 text-center">
            <Link href="/glp1-clinics/ca/los-angeles" className="btn-secondary inline-flex items-center gap-2">
              See all Los Angeles GLP-1 clinics <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}

        <div className="mt-10 prose-guide">
          <h2>GLP-1 Treatment in Los Angeles: What to Know</h2>
          <p>
            California Medi-Cal covers GLP-1 medications for obesity in certain plans — making Los Angeles one of the few major markets where Medicaid patients have meaningful access to semaglutide and tirzepatide without full out-of-pocket costs. If you&apos;re on Medi-Cal, call the clinic first and ask specifically whether they verify Medi-Cal coverage for GLP-1 prescriptions.
          </p>
          <p>
            LA&apos;s GLP-1 market leans heavily toward concierge-style programs — often $300–$500/month all-in — and a growing number of telehealth programs started by California-based providers. Competition has driven prices down on compounded semaglutide; several LA-area programs now offer it at $175–$250/month.
          </p>
          <p>
            The LA basin has dense coverage across multiple neighborhoods: Beverly Hills and West Hollywood attract higher-end programs; the San Fernando Valley and South Bay have more affordable clinic options. San Diego is approximately 2 hours south with its own concentration of GLP-1 providers if you&apos;re near the southern end of the county.
          </p>

          <h2>Other California Cities</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-4">
            {[
              { city: 'San Diego', slug: 'san-diego' },
              { city: 'Sacramento', slug: 'sacramento' },
              { city: 'San Jose', slug: 'san-jose' },
            ].map((c) => (
              <Link
                key={c.slug}
                href={`/glp1-clinics/ca/${c.slug}`}
                className="badge badge-teal text-xs py-1.5 px-3 hover:bg-teal-100 transition-colors"
              >
                GLP-1 clinics in {c.city}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-amber-50 border border-amber-100 p-6 text-center">
          <h2 className="text-lg font-bold text-charcoal mb-2">Own a GLP-1 clinic in Los Angeles?</h2>
          <p className="text-sm text-gray-600 mb-4">
            Claim your free listing and reach Los Angeles patients searching for semaglutide and tirzepatide providers.
          </p>
          <Link href="/submit" className="btn-amber">Claim Your Listing — Free</Link>
        </div>
      </div>
    </div>
  )
}
