import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: '8 Red Flags When Choosing a GLP-1 Clinic (Avoid These) | FindGLP1Clinic.com',
  description: 'What to watch out for when researching GLP-1 weight loss clinics. These 8 warning signs can cost you money, compromise your safety, or leave you without medication when you need it.',
  alternates: { canonical: '/guides/red-flags-choosing-glp1-clinic' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I know if a GLP-1 clinic is legitimate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Legitimate GLP-1 clinics employ licensed physicians (MD or DO) or mid-level providers (NP/PA) practicing under physician supervision, require an initial medical consultation before prescribing, can identify their compounding pharmacy by name and license number, and are transparent about pricing with no hidden fees. If a clinic cannot answer basic questions about their provider credentials or pharmacy source, that is a red flag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to get semaglutide from a telehealth clinic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can be — but quality varies widely. Safe telehealth GLP-1 programs include a real medical consultation (video or phone, not just a form), require baseline labs, have licensed providers who review your history and current medications for interactions, and use compounding pharmacies they can identify by name. Red flags: prescriptions issued without a real consultation, no lab requirements, inability to tell you who your prescribing provider is.',
      },
    },
  ],
}

const RED_FLAGS = [
  {
    number: 1,
    title: "No real consultation before prescribing",
    body: "Legitimate GLP-1 prescriptions require a medical consultation — not just a questionnaire you fill out online. Some telehealth mills advertise semaglutide and issue a prescription after reviewing a web form, with no video or phone call with a licensed provider. This is not safe practice. GLP-1 medications interact with other drugs and are contraindicated in several conditions (personal or family history of medullary thyroid cancer, pancreatitis history, MEN2 syndrome). A provider who doesn't actually talk to you cannot catch these.",
  },
  {
    number: 2,
    title: "They can't name their compounding pharmacy",
    body: "If a clinic is prescribing compounded semaglutide and cannot tell you which 503B outsourcing facility or 503A compounding pharmacy fills your prescription — or refuses to tell you — walk away. You have a right to know where your medication is coming from. A reputable clinic will give you the pharmacy name without hesitation. You can then look up that pharmacy's license status with your state board of pharmacy.",
  },
  {
    number: 3,
    title: "No lab work required before starting",
    body: "Any physician-supervised GLP-1 program should require baseline labs before you start: at minimum a comprehensive metabolic panel, A1C (to rule out undiagnosed diabetes), thyroid function, and lipid panel. These aren't bureaucratic hurdles — they're how your provider catches contraindications and establishes your baseline before treatment. Clinics that skip labs are prioritizing speed over safety.",
  },
  {
    number: 4,
    title: "Pricing that hides the real monthly cost",
    body: "Watch for programs that advertise a low medication price but bury fees in the fine print: mandatory monthly membership fees, required follow-up visit fees, dose increase charges, or pharmacy delivery markups. A transparent clinic tells you the all-in monthly cost — medication, consultation, labs, and follow-ups — before you commit. If they won't give you a clear number, that's intentional.",
  },
  {
    number: 5,
    title: "Guarantees of specific weight loss results",
    body: "No legitimate medical provider guarantees you'll lose a specific amount of weight. Semaglutide produces 5% total body weight loss in some patients and 30%+ in others — individual response varies enormously. Clinics that promise '20 pounds in 60 days' or similar are making claims that are not medically defensible. They may be more interested in selling you a program than in your actual health outcome.",
  },
  {
    number: 6,
    title: "No plan for when the medication runs out or you have side effects",
    body: "What happens if you experience severe nausea and can't tolerate the scheduled dose increase? Who do you call? What if their compounding pharmacy has a supply issue? Reputable programs have a clear answer: a specific provider or nurse you can contact, a protocol for dose adjustments, and backup supply options. Vague answers or 'just email us' responses to these questions indicate a program that's not prepared for routine medical management.",
  },
  {
    number: 7,
    title: "They pressure you toward a higher-priced tier without medical rationale",
    body: "Some clinic models are structured so that the provider recommends the Premium Package with additional injections, supplements, or services in the first consultation, before they even know your medical history well enough to make that recommendation. If a provider jumps to upselling you before they've reviewed your labs and goals, that's a business model, not medical practice.",
  },
  {
    number: 8,
    title: "No follow-up protocol or ongoing monitoring",
    body: "GLP-1 treatment isn't set-it-and-forget-it. Dose titration, managing side effects, monitoring for cardiovascular and thyroid effects, and adjusting treatment based on response are all ongoing. A clinic that issues a prescription and says 'message us if you have questions' is not providing adequate medical oversight. Ask specifically: 'How often will I have follow-up appointments, and who conducts them?'",
  },
]

export default function RedFlagsPage() {
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
              <span className="text-charcoal">Red Flags When Choosing a GLP-1 Clinic</span>
            </nav>

            <span className="badge badge-teal mb-3">GLP-1 Guide</span>
            <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl leading-tight">
              8 Red Flags When Choosing a GLP-1 Clinic (Avoid These)
            </h1>
            <p className="mt-3 text-gray-500">Updated June 2026 · 8-minute read</p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
          <article className="prose-guide">
            <p>
              The GLP-1 clinic market has exploded. Legitimate medical practices sit next to telehealth mills that prioritize subscription revenue over your health. Knowing the difference before you hand over your credit card — and more importantly, before you start a prescription medication — is worth 10 minutes of research.
            </p>
            <p>
              These are the 8 warning signs that deserve a hard pass.
            </p>
          </article>

          <div className="mt-6 space-y-4">
            {RED_FLAGS.map((flag) => (
              <div key={flag.number} className="bg-white rounded-2xl border border-gray-100 shadow-soft p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-charcoal mb-2">
                      #{flag.number}: {flag.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed">{flag.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="prose-guide mt-8">
            <h2 className="text-xl font-bold text-charcoal mb-3">Frequently Asked Questions</h2>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-3">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                How do I know if a GLP-1 clinic is legitimate?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Legitimate GLP-1 clinics employ licensed physicians (MD or DO) or NP/PA providers practicing under physician supervision, require a real medical consultation before prescribing, can name their compounding pharmacy, are transparent about all-in pricing, and have a clear ongoing monitoring protocol. If a clinic cannot answer basic questions about provider credentials or pharmacy source, that is a red flag.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-8">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                Is it safe to get semaglutide from a telehealth clinic?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                It can be — quality varies widely. Safe telehealth GLP-1 programs include a real medical consultation (not just a form), require baseline labs, have licensed providers who review your history and medications, and use identifiable compounding pharmacies. Red flags: prescriptions issued without a real consultation, no lab requirements, inability to tell you who your prescribing provider is.
              </div>
            </details>
          </div>

          <div className="rounded-2xl bg-teal-50 border border-teal-100 p-6 mt-4">
            <h2 className="text-lg font-bold text-charcoal mb-2">Find verified GLP-1 clinics near you</h2>
            <p className="text-sm text-gray-600 mb-4">
              Clinics with Verified badges on FindGLP1Clinic.com have claimed their listing and confirmed their credentials. Browse by city and filter for physician-supervised programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/categories/physician-supervised" className="btn-primary">Physician-Supervised Clinics</Link>
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
