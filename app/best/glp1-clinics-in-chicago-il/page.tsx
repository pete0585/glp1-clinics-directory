import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Star } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best GLP-1 Weight Loss Clinics in Chicago, IL (2026) | FindGLP1Clinic.com',
  description: 'Top GLP-1 clinics in Chicago for semaglutide and tirzepatide weight loss treatment. Compare physician-supervised programs, Rush and Northwestern affiliates, and telehealth options across the Chicagoland area.',
  alternates: { canonical: '/best/glp1-clinics-in-chicago-il' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Northwestern or Rush have a GLP-1 weight loss program in Chicago?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Northwestern Medicine has an established obesity medicine program with GLP-1 prescribing, including semaglutide (Wegovy/Ozempic) and tirzepatide (Zepbound). Rush University Medical Center similarly offers physician-supervised medical weight management with GLP-1 medications. Academic programs require referrals and often have longer wait times. Independent Chicago GLP-1 clinics offer faster access and often more flexible scheduling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Illinois Medicaid cover GLP-1 medications for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medicaid coverage for GLP-1 weight loss medications in Illinois is limited. Illinois Medicaid typically covers GLP-1 medications prescribed for type 2 diabetes (e.g., Ozempic/semaglutide as a diabetes drug), but coverage for weight loss-specific prescriptions (Wegovy/Zepbound) depends on your Medicaid managed care plan. Private insurance in Illinois varies — check your specific plan\'s formulary.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there GLP-1 clinics in Chicago\'s suburbs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Chicago metro has GLP-1 clinics throughout the suburbs — Naperville, Schaumburg, Evanston, Oak Brook, and the North Shore all have medspas, primary care practices, and dedicated weight loss clinics offering semaglutide and tirzepatide programs. If you prefer to avoid the city commute, suburban options are available within 20–30 minutes of most Chicagoland locations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I verify a Chicago GLP-1 clinic is legitimate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Confirm: (1) a licensed MD, DO, or NP supervises your care, (2) compounded semaglutide comes from a named FDA-registered 503B outsourcing facility, (3) the clinic requires blood work and an initial medical evaluation before prescribing. Avoid clinics that prescribe without any labs or evaluation, or that cannot name their compounding pharmacy. Illinois Board of Medicine and IDFPR licensure can be verified online.',
      },
    },
  ],
}

export default async function BestChicagoIlPage() {
  const listings = await getListingsByCity('Chicago', 'IL', 15)
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
              <Link href="/glp1-clinics/illinois" className="hover:text-teal transition-colors">Illinois</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-charcoal">Best GLP-1 Clinics in Chicago</span>
            </nav>

            <div className="flex items-center gap-2 mb-3">
              <Star className="h-5 w-5 text-amber fill-amber" />
              <span className="badge badge-amber text-xs">Featured List</span>
            </div>

            <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl">
              Best GLP-1 Clinics in Chicago, IL
            </h1>
            <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
              Chicago is the Midwest's largest city and one of the most medically advanced markets in the country — home to Northwestern Medicine, Rush University Medical Center, and the University of Chicago. Academic medical weight management programs coexist with a thriving independent GLP-1 clinic market in River North, Lincoln Park, and the Chicago suburbs.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
          {topListings.length > 0 ? (
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-charcoal mb-5">GLP-1 Clinics in Chicago, IL</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {topListings.map(listing => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
              <div className="text-center mt-6">
                <Link
                  href="/listings?state=IL"
                  className="inline-flex items-center gap-2 bg-teal text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-600 transition-colors"
                >
                  Browse all Illinois GLP-1 clinics <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center mb-10">
              <p className="text-gray-500 mb-4">Browse all Illinois GLP-1 clinics while we add more Chicago listings.</p>
              <Link
                href="/listings?state=IL"
                className="inline-flex items-center gap-2 bg-teal text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-600 transition-colors"
              >
                Search Illinois Clinics <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          <section className="space-y-4 mb-12">
            <h2 className="text-xl font-bold text-charcoal mb-4">
              GLP-1 in Chicago: Common Questions
            </h2>
            {faqJsonLd.mainEntity.map((faq) => (
              <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-semibold text-charcoal mb-2">{faq.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </section>

          <div className="bg-teal rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Are you a GLP-1 clinic in Chicago?</h2>
            <p className="text-teal-100 text-sm mb-5 max-w-lg mx-auto">
              Get found by patients actively searching for semaglutide and weight loss clinics in Chicago. Free listing included.
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
