import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Star } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best GLP-1 Weight Loss Clinics in Denver, CO (2026) | FindGLP1Clinic.com',
  description: 'Top GLP-1 clinics in Denver for semaglutide and tirzepatide weight loss. Compare physician-supervised programs, UCHealth and Presbyterian/St. Luke's affiliates, and telehealth options across the Front Range.',
  alternates: { canonical: '/best/glp1-clinics-in-denver-co' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does UCHealth have a GLP-1 weight loss program in Denver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. UCHealth (University of Colorado Health) has a Medical Bariatrics and Weight Management program that includes GLP-1 medications alongside comprehensive lifestyle support. UCHealth\'s program requires a referral and has a structured intake process. Cherry Creek Medical Center and Centura Health also offer medical weight management with GLP-1 prescribing. Independent Denver clinics offer faster access for patients who can\'t wait for academic program appointments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Colorado have any specific rules about GLP-1 or semaglutide prescribing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Colorado follows federal FDA regulations on GLP-1 prescribing and compounding. The state medical board licenses prescribers, and Colorado has specific telehealth prescribing standards that require an appropriate patient-provider relationship before prescribing controlled or significant medications. Colorado has actively licensed compounding pharmacies and participates in NABP monitoring programs. Verify any Denver clinic uses a named FDA-registered 503B outsourcing facility for compounded semaglutide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there GLP-1 clinics in Boulder or Fort Collins near Denver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Front Range corridor — Boulder, Fort Collins, Colorado Springs, Loveland — has a growing GLP-1 clinic market. Boulder\'s health-conscious tech and outdoor industry population has driven several functional medicine and wellness clinics to add GLP-1 programs. Colorado Springs has independent weight loss clinics serving El Paso County. Telehealth programs licensed in Colorado serve patients statewide without requiring a Front Range commute.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does GLP-1 treatment cost in Denver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded semaglutide programs in Denver typically run $200–$400/month. Brand-name Wegovy and Zepbound cost $1,000–$1,350/month nationally. Colorado health insurance coverage for GLP-1 medications varies — Anthem, Cigna, Aetna, and UnitedHealthcare all have different formulary approaches to GLP-1 for weight loss. Check your specific plan before assuming you need to pay out of pocket — Denver\'s large employer market means many plans include obesity medicine benefits.',
      },
    },
  ],
}

export default async function BestDenverCoPage() {
  const listings = await getListingsByCity('Denver', 'CO', 15)
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
              <Link href="/glp1-clinics/colorado" className="hover:text-teal transition-colors">Colorado</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-charcoal">Best GLP-1 Clinics in Denver</span>
            </nav>

            <div className="flex items-center gap-2 mb-3">
              <Star className="h-5 w-5 text-amber fill-amber" />
              <span className="badge badge-amber text-xs">Featured List</span>
            </div>

            <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl">
              Best GLP-1 Clinics in Denver, CO
            </h1>
            <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
              Denver's health-conscious outdoor culture and large professional population create a unique GLP-1 market — one focused on performance optimization and body composition alongside traditional weight loss goals. UCHealth and SCL Health (now Intermountain Health) have obesity medicine programs, and the Cherry Creek, LoDo, and South Denver corridors have multiple independent weight loss clinics and medical spas offering GLP-1 programs.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
          {topListings.length > 0 ? (
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-charcoal mb-5">GLP-1 Clinics in Denver, CO</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {topListings.map(listing => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
              <div className="text-center mt-6">
                <Link
                  href="/listings?state=CO"
                  className="inline-flex items-center gap-2 bg-teal text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-600 transition-colors"
                >
                  Browse all Colorado GLP-1 clinics <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center mb-10">
              <p className="text-gray-500 mb-4">Browse all Colorado GLP-1 clinics while we add more Denver listings.</p>
              <Link
                href="/listings?state=CO"
                className="inline-flex items-center gap-2 bg-teal text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-600 transition-colors"
              >
                Search Colorado Clinics <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          <section className="space-y-4 mb-12">
            <h2 className="text-xl font-bold text-charcoal mb-4">
              GLP-1 in Denver: Common Questions
            </h2>
            {faqJsonLd.mainEntity.map((faq) => (
              <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-semibold text-charcoal mb-2">{faq.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </section>

          <div className="bg-teal rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Are you a GLP-1 clinic in Denver?</h2>
            <p className="text-teal-100 text-sm mb-5 max-w-lg mx-auto">
              Get found by patients actively searching for semaglutide and weight loss clinics in Denver. Free listing included.
            </p>
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 bg-white text-teal px-6 py-3 rounded-xl font-semibold text-sm hover:bg-teal-50 transition-colors"
            >
              List Your Clinic &#x2192;
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
