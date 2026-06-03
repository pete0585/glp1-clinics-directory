import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Star } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best GLP-1 Weight Loss Clinics in Houston, TX (2026) | FindGLP1Clinic.com',
  description: 'The top GLP-1 clinics in Houston, Texas for semaglutide and tirzepatide treatment. Compare physician-supervised programs, pricing, insurance options, and telehealth availability.',
  alternates: { canonical: '/best/glp1-clinics-in-houston-tx' },
}

export default async function BestHoustonPage() {
  const listings = await getListingsByCity('Houston', 'TX', 15)
  const topListings = listings.slice(0, 9)

  return (
    <div className="min-h-screen bg-offwhite">
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/glp1-clinics/tx" className="hover:text-teal transition-colors">Texas</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-charcoal">Best GLP-1 Clinics in Houston</span>
          </nav>

          <div className="flex items-center gap-2 mb-3">
            <Star className="h-5 w-5 text-amber fill-amber" />
            <span className="badge badge-amber text-xs">Featured List</span>
          </div>

          <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl">
            Best GLP-1 Weight Loss Clinics in Houston, TX
          </h1>
          <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
            Houston has one of the largest concentrations of GLP-1 clinics in the US — reflecting the city&apos;s high demand for medically supervised weight loss. Whether you&apos;re looking for physician-supervised semaglutide programs, compounded options at a lower price point, or telehealth services, Houston has options across the board. Here are the top-rated clinics currently listed in FindGLP1Clinic.com&apos;s Houston directory.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        {/* What to look for callout */}
        <div className="mb-8 rounded-2xl bg-teal-50 border border-teal-100 p-5">
          <h2 className="text-sm font-bold text-charcoal mb-2">What makes a Houston GLP-1 clinic worth booking?</h2>
          <ul className="text-sm text-gray-600 space-y-1.5">
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Physician-supervised (MD or DO) programs with regular monitoring, not just a prescription</li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Transparent pricing — no hidden monthly membership fees on top of medication cost</li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Clear sourcing for compounded semaglutide (named 503B pharmacy, not just "from a pharmacy")</li>
            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> In-person labs included or clearly priced, not billed as a surprise</li>
          </ul>
        </div>

        {/* Listings */}
        {topListings.length > 0 ? (
          <>
            <h2 className="text-lg font-bold text-charcoal mb-4">
              {topListings.length} Top GLP-1 Clinics in Houston
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-soft">
            <p className="text-charcoal font-semibold mb-2">Loading Houston clinics…</p>
            <Link href="/glp1-clinics/tx/houston" className="btn-primary mt-4">
              Browse All Houston GLP-1 Clinics
            </Link>
          </div>
        )}

        {/* See all link */}
        {listings.length > 9 && (
          <div className="mt-6 text-center">
            <Link href="/glp1-clinics/tx/houston" className="btn-secondary inline-flex items-center gap-2">
              See all Houston GLP-1 clinics <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}

        {/* Context section */}
        <div className="mt-10 prose-guide">
          <h2>GLP-1 Treatment in Houston: What to Know</h2>
          <p>
            Houston is home to the Texas Medical Center — the world&apos;s largest medical complex — and a dense ecosystem of weight management specialists, bariatric surgeons who now offer GLP-1 programs, and independent med spas that have pivoted to semaglutide programs. The variety is real, and so is the variance in quality.
          </p>
          <p>
            Houston patients report wait times of 1–3 weeks for initial consultations at established physician practices, while telehealth programs serving Houston can often start you within 48–72 hours. If cost is the primary driver, several Houston-area clinics offer compounded semaglutide at $199–$299/month. If physician oversight matters more to you, look for programs affiliated with obesity medicine-certified physicians (ABOM diplomates) — the Texas Medical Center ecosystem includes several.
          </p>
          <p>
            Texas Medicaid (STAR/CHIP) does not currently cover GLP-1 medications for weight loss. Commercial insurance coverage in Houston depends heavily on your employer&apos;s plan. Ask any clinic you&apos;re considering to verify your specific benefits before your first appointment.
          </p>

          <h2>Nearby Cities in Texas</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-4">
            {[
              { city: 'Dallas', slug: 'dallas' },
              { city: 'San Antonio', slug: 'san-antonio' },
              { city: 'Austin', slug: 'austin' },
              { city: 'El Paso', slug: 'el-paso' },
            ].map((c) => (
              <Link
                key={c.slug}
                href={`/glp1-clinics/tx/${c.slug}`}
                className="badge badge-teal text-xs py-1.5 px-3 hover:bg-teal-100 transition-colors"
              >
                GLP-1 clinics in {c.city}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-2xl bg-amber-50 border border-amber-100 p-6 text-center">
          <h2 className="text-lg font-bold text-charcoal mb-2">Own a GLP-1 clinic in Houston?</h2>
          <p className="text-sm text-gray-600 mb-4">
            Claim your listing to show up in Houston searches with your pricing, medication types, and physician credentials.
          </p>
          <Link href="/submit" className="btn-amber">Claim Your Listing — Free</Link>
        </div>
      </div>
    </div>
  )
}
