import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Semaglutide vs. Tirzepatide: Which GLP-1 Is Right for You? | FindGLP1Clinic.com',
  description: 'Comparing semaglutide (Ozempic, Wegovy) and tirzepatide (Mounjaro, Zepbound) for weight loss. Side effects, cost, insurance coverage, and which drug produces more weight loss.',
  alternates: { canonical: '/guides/semaglutide-vs-tirzepatide' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does tirzepatide cause more weight loss than semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clinical trials show tirzepatide produces slightly more average weight loss — around 20–22% of body weight vs. 14–16% for semaglutide. Individual results vary significantly depending on dose, adherence, and diet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is tirzepatide or semaglutide easier to get covered by insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Semaglutide (Wegovy) has been available longer and has broader insurance formulary coverage for obesity. Tirzepatide (Zepbound) was approved for obesity in 2023 and is gaining coverage but remains harder to get approved. Ozempic (semaglutide for diabetes) has the broadest insurance coverage of any GLP-1 drug.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which GLP-1 drug has fewer side effects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Semaglutide and tirzepatide have similar GI side effect profiles — nausea, constipation, and occasional vomiting, especially early in treatment. Some patients tolerate one better than the other. There is no clear winner; it depends on the individual.',
      },
    },
  ],
}

export default function SemaglutideVsTirzepatidePage() {
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
              <span className="text-charcoal">Semaglutide vs. Tirzepatide</span>
            </nav>

            <span className="badge badge-teal mb-3">GLP-1 Guide</span>
            <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl leading-tight">
              Semaglutide vs. Tirzepatide: Which GLP-1 Is Right for You?
            </h1>
            <p className="mt-3 text-gray-500">
              Updated June 2026 · 8-minute read
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
          <article className="prose-guide">
            <p>
              Two drugs dominate the GLP-1 weight loss conversation right now: <strong>semaglutide</strong> (sold as Ozempic for diabetes and Wegovy for obesity) and <strong>tirzepatide</strong> (Mounjaro for diabetes, Zepbound for obesity). Both work. Both produce meaningful weight loss. But they are not identical — and the difference matters when you're comparing clinics and trying to figure out which one your insurance will actually cover.
            </p>

            <h2>How They Work</h2>
            <p>
              Semaglutide is a <strong>GLP-1 receptor agonist</strong>. It mimics a gut hormone that signals fullness to your brain, slows stomach emptying, and reduces appetite. It's a once-weekly injectable.
            </p>
            <p>
              Tirzepatide is a <strong>dual GIP/GLP-1 receptor agonist</strong> — it hits both the GLP-1 receptor and the glucose-dependent insulinotropic polypeptide (GIP) receptor. The second target appears to amplify the weight loss effect, which is why clinical trials show slightly higher average weight loss with tirzepatide.
            </p>

            <h2>Weight Loss: What the Trials Show</h2>
            <p>
              In clinical trials at the highest doses:
            </p>
            <ul>
              <li><strong>Semaglutide (Wegovy 2.4mg):</strong> Average 14–16% body weight reduction over 68 weeks (STEP 1 trial)</li>
              <li><strong>Tirzepatide (Zepbound 15mg):</strong> Average 20–22% body weight reduction over 72 weeks (SURMOUNT-1 trial)</li>
            </ul>
            <p>
              A 6–8% difference sounds modest in a trial setting, but at 250 lbs that's 15–20 additional pounds lost. Individual results vary substantially — some patients lose 30%+ on semaglutide while others lose less than 10% on tirzepatide.
            </p>

            <h2>Side Effects</h2>
            <p>
              Both drugs share the same primary side effect profile: nausea, constipation, diarrhea, and occasionally vomiting — especially in the first several weeks as your dose increases. For most people these fade after the first 1–2 months.
            </p>
            <p>
              The side effects aren't meaningfully different between the two drugs. Some patients who had significant nausea on semaglutide tolerate tirzepatide better, and vice versa. There's no reliable way to predict this in advance.
            </p>

            <h2>Cost and Insurance</h2>
            <p>
              This is where the real difference shows up day-to-day:
            </p>
            <ul>
              <li><strong>Brand-name Wegovy:</strong> $1,100–$1,350/month without insurance. Many major commercial insurers now cover it for obesity. Manufacturer savings cards can bring cost to $0–$25/month for commercially insured patients.</li>
              <li><strong>Brand-name Zepbound:</strong> $1,000–$1,100/month without insurance. Coverage is growing but narrower than Wegovy. Eli Lilly savings card available for commercially insured patients.</li>
              <li><strong>Compounded semaglutide:</strong> $150–$350/month. Widely available from licensed 503B compounding pharmacies through telehealth and clinic programs. FDA-approved shortage status determines availability.</li>
              <li><strong>Compounded tirzepatide:</strong> $200–$450/month. Available through similar channels, though Eli Lilly has been more aggressive about restricting compounding.</li>
            </ul>

            <h2>Which One Should You Try First?</h2>
            <p>
              The answer is usually: whichever your insurance covers, or whichever your clinic's physician recommends based on your medical history. There's no universally "better" drug — only the one that works best for you individually.
            </p>
            <p>
              If you have <strong>type 2 diabetes</strong>, semaglutide (Ozempic) has the longest track record and broadest insurance formulary coverage for the diabetes indication. If you're treating <strong>obesity without diabetes</strong>, the coverage picture is more complex — ask a clinic to run your benefits before your first appointment.
            </p>
            <p>
              If cost is the primary concern, compounded semaglutide through a telehealth provider is typically the most accessible entry point.
            </p>

            <h2>Frequently Asked Questions</h2>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-3">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                Does tirzepatide cause more weight loss than semaglutide?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Clinical trials show tirzepatide produces slightly more average weight loss — around 20–22% of body weight vs. 14–16% for semaglutide. Individual results vary significantly depending on dose, adherence, and diet.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-3">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                Is tirzepatide or semaglutide easier to get covered by insurance?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Semaglutide (Wegovy) has been available longer and has broader insurance formulary coverage for obesity. Tirzepatide (Zepbound) was approved for obesity in 2023 and is gaining coverage but remains harder to get approved. Ozempic (semaglutide for diabetes) has the broadest insurance coverage of any GLP-1 drug.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-8">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                Which GLP-1 drug has fewer side effects?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Semaglutide and tirzepatide have similar GI side effect profiles — nausea, constipation, and occasional vomiting, especially early in treatment. Some patients tolerate one better than the other. There is no clear winner; it depends on the individual.
              </div>
            </details>
          </article>

          {/* CTA */}
          <div className="rounded-2xl bg-teal-50 border border-teal-100 p-6 mt-4">
            <h2 className="text-lg font-bold text-charcoal mb-2">Ready to find a GLP-1 clinic near you?</h2>
            <p className="text-sm text-gray-600 mb-4">
              Browse thousands of semaglutide and tirzepatide providers. Filter by medication type, insurance, and telehealth availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/listings" className="btn-primary">Browse Clinics Near You</Link>
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
