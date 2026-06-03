import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Brand vs. Compounded Semaglutide: What Clinics Aren\'t Telling You | FindGLP1Clinic.com',
  description: 'Is compounded semaglutide the same as Wegovy or Ozempic? What to know about compounded GLP-1 medications before you commit to a clinic — safety, cost, legality, and what to ask.',
  alternates: { canonical: '/guides/brand-vs-compounded-semaglutide' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is compounded semaglutide the same as Wegovy or Ozempic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded semaglutide contains the same active ingredient (semaglutide) but is not the identical product as Wegovy or Ozempic. It is mixed by a licensed compounding pharmacy — typically a 503B outsourcing facility — rather than manufactured by Novo Nordisk. The FDA has not reviewed or approved the specific formulation, though the active ingredient itself is an approved drug.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is compounded semaglutide legal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded semaglutide is legal when prepared by a licensed 503A or 503B compounding facility while semaglutide is on the FDA drug shortage list. If the FDA removes semaglutide from the shortage list, commercial compounding of semaglutide becomes illegal (503A pharmacies must stop; 503B outsourcing facilities may have additional time). The status has fluctuated — always confirm with your clinic that their pharmacy source is current.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much cheaper is compounded semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Significantly cheaper. Brand-name Wegovy runs $1,100–$1,350/month without insurance. Compounded semaglutide typically costs $150–$350/month through a clinic or telehealth provider. The savings can be $800–$1,000+ per month.',
      },
    },
  ],
}

export default function BrandVsCompoundedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-offwhite">
        <div className="bg-white border-b border-gray-100">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
            <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-teal transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/guides" className="hover:text-teal transition-colors">Guides</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-charcoal">Brand vs. Compounded Semaglutide</span>
            </nav>

            <span className="badge badge-teal mb-3">GLP-1 Guide</span>
            <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl leading-tight">
              Brand vs. Compounded Semaglutide: What Clinics Aren&apos;t Telling You
            </h1>
            <p className="mt-3 text-gray-500">Updated June 2026 · 7-minute read</p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
          <article className="prose-guide">
            <p>
              When you call a GLP-1 clinic and ask about semaglutide, you need to ask a follow-up question they may not volunteer: <strong>Is it brand-name or compounded?</strong> The answer changes the cost, the regulatory status, and potentially the experience.
            </p>

            <h2>What Is Compounded Semaglutide?</h2>
            <p>
              Compounded semaglutide is a formulation of semaglutide — the same active molecule — prepared by a licensed compounding pharmacy rather than manufactured by Novo Nordisk (the maker of Wegovy and Ozempic). These pharmacies mix the drug to prescription specifications, typically at a fraction of the brand-name price.
            </p>
            <p>
              Compounding becomes legal for a specific drug when the FDA places it on the drug shortage list. Semaglutide has been on shortage lists since 2022 due to massive demand. <strong>The legal status is tied to FDA shortage designation</strong> — which can change. If removed from the shortage list, commercial compounding becomes prohibited.
            </p>

            <h2>The Real Differences</h2>

            <h3>Cost</h3>
            <p>
              Brand-name Wegovy: <strong>$1,100–$1,350/month</strong> without insurance.<br />
              Compounded semaglutide: <strong>$150–$350/month</strong> through most clinics and telehealth providers.
            </p>
            <p>The cost gap is the primary reason most patients in the US are now on compounded semaglutide rather than brand-name Wegovy.</p>

            <h3>Regulatory Status</h3>
            <p>
              Brand-name Wegovy and Ozempic went through full FDA clinical trials. The exact formulation — dose, excipients, delivery device — is FDA-approved.
            </p>
            <p>
              Compounded semaglutide uses an FDA-approved active ingredient mixed by a licensed pharmacy. The specific compounded formulation is not FDA-approved — the pharmacy is operating under 503A or 503B compounding regulations. This is legal while shortage designation holds, but it's a different regulatory category.
            </p>

            <h3>What Clinics Don&apos;t Always Tell You</h3>
            <p>
              Some compounded formulations include additives — B12, NAD+, or other compounds — that are not in the brand-name product. Some patients prefer this; others don&apos;t want unknown additives. Ask your clinic what exactly is in their compounded formulation and whether it comes from a 503B outsourcing facility (higher regulatory oversight) or a 503A pharmacy (lower oversight, custom individual prescriptions).
            </p>
            <p>
              Also: compounded semaglutide requires a prescription and physician oversight, same as the brand. If you're sourcing it from a telehealth provider that offers asynchronous consultation (you fill out a form, they rubber-stamp a prescription), you're getting a lower standard of medical supervision than a clinic where a physician reviews your history, bloodwork, and medications for interactions.
            </p>

            <h2>Which Should You Choose?</h2>
            <p>
              If your insurance covers brand-name Wegovy or Zepbound with minimal out-of-pocket cost, take it. The brand is the gold standard — FDA-reviewed, consistent formulation, auto-injector device that many patients find easier to use.
            </p>
            <p>
              If insurance doesn&apos;t cover it and cost is the barrier to starting treatment, compounded semaglutide is a legitimate medical option — as long as you&apos;re getting it through a clinic with real physician oversight, from a 503B outsourcing facility, and you understand the regulatory status may change.
            </p>
            <p>
              Either way: don&apos;t buy compounded semaglutide from a clinic that can&apos;t tell you which pharmacy compounds it, what the exact formulation contains, or whether the pharmacist is licensed in your state.
            </p>

            <h2>Frequently Asked Questions</h2>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-3">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                Is compounded semaglutide the same as Wegovy or Ozempic?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Compounded semaglutide contains the same active ingredient but is not the identical product as Wegovy or Ozempic. It is prepared by a licensed compounding pharmacy rather than manufactured by Novo Nordisk. The FDA has not reviewed the specific compounded formulation.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-3">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                Is compounded semaglutide legal?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Compounded semaglutide is legal when prepared by a licensed 503A or 503B facility while semaglutide is on the FDA drug shortage list. If the FDA removes it from the shortage list, commercial compounding becomes prohibited. The status has fluctuated — confirm with your clinic that their pharmacy source is current.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-8">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                How much cheaper is compounded semaglutide?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Significantly cheaper. Brand-name Wegovy runs $1,100–$1,350/month without insurance. Compounded semaglutide typically costs $150–$350/month through a clinic or telehealth provider — savings of $800–$1,000+ per month.
              </div>
            </details>
          </article>

          <div className="rounded-2xl bg-teal-50 border border-teal-100 p-6 mt-4">
            <h2 className="text-lg font-bold text-charcoal mb-2">Find clinics offering compounded or brand-name GLP-1</h2>
            <p className="text-sm text-gray-600 mb-4">
              Browse the directory and filter by medication type. Compare pricing, insurance, and physician credentials.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/categories/compounded-glp1" className="btn-primary">Compounded GLP-1 Clinics</Link>
              <Link href="/listings" className="btn-secondary flex items-center gap-1">
                Browse All Clinics <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
