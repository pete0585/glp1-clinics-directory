import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Star } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best GLP-1 Weight Loss Clinics in Seattle, WA (2026) | FindGLP1Clinic.com',
  description: 'Top GLP-1 clinics in Seattle for semaglutide and tirzepatide weight loss. Compare physician-supervised programs, UW Medicine and Virginia Mason affiliates, and telehealth options across Western Washington.',
  alternates: { canonical: '/best/glp1-clinics-in-seattle-wa' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Washington state require insurance to cover GLP-1 weight loss medications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Washington state has one of the stronger insurance coverage frameworks for obesity treatment. Washington\'s Insurance Commissioner has pushed for coverage parity for obesity as a chronic disease. Several major Washington health plans (Premera, Regence, Kaiser Permanente Northwest) cover GLP-1 medications for obesity when prescribed with appropriate documentation of BMI, medical necessity, and lifestyle program participation. Check your specific plan\'s formulary — coverage is improving but not universal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does UW Medicine or Virginia Mason have a GLP-1 program in Seattle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. UW Medicine\'s Bariatric Surgery and Weight Management program offers GLP-1 medications as part of comprehensive medical weight management. Virginia Mason Franciscan Health has obesity medicine specialists across its Seattle-area locations. Swedish Medical Center and Providence Health also have weight management programs. For faster access outside academic medicine timelines, independent Seattle GLP-1 clinics are widely available in Capitol Hill, SLU, and Bellevue.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does GLP-1 treatment cost in Seattle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded semaglutide in Seattle typically runs $250–$450/month. Brand-name Wegovy and Zepbound cost $1,000–$1,350/month nationally. Seattle\'s tech employer market is one of the strongest for GLP-1 benefits — Amazon, Microsoft, Boeing, and most Seattle-area tech firms offer employee health plans that include obesity medicine benefits. If you work for a major Seattle employer, check your benefits first — your GLP-1 medication may be largely covered.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there GLP-1 clinics on the Eastside (Bellevue, Kirkland, Redmond)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Eastside has a growing GLP-1 clinic market driven by the Bellevue and Redmond tech corridor. Bellevue\'s medical district and Kirkland have independent weight loss clinics and medical spas offering semaglutide programs. Telehealth providers licensed in Washington serve Eastside patients without requiring a Seattle commute. Given Microsoft, Expedia, and Amazon\'s Eastside offices, employee GLP-1 benefits are widely available in the Eastside market.',
      },
    },
  ],
}

export default async function BestSeattleWaPage() {
  const listings = await getListingsByCity('Seattle', 'WA', 15)
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
              <Link href="/glp1-clinics/washington" className="hover:text-teal transition-colors">Washington</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-charcoal">Best GLP-1 Clinics in Seattle</span>
            </nav>

            <div className="flex items-center gap-2 mb-3">
              <Star className="h-5 w-5 text-amber fill-amber" />
              <span className="badge badge-amber text-xs">Featured List</span>
            </div>

            <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl">
              Best GLP-1 Clinics in Seattle, WA
            </h1>
            <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
              Seattle's tech-heavy workforce and strong health consciousness create one of the country's highest-demand GLP-1 markets. UW Medicine and Virginia Mason Franciscan Health have established obesity medicine programs, while a dense ecosystem of independent clinics and medical spas in Capitol Hill, South Lake Union, and Bellevue offers faster access. Washington state's insurance regulations make some GLP-1 coverage mandatory for qualifying conditions.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
          {topListings.length > 0 ? (
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-charcoal mb-5">GLP-1 Clinics in Seattle, WA</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {topListings.map(listing => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
              <div className="text-center mt-6">
                <Link
                  href="/listings?state=WA"
                  className="inline-flex items-center gap-2 bg-teal text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-600 transition-colors"
                >
                  Browse all Washington GLP-1 clinics <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center mb-10">
              <p className="text-gray-500 mb-4">Browse all Washington GLP-1 clinics while we add more Seattle listings.</p>
              <Link
                href="/listings?state=WA"
                className="inline-flex items-center gap-2 bg-teal text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-600 transition-colors"
              >
                Search Washington Clinics <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          <section className="space-y-4 mb-12">
            <h2 className="text-xl font-bold text-charcoal mb-4">
              GLP-1 in Seattle: Common Questions
            </h2>
            {faqJsonLd.mainEntity.map((faq) => (
              <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-semibold text-charcoal mb-2">{faq.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </section>

          <div className="bg-teal rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Are you a GLP-1 clinic in Seattle?</h2>
            <p className="text-teal-100 text-sm mb-5 max-w-lg mx-auto">
              Get found by patients actively searching for semaglutide and weight loss clinics in Seattle. Free listing included.
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
