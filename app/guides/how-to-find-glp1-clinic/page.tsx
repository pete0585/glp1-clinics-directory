import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Find a Legitimate GLP-1 Clinic Near You | FindGLP1Clinic.com',
  description:
    'Not all GLP-1 providers are equal. Here is a step-by-step process for finding a physician-supervised semaglutide or tirzepatide program that is safe, legitimate, and effective.',
  alternates: { canonical: '/guides/how-to-find-glp1-clinic' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes a GLP-1 clinic legitimate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A legitimate GLP-1 clinic: (1) requires a complete medical history and BMI assessment before prescribing; (2) checks for contraindications (thyroid cancer history, pancreatitis, MEN2 syndrome, kidney disease, pregnancy); (3) orders baseline labs before the first prescription; (4) provides ongoing physician oversight with regular follow-up; (5) employs licensed physicians — not just nurse practitioners with no MD supervision; and (6) does not promise unrealistic results or pressure you toward expensive add-ons.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I verify a GLP-1 clinic is medically supervised?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ask directly: 'Who is the supervising physician?' and 'What are their credentials and specialty?' Look up the physician's name on your state medical board website to confirm their license is active and in good standing. For telehealth providers, check that the prescribing physician is licensed in your state. Legitimate programs will provide this information without hesitation. Vague answers like 'a team of healthcare professionals' without naming a physician are a warning sign.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is it a red flag if a clinic pushes compounded semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not necessarily. Compounded semaglutide is significantly cheaper than branded Wegovy ($100–$250/month vs $1,000+), and compounding pharmacies are allowed to produce it while FDA-documented shortages exist. The concern is quality control — compounded semaglutide from an FDA-registered 503B outsourcing facility is held to higher standards than 503A pharmacies. A legitimate clinic should be transparent about which pharmacy compounds their semaglutide and whether it is a 503B facility.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can my regular doctor prescribe GLP-1 medications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Any physician, NP, or PA can prescribe FDA-approved GLP-1 medications (Wegovy for obesity, Ozempic for type 2 diabetes). Your primary care physician is often the best starting point — they know your medical history, can order baseline labs, and can submit insurance prior authorizations. If your PCP is not comfortable prescribing for obesity, ask for a referral to an endocrinologist or obesity medicine specialist.",
      },
    },
    {
      '@type': 'Question',
      name: 'What questions should I ask at my first GLP-1 clinic appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "'What labs do you order before starting?' 'What is the medication you prescribe — branded or compounded — and which pharmacy?' 'What monitoring is required during treatment?' 'What is my total monthly cost all-in?' 'What happens if I experience side effects — who do I contact?' 'Do you help with insurance prior authorization?' 'What is your approach to diet and exercise support?' A clinic that rushes through a new patient visit without addressing these questions deserves a second look.",
      },
    },
  ],
}

export default function HowToFindGlp1ClinicPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-10 sm:px-6">
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1">
            <Link href="/" className="hover:text-charcoal">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/listings" className="hover:text-charcoal">Find a Clinic</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gray-700">How to Find a GLP-1 Clinic</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4 leading-tight">
            How to Find a Legitimate GLP-1 Clinic Near You
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            The GLP-1 market has exploded — and not all providers are equal. Here is a practical
            checklist for finding a physician-supervised semaglutide or tirzepatide program that
            is safe, legitimate, and effective.
          </p>

          <article className="space-y-8 mb-10">
            <section>
              <h2 className="text-xl font-bold text-charcoal mb-4">Step-by-step: how to evaluate a GLP-1 provider</h2>
              <div className="space-y-3">
                {[
                  { step: 'Confirm physician supervision', detail: 'The prescribing provider must be a licensed physician (MD or DO) or a nurse practitioner/PA with documented physician oversight. Ask for the supervising physician\'s name and specialty. Look them up on your state medical board website.' },
                  { step: 'Verify they require a medical history review', detail: 'Any legitimate program requires you to complete a thorough health history form covering thyroid disease, pancreatitis, kidney function, MEN2 history, pregnancy status, and current medications — before issuing a prescription.' },
                  { step: 'Ask about baseline labs', detail: 'A responsible program orders labs before starting: TSH (thyroid check), metabolic panel (kidney and liver function), CBC, lipid panel, and HbA1c if diabetic risk is present. Prescribing without any labs is a red flag.' },
                  { step: 'Understand the medication source', detail: 'Ask: "Is this branded (Wegovy, Ozempic, Zepbound) or compounded semaglutide?" If compounded: "From which pharmacy, and is it an FDA-registered 503B facility?" Compounded is fine — but source transparency matters.' },
                  { step: 'Understand the total monthly cost', detail: 'Get an all-in number: consultation fee + medication + labs + monitoring. Hidden costs in GLP-1 programs are common. Ask specifically: "What is my total monthly cost, including everything?"' },
                  { step: 'Confirm follow-up protocol', detail: 'A responsible program has you back in (or on a video call) at 4–8 week intervals. If follow-up is purely patient-initiated with no scheduled check-ins, you are on your own — which is not adequate for a medication with significant contraindications.' },
                ].map((item, i) => (
                  <div key={item.step} className="bg-white rounded-xl border border-gray-100 shadow-soft p-5 flex gap-4">
                    <span className="font-bold text-teal-600 text-lg shrink-0">{i + 1}</span>
                    <div>
                      <p className="font-semibold text-charcoal">{item.step}</p>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal mb-4">Red flags to avoid</h2>
              <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                <ul className="space-y-2">
                  {[
                    'Prescription issued after a questionnaire alone — no physician review, no labs',
                    'No contraindication screening (no questions about thyroid cancer history, pancreatitis, MEN2)',
                    'Vague about who the prescribing physician is',
                    'Medication ships from outside the US or from an unregistered compounding facility',
                    'No follow-up appointments or monitoring protocol',
                    'Promises rapid results ("lose 30 lbs in 30 days") without medical substance',
                    'Pressures you to add-on expensive supplements or non-covered testing',
                  ].map((item) => (
                    <li key={item} className="text-sm text-red-700 flex items-start gap-2">
                      <span className="font-bold mt-0.5">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-charcoal mb-4">Frequently Asked Questions</h2>
              {faqJsonLd.mainEntity.map((item) => (
                <details key={item.name} className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-3">
                  <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                    {item.name}
                    <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
                  </summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                    {item.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </section>
          </article>

          <div className="rounded-2xl bg-teal-50 border border-teal-100 p-6">
            <h2 className="text-lg font-bold text-charcoal mb-2">Find a Verified GLP-1 Clinic Near You</h2>
            <p className="text-sm text-gray-600 mb-4">Browse physician-supervised semaglutide and tirzepatide programs. Filter by location, insurance, and telehealth options.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/listings" className="btn-primary">Browse Clinics Near You</Link>
              <Link href="/guides" className="btn-secondary flex items-center gap-1">More Guides <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="font-semibold text-charcoal mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides/am-i-a-candidate-for-glp1" className="text-teal-600 hover:underline">Am I a Candidate for GLP-1 Treatment?</Link></li>
              <li><Link href="/guides/red-flags-choosing-glp1-clinic" className="text-teal-600 hover:underline">Red Flags When Choosing a GLP-1 Clinic</Link></li>
              <li><Link href="/guides/glp1-clinic-vs-online-prescription" className="text-teal-600 hover:underline">GLP-1 Clinic vs Online Prescription</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
