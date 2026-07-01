import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Star } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best GLP-1 Weight Loss Clinics in Phoenix, AZ (2026) | FindGLP1Clinic.com',
  description: 'Top GLP-1 clinics in Phoenix and Scottsdale for semaglutide and tirzepatide. Compare physician-supervised programs, pricing, dehydration risk guidance, and telehealth options.',
  alternates: { canonical: '/best/glp1-clinics-in-phoenix-az' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does the Phoenix heat affect semaglutide treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Semaglutide and tirzepatide suppress appetite and can reduce your desire to drink fluids — which is already a risk in Phoenix\'s extreme heat. GLP-1 patients in Phoenix should be especially vigilant about hydration, particularly during summer months when temperatures regularly exceed 110°F. Ask your prescribing physician about electrolyte supplementation and minimum daily fluid targets. Dehydration can worsen GLP-1 side effects including nausea.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there GLP-1 clinics in Scottsdale as well as Phoenix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Scottsdale has a dense cluster of premium weight loss and men\'s health clinics that offer GLP-1 programs, often bundled with testosterone therapy, peptides, or aesthetic treatments. Scottsdale programs tend to run $300–$600/month and target an affluent, health-focused demographic. For patients who want clinical GLP-1 treatment without the add-ons, Phoenix proper has more straightforward obesity medicine programs. Both appear in our Arizona directory.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Banner Health in Phoenix offer GLP-1 weight loss programs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Banner Health operates medical weight management programs through several Phoenix-area locations, and some Banner-affiliated physicians do prescribe GLP-1 medications. However, Banner programs typically require a referral, have longer wait times for initial appointments, and bill through insurance with the usual prior authorization hurdles. Independent Phoenix GLP-1 clinics typically offer faster access and more streamlined programs for patients without a Banner referral.',
      },
    },
  ],
}

export default async function BestPhoenixAzPage() {
  const listings = await getListingsByCity('Phoenix', 'AZ', 15)
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
              <Link href="/glp1-clinics/az" className="hover:text-teal transition-colors">Arizona</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-charcoal">Best GLP-1 Clinics in Phoenix</span>
            </nav>

            <div className="flex items-center gap-2 mb-3">
              <Star className="h-5 w-5 text-amber fill-amber" />
              <span className="badge badge-amber text-xs">Featured List</span>
            </div>

            <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl">
              Best GLP-1 Clinics in Phoenix, AZ
            </h1>
            <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
              Phoenix and Scottsdale together form one of the fastest-growing GLP-1 markets in the Southwest. Between Banner Health&apos;s medical weight management programs, Scottsdale&apos;s premium men&apos;s health clinics, and a growing number of independent obesity medicine specialists, patients have real options — but quality varies widely. Here are the top-rated clinics in our Arizona directory.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Dehydration callout */}
          <div className="mb-8 rounded-2xl bg-amber-50 border border-amber-100 p-5">
            <h2 className="text-sm font-bold text-charcoal mb-2">Phoenix-specific: GLP-1 and desert heat</h2>
            <p className="text-sm text-gray-600">
              GLP-1 medications reduce appetite — including the desire to drink fluids. In Phoenix summers (110°F+), this creates a real dehydration risk. Ask any Phoenix clinic about their hydration protocol for desert-climate patients before starting treatment.
            </p>
          </div>

          {/* What to look for callout */}
          <div className="mb-8 rounded-2xl bg-teal-50 border border-teal-100 p-5">
            <h2 className="text-sm font-bold text-charcoal mb-2">What makes a Phoenix GLP-1 clinic worth booking?</h2>
            <ul className="text-sm text-gray-600 space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Physician-supervised programs (MD or DO) with structured monitoring — not just a telehealth questionnaire</li>
              <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Clear sourcing for compounded semaglutide from a named 503B outsourcing facility</li>
              <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Desert-climate awareness — hydration guidance included in the protocol, not an afterthought</li>
              <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Transparent pricing — Scottsdale bundled programs can obscure total cost with add-on fees</li>
            </ul>
          </div>

          {/* Listings */}
          {topListings.length > 0 ? (
            <>
              <h2 className="text-lg font-bold text-charcoal mb-4">
                {topListings.length} Top GLP-1 Clinics in Phoenix
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {topListings.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-soft">
              <p className="text-charcoal font-semibold mb-2">Loading Phoenix clinics…</p>
              <Link href="/glp1-clinics/az/phoenix" className="btn-primary mt-4">
                Browse All Phoenix GLP-1 Clinics
              </Link>
            </div>
          )}

          {/* See all link */}
          {listings.length > 9 && (
            <div className="mt-6 text-center">
              <Link href="/glp1-clinics/az/phoenix" className="btn-secondary inline-flex items-center gap-2">
                See all Phoenix GLP-1 clinics <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}

          {/* Context section */}
          <div className="mt-10 prose-guide">
            <h2>GLP-1 Treatment in Phoenix: What to Know</h2>
            <p>
              Phoenix has two distinct GLP-1 markets. The first is mainstream physician-supervised obesity medicine — Banner Health affiliates, independent endocrinologists and internal medicine physicians, and general practice clinics that have added structured weight management programs. These programs run $100–$300/month and tend to be more clinically rigorous.
            </p>
            <p>
              The second is Scottsdale&apos;s premium men&apos;s health and aesthetic clinic ecosystem. These practices bundle semaglutide or tirzepatide with testosterone replacement therapy, peptides, and IV drips in programs that can run $400–$800/month. For the right patient — typically an older male with low testosterone alongside obesity — these bundled programs make sense. For a patient who just wants medically supervised weight loss, they often represent paying for services you don&apos;t need.
            </p>
            <p>
              Arizona has no comprehensive state restrictions on telehealth compounded semaglutide prescribing, and the Phoenix market reflects that — there are legitimate programs and lower-quality operations. The Arizona Medical Board has taken action against several telehealth operators. Always verify your prescriber&apos;s license is in good standing with the Arizona Medical Board before starting treatment.
            </p>

            <h2>Nearby Cities in Arizona</h2>
            <div className="not-prose flex flex-wrap gap-2 mb-4">
              {[
                { city: 'Scottsdale', slug: 'scottsdale' },
                { city: 'Tempe', slug: 'tempe' },
                { city: 'Mesa', slug: 'mesa' },
                { city: 'Tucson', slug: 'tucson' },
              ].map((c) => (
                <Link
                  key={c.slug}
                  href={`/glp1-clinics/az/${c.slug}`}
                  className="badge badge-teal text-xs py-1.5 px-3 hover:bg-teal-100 transition-colors"
                >
                  GLP-1 clinics in {c.city}
                </Link>
              ))}
            </div>

            <h2>Frequently Asked Questions — Phoenix GLP-1 Clinics</h2>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-3">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                Does the Phoenix heat affect semaglutide treatment?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Yes. Semaglutide and tirzepatide suppress appetite and can reduce your desire to drink fluids — which is already a risk in Phoenix&apos;s extreme heat. GLP-1 patients in Phoenix should be especially vigilant about hydration, particularly during summer months when temperatures regularly exceed 110°F. Ask your prescribing physician about electrolyte supplementation and minimum daily fluid targets.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-3">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                Are there GLP-1 clinics in Scottsdale as well as Phoenix?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Yes. Scottsdale has a dense cluster of premium weight loss and men&apos;s health clinics that offer GLP-1 programs, often bundled with testosterone therapy, peptides, or aesthetic treatments. Scottsdale programs tend to run $300–$600/month and target an affluent, health-focused demographic. For patients who want clinical GLP-1 treatment without the add-ons, Phoenix proper has more straightforward obesity medicine programs.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-8">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                Does Banner Health in Phoenix offer GLP-1 weight loss programs?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Banner Health operates medical weight management programs through several Phoenix-area locations, and some Banner-affiliated physicians do prescribe GLP-1 medications. However, Banner programs typically require a referral, have longer wait times, and bill through insurance with the usual prior authorization hurdles. Independent Phoenix GLP-1 clinics typically offer faster access and more streamlined programs.
              </div>
            </details>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-amber-50 border border-amber-100 p-6 text-center">
            <h2 className="text-lg font-bold text-charcoal mb-2">Own a GLP-1 clinic in Phoenix or Scottsdale?</h2>
            <p className="text-sm text-gray-600 mb-4">
              Claim your listing to show up in Phoenix searches with your pricing, medication types, and physician credentials.
            </p>
            <Link href="/submit" className="btn-amber">Claim Your Listing — Free</Link>
          </div>
        </div>
      </div>
    </>
  )
}
