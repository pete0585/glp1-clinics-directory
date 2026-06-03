import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How Much Does Semaglutide Cost Per Month? (2026 Breakdown) | FindGLP1Clinic.com',
  description: 'Real cost breakdown for semaglutide in 2026: brand-name Wegovy, Ozempic, compounded semaglutide, and telehealth programs. What to expect with and without insurance.',
  alternates: { canonical: '/guides/how-much-does-semaglutide-cost' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does Wegovy cost per month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brand-name Wegovy (semaglutide 2.4mg) costs $1,100–$1,350 per month without insurance. With insurance coverage, out-of-pocket can drop to $0–$25/month for qualifying commercially insured patients using the Novo Nordisk savings card.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does compounded semaglutide cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounded semaglutide typically costs $150–$350 per month through licensed clinics and telehealth providers. The price varies based on dose, pharmacy, and whether the clinic bundles in consultation fees. Some all-inclusive programs run $200–$400/month including medication and unlimited messaging with your care team.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does GLP-1 treatment cost without insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Without insurance, GLP-1 treatment ranges from $150/month (compounded semaglutide through a budget telehealth provider) to $1,350/month (brand-name Wegovy at full retail). Most patients paying out of pocket use compounded semaglutide at $200–$350/month through a clinic or telehealth program.',
      },
    },
  ],
}

export default function CostPage() {
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
              <span className="text-charcoal">GLP-1 Cost Breakdown</span>
            </nav>

            <span className="badge badge-teal mb-3">GLP-1 Guide</span>
            <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl leading-tight">
              How Much Does Semaglutide Cost Per Month? (2026 Breakdown)
            </h1>
            <p className="mt-3 text-gray-500">Updated June 2026 · 7-minute read</p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
          <article className="prose-guide">
            <p>
              Semaglutide cost is the question everyone searches and nobody answers directly. Here&apos;s the actual breakdown — without the marketing spin — so you can figure out what you&apos;ll actually pay before your first consultation.
            </p>

            <h2>Brand-Name Wegovy (Semaglutide 2.4mg)</h2>
            <p>
              <strong>Without insurance: $1,100–$1,350/month.</strong> Novo Nordisk sets the list price. Pharmacy markups vary, but you&apos;re in this range at full retail. This is the FDA-approved obesity dose.
            </p>
            <p>
              <strong>With commercial insurance:</strong> If your plan covers Wegovy, out-of-pocket typically runs $25–$200/month after deductible. Novo Nordisk&apos;s savings card can reduce this to $0–$25/month for commercially insured patients who qualify (income caps apply). Many employer plans now include Wegovy on formulary.
            </p>

            <h2>Brand-Name Ozempic (Semaglutide for Diabetes)</h2>
            <p>
              <strong>Without insurance: $900–$1,000/month.</strong> Ozempic is labeled for type 2 diabetes — it&apos;s the same molecule as Wegovy but in different doses. Some physicians prescribe it off-label for weight loss.
            </p>
            <p>
              <strong>With diabetes diagnosis + commercial insurance:</strong> Often $25–$50/month or less with manufacturer savings card. This is why patients with type 2 diabetes often have much better access to semaglutide than patients seeking it for obesity only.
            </p>

            <h2>Compounded Semaglutide</h2>
            <p>
              <strong>$150–$350/month</strong> is the typical range through clinics and telehealth providers. This usually includes:
            </p>
            <ul>
              <li>The medication itself (semaglutide from a 503B compounding pharmacy)</li>
              <li>Syringes and alcohol swabs</li>
              <li>Physician consultation (initial visit included, follow-ups sometimes billed separately)</li>
              <li>Ongoing messaging or check-ins</li>
            </ul>
            <p>
              Budget telehealth programs: <strong>$150–$225/month.</strong> These often use asynchronous consultation models — you complete a form, a provider reviews it, and you receive medication. Less clinical oversight, lower cost.
            </p>
            <p>
              Full-service in-person programs with compounded semaglutide: <strong>$250–$450/month.</strong> Includes regular in-person visits, labs, and more comprehensive monitoring.
            </p>

            <h2>What&apos;s NOT Included in the Monthly Medication Cost</h2>
            <p>
              Before you budget based on the medication price alone, factor in these common add-ons:
            </p>
            <ul>
              <li><strong>Initial consultation:</strong> $50–$250 one-time fee at many clinics (some waive it)</li>
              <li><strong>Lab work:</strong> Baseline labs (metabolic panel, A1C, thyroid) often required before starting — $50–$200 if not covered by insurance</li>
              <li><strong>Monthly follow-up visits:</strong> $0–$150/visit depending on whether the clinic requires in-person check-ins</li>
              <li><strong>Dose increases:</strong> Some programs charge additional fees when moving from the starting dose (0.25mg) to maintenance doses (1mg, 2.4mg)</li>
            </ul>

            <h2>Hidden Cost: Duration of Treatment</h2>
            <p>
              The most important cost consideration people miss: GLP-1 medications work while you take them. Most research shows substantial weight regain within 12 months of stopping. This is not a 3-month treatment — it&apos;s an ongoing prescription for most patients.
            </p>
            <p>
              At $250/month for compounded semaglutide, that&apos;s <strong>$3,000/year minimum</strong> — and $3,000–$15,000 annually depending on which product you&apos;re using. Plan your budget accordingly.
            </p>

            <h2>Frequently Asked Questions</h2>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-3">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                How much does Wegovy cost per month?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Brand-name Wegovy costs $1,100–$1,350/month without insurance. With commercial insurance coverage and the Novo Nordisk savings card, out-of-pocket can drop to $0–$25/month for qualifying patients.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-3">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                How much does compounded semaglutide cost?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Compounded semaglutide typically costs $150–$350/month through licensed clinics and telehealth providers. The price varies based on dose, pharmacy, and whether consultation fees are bundled in. Some all-inclusive programs run $200–$400/month including medication and care team access.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-8">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                What does GLP-1 treatment cost without insurance?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Without insurance, GLP-1 treatment ranges from $150/month (compounded semaglutide via a budget telehealth provider) to $1,350/month (brand-name Wegovy at full retail). Most patients paying out of pocket use compounded semaglutide at $200–$350/month.
              </div>
            </details>
          </article>

          <div className="rounded-2xl bg-teal-50 border border-teal-100 p-6 mt-4">
            <h2 className="text-lg font-bold text-charcoal mb-2">Compare pricing from clinics near you</h2>
            <p className="text-sm text-gray-600 mb-4">
              Verified clinics on FindGLP1Clinic.com display their pricing ranges so you can compare before booking.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/listings" className="btn-primary">Browse Clinics</Link>
              <Link href="/guides" className="btn-secondary flex items-center gap-1">
                More Guides <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
