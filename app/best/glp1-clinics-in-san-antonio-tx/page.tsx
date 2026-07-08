import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Star } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best GLP-1 Weight Loss Clinics in San Antonio, TX (2026) | FindGLP1Clinic.com',
  description: 'Top GLP-1 clinics in San Antonio for semaglutide and tirzepatide weight loss. Compare physician-supervised programs, UT Health and Methodist affiliates, and military-friendly options across Bexar County.',
  alternates: { canonical: '/best/glp1-clinics-in-san-antonio-tx' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can San Antonio veterans get GLP-1 medications through the VA or military?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — to an extent. VA prescribers can prescribe GLP-1 medications for veterans with type 2 diabetes (Ozempic/metformin class) or sometimes obesity when combined with intensive lifestyle programs. Access to Wegovy specifically through VA formulary varies by region. TRICARE (military insurance) covers some GLP-1 medications for active duty and retired military depending on medical necessity. Brooke Army Medical Center\'s endocrinology and bariatric programs are the primary military-affiliated resources in San Antonio.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does semaglutide cost in San Antonio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'San Antonio has a more competitive price point than major coastal cities for GLP-1 treatment. Compounded semaglutide programs in San Antonio typically run $150–$350/month — lower than comparable Dallas or Houston programs. Brand-name Wegovy and Zepbound are available at the same national pricing ($1,000–$1,350/month before insurance). Texas does not have a state insurance mandate for obesity treatment, so insurance coverage depends on your employer\'s plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does UT Health San Antonio have a weight loss program with GLP-1 medications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UT Health San Antonio (UT Medicine) has bariatric medicine services and some GLP-1 prescribing through its primary care and endocrinology programs. The Bariatric Institute of Texas, affiliated with Methodist Healthcare, is a major surgical bariatric center that also offers medical weight management. For dedicated GLP-1-only programs with faster access, independent clinics in the metro are typically quicker to appointment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What neighborhoods in San Antonio have GLP-1 clinics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GLP-1 clinics are distributed throughout Bexar County — the Medical Center corridor (near UTSA and Methodist) has the highest concentration. Stone Oak, the North Side, and the New Braunfels corridor also have independent weight loss and medspa practices offering semaglutide and tirzepatide. Telehealth providers serve all San Antonio zip codes without requiring in-person travel.',
      },
    },
  ],
}

export default async function BestSanAntonioTxPage() {
  const listings = await getListingsByCity('San Antonio', 'TX', 15)
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
              <Link href="/glp1-clinics/texas" className="hover:text-teal transition-colors">Texas</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-charcoal">Best GLP-1 Clinics in San Antonio</span>
            </nav>

            <div className="flex items-center gap-2 mb-3">
              <Star className="h-5 w-5 text-amber fill-amber" />
              <span className="badge badge-amber text-xs">Featured List</span>
            </div>

            <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl">
              Best GLP-1 Clinics in San Antonio, TX
            </h1>
            <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
              San Antonio has one of the highest obesity rates of any major US city, creating strong demand for effective medical weight management. The city's large military and veteran population (JBSA, Brooke Army Medical Center) gives weight management through VA and military channels, while a growing private GLP-1 clinic market serves civilians across Bexar County. San Antonio is also one of the most affordable major markets for GLP-1 treatment outside the VA system.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
          {topListings.length > 0 ? (
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-charcoal mb-5">GLP-1 Clinics in San Antonio, TX</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {topListings.map(listing => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
              <div className="text-center mt-6">
                <Link
                  href="/listings?state=TX"
                  className="inline-flex items-center gap-2 bg-teal text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-600 transition-colors"
                >
                  Browse all Texas GLP-1 clinics <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center mb-10">
              <p className="text-gray-500 mb-4">Browse all Texas GLP-1 clinics while we add more San Antonio listings.</p>
              <Link
                href="/listings?state=TX"
                className="inline-flex items-center gap-2 bg-teal text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-600 transition-colors"
              >
                Search Texas Clinics <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          <section className="space-y-4 mb-12">
            <h2 className="text-xl font-bold text-charcoal mb-4">
              GLP-1 in San Antonio: Common Questions
            </h2>
            {faqJsonLd.mainEntity.map((faq) => (
              <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-semibold text-charcoal mb-2">{faq.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </section>

          <div className="bg-teal rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Are you a GLP-1 clinic in San Antonio?</h2>
            <p className="text-teal-100 text-sm mb-5 max-w-lg mx-auto">
              Get found by patients actively searching for semaglutide and weight loss clinics in San Antonio. Free listing included.
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
