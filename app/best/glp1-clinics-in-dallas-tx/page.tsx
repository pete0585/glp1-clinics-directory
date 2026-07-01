import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Star } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best GLP-1 Weight Loss Clinics in Dallas, TX (2026) | FindGLP1Clinic.com',
  description: 'Top GLP-1 clinics in Dallas–Fort Worth for semaglutide and tirzepatide treatment. Compare physician-supervised programs, pricing, FDA-approved vs. compounded options, and telehealth.',
  alternates: { canonical: '/best/glp1-clinics-in-dallas-tx' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is compounded semaglutide legal in Texas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded semaglutide is available in Texas from licensed 503B compounding pharmacies while FDA shortage status is in effect. Texas has no additional state-level restrictions on telehealth prescribing of compounded GLP-1 medications, which is why Dallas has a large number of providers — including some fly-by-night operations. Always verify that your Dallas clinic uses a named, licensed 503B outsourcing facility and that a physician (MD or DO) is supervising your prescription.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does semaglutide cost in Dallas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded semaglutide through Dallas telehealth and med spa programs typically runs $199–$349/month. Brand-name Wegovy with insurance coverage can cost as little as $0–$25/month with Novo Nordisk\'s savings card for commercially insured patients. Without insurance, brand-name Wegovy is $1,100–$1,350/month. Ask any Dallas clinic to run your insurance benefits before your first appointment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to visit a clinic in person in Dallas for GLP-1 treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. Many DFW-area GLP-1 programs are fully telehealth — initial consultation, prescription, and follow-ups all done remotely. Some in-person Dallas clinics require an initial visit for labs and vitals, then transition to telehealth follow-ups. For patients in Dallas\'s suburban sprawl, telehealth often makes more logistical sense than driving to an in-person clinic for monthly check-ins.',
      },
    },
  ],
}

export default async function BestDallasTxPage() {
  const listings = await getListingsByCity('Dallas', 'TX', 15)
  const topListings = listings.slice(0, 9)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-offwhite">
        <div className="bg-white border-b border-gray-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
            <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-teal transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/glp1-clinics/tx" className="hover:text-teal transition-colors">Texas</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-charcoal">Best GLP-1 Clinics in Dallas</span>
            </nav>

            <div className="flex items-center gap-2 mb-3">
              <Star className="h-5 w-5 text-amber fill-amber" />
              <span className="badge badge-amber text-xs">Featured List</span>
            </div>

            <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl">
              Best GLP-1 Clinics in Dallas, TX
            </h1>
            <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
              Dallas–Fort Worth is the 4th largest metro in the US and has a dense, competitive GLP-1 clinic market — which means plenty of options and meaningful quality variance. Texas has no additional state oversight of telehealth compounded semaglutide, so verifying FDA credentials and 503B pharmacy sourcing is especially important here. Here are the top-rated clinics in our Dallas directory.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
          {/* What to look for callout */}
          <div className="mb-8 rounded-2xl bg-teal-50 border border-teal-100 p-5">
            <h2 className="text-sm font-bold text-charcoal mb-2">What makes a Dallas GLP-1 clinic worth booking?</h2>
            <ul className="text-sm text-gray-600 space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Physician oversight from a licensed MD or DO — not just an NP or PA operating independently</li>
              <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Named 503B compounding pharmacy for compounded semaglutide (ask specifically, not just "from a pharmacy")</li>
              <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Insurance verification offered before your first appointment — many Dallas plans cover brand-name GLP-1s</li>
              <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Transparent pricing with no hidden monthly platform or membership fees stacked on top of medication cost</li>
            </ul>
          </div>

          {/* Listings */}
          {topListings.length > 0 ? (
            <>
              <h2 className="text-lg font-bold text-charcoal mb-4">
                {topListings.length} Top GLP-1 Clinics in Dallas
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {topListings.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-soft">
              <p className="text-charcoal font-semibold mb-2">Loading Dallas clinics…</p>
              <Link href="/glp1-clinics/tx/dallas" className="btn-primary mt-4">
                Browse All Dallas GLP-1 Clinics
              </Link>
            </div>
          )}

          {/* See all link */}
          {listings.length > 9 && (
            <div className="mt-6 text-center">
              <Link href="/glp1-clinics/tx/dallas" className="btn-secondary inline-flex items-center gap-2">
                See all Dallas GLP-1 clinics <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}

          {/* Context section */}
          <div className="mt-10 prose-guide">
            <h2>GLP-1 Treatment in Dallas–Fort Worth: What to Know</h2>
            <p>
              The Dallas–Fort Worth metro is one of the largest GLP-1 markets in the country, served by a mix of hospital system weight management programs (Baylor Scott &amp; White, UT Southwestern Medical Center affiliates), independent obesity medicine specialists, and a large number of telehealth and med spa programs that launched during the semaglutide boom.
            </p>
            <p>
              Texas has no comprehensive state oversight specifically targeting compounded semaglutide prescribers, which has made DFW a hub for telehealth providers — some excellent, some problematic. The practical advice: if a Dallas provider offers compounded semaglutide, ask them to name the specific 503B outsourcing facility and confirm it appears on the FDA&apos;s registered outsourcing facilities list. This one question separates legitimate programs from fly-by-night operations.
            </p>
            <p>
              DFW&apos;s suburban sprawl — from Plano to Frisco to Arlington — means many patients legitimately prefer telehealth follow-ups over driving to an in-person clinic monthly. That&apos;s reasonable, provided the initial evaluation includes proper labs and vitals. Avoid any program that issues a semaglutide prescription after a health questionnaire alone, with no physician review.
            </p>

            <h2>Nearby Cities in Texas</h2>
            <div className="not-prose flex flex-wrap gap-2 mb-4">
              {[
                { city: 'Houston', slug: 'houston' },
                { city: 'Austin', slug: 'austin' },
                { city: 'San Antonio', slug: 'san-antonio' },
                { city: 'Fort Worth', slug: 'fort-worth' },
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

            <h2>Frequently Asked Questions — Dallas GLP-1 Clinics</h2>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-3">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                Is compounded semaglutide legal in Texas?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Compounded semaglutide is available in Texas from licensed 503B compounding pharmacies while FDA shortage status is in effect. Texas has no additional state-level restrictions on telehealth prescribing of compounded GLP-1 medications, which is why Dallas has a large number of providers — including some fly-by-night operations. Always verify that your Dallas clinic uses a named, licensed 503B outsourcing facility and that a physician (MD or DO) is supervising your prescription.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-3">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                How much does semaglutide cost in Dallas?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Compounded semaglutide through Dallas telehealth and med spa programs typically runs $199–$349/month. Brand-name Wegovy with insurance coverage can cost as little as $0–$25/month with Novo Nordisk&apos;s savings card for commercially insured patients. Without insurance, brand-name Wegovy is $1,100–$1,350/month. Ask any Dallas clinic to run your insurance benefits before your first appointment.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-8">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                Do I need to visit a clinic in person in Dallas for GLP-1 treatment?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Not necessarily. Many DFW-area GLP-1 programs are fully telehealth — initial consultation, prescription, and follow-ups all done remotely. Some in-person Dallas clinics require an initial visit for labs and vitals, then transition to telehealth follow-ups. For patients in Dallas&apos;s suburban sprawl, telehealth often makes more logistical sense than driving to an in-person clinic for monthly check-ins.
              </div>
            </details>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-amber-50 border border-amber-100 p-6 text-center">
            <h2 className="text-lg font-bold text-charcoal mb-2">Own a GLP-1 clinic in Dallas?</h2>
            <p className="text-sm text-gray-600 mb-4">
              Claim your listing to show up in Dallas searches with your pricing, medication types, and physician credentials.
            </p>
            <Link href="/submit" className="btn-amber">Claim Your Listing — Free</Link>
          </div>
        </div>
      </div>
    </>
  )
}
