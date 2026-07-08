import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Star } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best GLP-1 Weight Loss Clinics in New York, NY (2026) | FindGLP1Clinic.com',
  description: 'Top GLP-1 clinics in New York City for semaglutide and tirzepatide weight loss. Compare physician-supervised programs, NYU and Weill Cornell affiliates, and telehealth options across the five boroughs.',
  alternates: { canonical: '/best/glp1-clinics-in-new-york-ny' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does NYU Langone or Mount Sinai have a GLP-1 program in New York?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NYU Langone has a comprehensive Obesity Medicine Program that includes semaglutide and tirzepatide prescribing alongside behavioral support and nutritional counseling. Mount Sinai\'s Endocrinology and Obesity Medicine programs similarly offer GLP-1 treatment. NewYork-Presbyterian and Weill Cornell Medical Center also have physician-supervised medical weight management. Academic programs typically require a referral and have wait times of weeks to months.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does GLP-1 treatment cost in New York City?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NYC GLP-1 treatment varies widely. The brand-name medications — Wegovy (~$1,350/month) and Zepbound (~$1,060/month) — are the same price nationally; your insurance or employer benefits are the primary variable. Compounded semaglutide from NYC clinics typically runs $200–$500/month depending on dose and clinic fees. Manhattan concierge GLP-1 programs may charge premium membership fees on top of medication costs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there GLP-1 clinics in Brooklyn, Queens, or the Bronx?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, though Manhattan has the highest clinic density. Brooklyn (Williamsburg, Park Slope, Downtown Brooklyn) has a growing independent weight loss clinic market. Queens clinics serve the Flushing, Astoria, and Jamaica corridors. The Bronx has fewer independent clinics but Montefiore Medical Center\'s Obesity Medicine program serves the borough. For patients across all five boroughs, telehealth GLP-1 programs eliminate geography as a barrier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does New York state regulate GLP-1 prescribing or compounding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New York\'s Department of Health and Office of the Professions regulate physician and prescriber licensing. The state follows FDA regulations on compounded medications, including the 503B outsourcing facility requirement for large-scale compounding. New York City has specific regulations for medical practices operating within city limits. When using any telehealth or in-person GLP-1 program, verify the prescribing physician is licensed in New York State.',
      },
    },
  ],
}

export default async function BestNewYorkNyPage() {
  const listings = await getListingsByCity('New York', 'NY', 15)
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
              <Link href="/glp1-clinics/new-york" className="hover:text-teal transition-colors">New York</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-charcoal">Best GLP-1 Clinics in New York</span>
            </nav>

            <div className="flex items-center gap-2 mb-3">
              <Star className="h-5 w-5 text-amber fill-amber" />
              <span className="badge badge-amber text-xs">Featured List</span>
            </div>

            <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl">
              Best GLP-1 Clinics in New York, NY
            </h1>
            <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
              New York City is one of the world's most competitive GLP-1 and medical weight loss markets. Major academic programs at NYU Langone, Weill Cornell Medicine, Mount Sinai, and NewYork-Presbyterian all have obesity medicine departments with GLP-1 prescribing. Alongside these, Manhattan has hundreds of independent weight loss practices, med spas, and telehealth programs competing for patients.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
          {topListings.length > 0 ? (
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-charcoal mb-5">GLP-1 Clinics in New York, NY</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {topListings.map(listing => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
              <div className="text-center mt-6">
                <Link
                  href="/listings?state=NY"
                  className="inline-flex items-center gap-2 bg-teal text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-600 transition-colors"
                >
                  Browse all New York GLP-1 clinics <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center mb-10">
              <p className="text-gray-500 mb-4">Browse all New York GLP-1 clinics while we add more New York listings.</p>
              <Link
                href="/listings?state=NY"
                className="inline-flex items-center gap-2 bg-teal text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-600 transition-colors"
              >
                Search New York Clinics <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          <section className="space-y-4 mb-12">
            <h2 className="text-xl font-bold text-charcoal mb-4">
              GLP-1 in New York: Common Questions
            </h2>
            {faqJsonLd.mainEntity.map((faq) => (
              <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-semibold text-charcoal mb-2">{faq.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </section>

          <div className="bg-teal rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Are you a GLP-1 clinic in New York?</h2>
            <p className="text-teal-100 text-sm mb-5 max-w-lg mx-auto">
              Get found by patients actively searching for semaglutide and weight loss clinics in New York. Free listing included.
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
