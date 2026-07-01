import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Star } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best GLP-1 Weight Loss Clinics in Nashville, TN (2026) | FindGLP1Clinic.com',
  description: 'Top GLP-1 clinics in Nashville for semaglutide and tirzepatide weight loss treatment. Compare physician-supervised programs, pricing, Vanderbilt affiliates, and telehealth options.',
  alternates: { canonical: '/best/glp1-clinics-in-nashville-tn' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Vanderbilt University Medical Center offer GLP-1 weight loss programs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Vanderbilt has an established Comprehensive Weight Loss Program that includes medical weight management with GLP-1 medications alongside behavioral therapy, nutrition counseling, and surgical options. Vanderbilt programs are physician-supervised and rigorous, but typically require a referral and have wait times of several weeks to months. Independent Nashville GLP-1 clinics offer faster access for patients who want to start sooner.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is semaglutide available quickly in Nashville for event-based weight loss goals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nashville\'s medical tourism and event industry has created a market of clinics that cater to patients with near-term goals — bachelorette parties, weddings, and events are common motivators. Many Nashville telehealth and med spa programs can start you on semaglutide within 48–72 hours of an initial consultation. That said, GLP-1 medications work over months, not days — expect 4–8 weeks before meaningful weight loss, and focus on physicians who set realistic expectations rather than promising rapid results.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Tennessee have any oversight of compounded semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tennessee currently has no comprehensive state-level oversight specifically targeting telehealth prescribing of compounded semaglutide. This means Nashville has a wide range of providers — from well-supervised clinic programs to minimally supervised telehealth operations. The standard verification applies: confirm your prescriber is an MD or DO licensed in Tennessee, and that compounded medication comes from a named 503B outsourcing facility.',
      },
    },
  ],
}

export default async function BestNashvilleTnPage() {
  const listings = await getListingsByCity('Nashville', 'TN', 15)
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
              <Link href="/glp1-clinics/tn" className="hover:text-teal transition-colors">Tennessee</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-charcoal">Best GLP-1 Clinics in Nashville</span>
            </nav>

            <div className="flex items-center gap-2 mb-3">
              <Star className="h-5 w-5 text-amber fill-amber" />
              <span className="badge badge-amber text-xs">Featured List</span>
            </div>

            <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl">
              Best GLP-1 Clinics in Nashville, TN
            </h1>
            <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
              Nashville is one of the country&apos;s most active healthcare markets — home to HCA Healthcare&apos;s headquarters, Vanderbilt University Medical Center, and a deep bench of independent clinics that serve the city&apos;s large healthcare workforce, bachelorette and medical tourism visitors, and rapidly growing residential population. Here are the top-rated GLP-1 clinics in our Nashville directory.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
          {/* What to look for callout */}
          <div className="mb-8 rounded-2xl bg-teal-50 border border-teal-100 p-5">
            <h2 className="text-sm font-bold text-charcoal mb-2">What makes a Nashville GLP-1 clinic worth booking?</h2>
            <ul className="text-sm text-gray-600 space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Physician-supervised program with a structured dosing protocol — not just a telehealth questionnaire</li>
              <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Realistic weight loss timelines — clinics that promise "fast results" for events are red flags</li>
              <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Named 503B pharmacy for compounded semaglutide — Nashville&apos;s medical tourism market attracts some low-quality operators</li>
              <li className="flex items-start gap-2"><span className="text-teal mt-0.5">→</span> Insurance verification offered — Tennessee commercial plans vary widely on GLP-1 coverage</li>
            </ul>
          </div>

          {/* Listings */}
          {topListings.length > 0 ? (
            <>
              <h2 className="text-lg font-bold text-charcoal mb-4">
                {topListings.length} Top GLP-1 Clinics in Nashville
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {topListings.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-soft">
              <p className="text-charcoal font-semibold mb-2">Loading Nashville clinics…</p>
              <Link href="/glp1-clinics/tn/nashville" className="btn-primary mt-4">
                Browse All Nashville GLP-1 Clinics
              </Link>
            </div>
          )}

          {/* See all link */}
          {listings.length > 9 && (
            <div className="mt-6 text-center">
              <Link href="/glp1-clinics/tn/nashville" className="btn-secondary inline-flex items-center gap-2">
                See all Nashville GLP-1 clinics <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}

          {/* Context section */}
          <div className="mt-10 prose-guide">
            <h2>GLP-1 Treatment in Nashville: What to Know</h2>
            <p>
              Nashville&apos;s status as a healthcare industry hub (HCA Healthcare is headquartered here) means the city has an unusually sophisticated patient population — many Nashville residents work in healthcare and approach GLP-1 treatment with more clinical literacy than the average patient. That creates demand for rigorous, evidence-based programs rather than the quick-start telehealth operations that dominate other markets.
            </p>
            <p>
              At the same time, Nashville is one of the top bachelorette party destinations in the US, which has created a market segment of event-motivated patients looking for fast results before a wedding or trip. The legitimate GLP-1 clinics in Nashville serve both populations, but they&apos;re honest with event-motivated patients: GLP-1 medications require 4–8 weeks before meaningful weight loss begins, and the full effect takes 3–6 months. If a Nashville clinic promises significant results in under a month, treat that as a red flag.
            </p>
            <p>
              Vanderbilt University Medical Center&apos;s Comprehensive Weight Loss Program is Nashville&apos;s most established academic option, offering full medical supervision, behavioral support, and surgical options alongside GLP-1 therapy. Expect wait times and a referral requirement. For faster access, Nashville has several independent obesity medicine practices and telehealth programs with good clinical oversight.
            </p>

            <h2>Nearby Cities in Tennessee</h2>
            <div className="not-prose flex flex-wrap gap-2 mb-4">
              {[
                { city: 'Memphis', slug: 'memphis' },
                { city: 'Knoxville', slug: 'knoxville' },
                { city: 'Chattanooga', slug: 'chattanooga' },
                { city: 'Murfreesboro', slug: 'murfreesboro' },
              ].map((c) => (
                <Link
                  key={c.slug}
                  href={`/glp1-clinics/tn/${c.slug}`}
                  className="badge badge-teal text-xs py-1.5 px-3 hover:bg-teal-100 transition-colors"
                >
                  GLP-1 clinics in {c.city}
                </Link>
              ))}
            </div>

            <h2>Frequently Asked Questions — Nashville GLP-1 Clinics</h2>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-3">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                Does Vanderbilt University Medical Center offer GLP-1 weight loss programs?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Yes. Vanderbilt has an established Comprehensive Weight Loss Program that includes medical weight management with GLP-1 medications alongside behavioral therapy, nutrition counseling, and surgical options. Programs are rigorous but typically require a referral and have wait times of several weeks to months. Independent Nashville GLP-1 clinics offer faster access for patients who want to start sooner.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-3">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                Is semaglutide available quickly in Nashville for event-based weight loss goals?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Nashville&apos;s event industry has created a market of clinics that cater to near-term goals. Many programs can start you within 48–72 hours of an initial consultation. However, GLP-1 medications work over months, not days — expect 4–8 weeks before meaningful weight loss, and focus on physicians who set realistic expectations.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-8">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                Does Tennessee have any oversight of compounded semaglutide?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Tennessee currently has no comprehensive state-level oversight specifically targeting telehealth prescribing of compounded semaglutide. The standard verification applies: confirm your prescriber is an MD or DO licensed in Tennessee, and that compounded medication comes from a named 503B outsourcing facility.
              </div>
            </details>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-amber-50 border border-amber-100 p-6 text-center">
            <h2 className="text-lg font-bold text-charcoal mb-2">Own a GLP-1 clinic in Nashville?</h2>
            <p className="text-sm text-gray-600 mb-4">
              Claim your listing to show up in Nashville searches with your pricing, medication types, and physician credentials.
            </p>
            <Link href="/submit" className="btn-amber">Claim Your Listing — Free</Link>
          </div>
        </div>
      </div>
    </>
  )
}
