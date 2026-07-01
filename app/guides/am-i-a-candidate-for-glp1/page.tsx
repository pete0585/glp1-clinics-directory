import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Am I a Candidate for GLP-1 Weight Loss Treatment? | FindGLP1Clinic.com',
  description: 'Find out if you qualify for semaglutide or tirzepatide treatment. FDA-approved BMI criteria, who should not take GLP-1 medications, and what the initial evaluation looks like.',
  alternates: { canonical: '/guides/am-i-a-candidate-for-glp1' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What BMI qualifies me for GLP-1 weight loss medications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The FDA-approved criteria for GLP-1 weight loss medications (Wegovy, Zepbound) are: BMI of 30 or higher, or BMI of 27 or higher with at least one weight-related health condition such as type 2 diabetes, high blood pressure, high cholesterol, or obstructive sleep apnea. A BMI of 25–26.9 with comorbidities does not meet the FDA threshold, though some physicians may prescribe off-label in select cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who should not take GLP-1 medications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GLP-1 medications are contraindicated for people with a personal or family history of medullary thyroid carcinoma (MTC), Multiple Endocrine Neoplasia syndrome type 2 (MEN2), a history of pancreatitis, or who are pregnant or planning to become pregnant. People with a history of severe gastrointestinal motility disorders, gastroparesis, or certain kidney conditions may also be poor candidates. A thorough medical history review is essential before starting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get GLP-1 medications if I just want to lose 20 pounds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Possibly, but you need to meet the BMI and comorbidity criteria above. If your BMI is below 27, you do not meet FDA-approved criteria for anti-obesity GLP-1 medications. Some telehealth providers prescribe off-label in gray-area BMI ranges, but this is not FDA-approved use and carries more regulatory uncertainty. Be cautious of any program that doesn\'t screen your BMI and medical history before prescribing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens at my first GLP-1 evaluation appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A proper initial evaluation includes: measurement of your current weight and height (BMI calculation), blood pressure and vitals, a medical history review covering thyroid disease, pancreatitis, kidney disease, gastrointestinal conditions, and family cancer history, a review of your current medications (several drugs interact with GLP-1 agents), a baseline lab panel (typically TSH, comprehensive metabolic panel, lipid panel, HbA1c), and a discussion of your weight history, previous weight loss attempts, and goals. Telehealth-only programs that skip labs or vitals are providing incomplete care.',
      },
    },
  ],
}

export default function AmIACandidateForGlp1Page() {
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
              <span className="text-charcoal">Am I a Candidate for GLP-1?</span>
            </nav>

            <span className="badge badge-teal mb-3">GLP-1 Guide</span>
            <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl leading-tight">
              Am I a Candidate for GLP-1 Weight Loss Treatment?
            </h1>
            <p className="mt-3 text-gray-500">
              Updated July 2026 · 7-minute read
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
          <article className="prose-guide">
            <p>
              GLP-1 receptor agonists — semaglutide (Ozempic, Wegovy) and tirzepatide (Mounjaro, Zepbound) — are among the most effective weight loss treatments ever developed. But they&apos;re not appropriate for everyone, and not everyone who wants them will qualify under FDA-approved criteria. Here&apos;s exactly what you need to know before booking an evaluation.
            </p>

            <h2>What Are GLP-1 Medications?</h2>
            <p>
              GLP-1 stands for glucagon-like peptide-1 — a hormone naturally produced in your gut after eating. GLP-1 receptor agonists mimic this hormone, producing several effects: they signal fullness to your brain (reducing appetite), slow stomach emptying (making you feel full longer), and improve insulin sensitivity (helping blood sugar regulation).
            </p>
            <p>
              The result is significant reduction in caloric intake without conscious restriction — most patients simply aren&apos;t as hungry. In clinical trials, semaglutide (Wegovy) produced 14–16% average body weight reduction over 68 weeks. Tirzepatide (Zepbound) produced 20–22% reduction over 72 weeks. These are historically large effects for a pharmaceutical weight loss intervention.
            </p>
            <p>
              The medications come in two forms for two indications: lower-dose versions for type 2 diabetes management (Ozempic for semaglutide, Mounjaro for tirzepatide), and higher-dose versions specifically approved for chronic weight management in patients with obesity (Wegovy, Zepbound).
            </p>

            <h2>FDA-Approved Criteria: Who Qualifies?</h2>
            <p>
              The FDA has approved Wegovy (semaglutide 2.4mg weekly) and Zepbound (tirzepatide up to 15mg weekly) for chronic weight management in adults who meet one of these criteria:
            </p>
            <ul>
              <li><strong>BMI of 30 or higher</strong> — classified as obesity</li>
              <li><strong>BMI of 27 or higher with at least one weight-related comorbidity</strong> — qualifying conditions include type 2 diabetes, hypertension (high blood pressure), dyslipidemia (high cholesterol or triglycerides), or obstructive sleep apnea</li>
            </ul>
            <p>
              A BMI of 25–26.9 — the overweight range — does not meet FDA-approved criteria on its own, even with a comorbidity. Some physicians prescribe GLP-1 medications off-label in these gray-area situations, but this is not FDA-approved use and should be discussed explicitly with your prescriber.
            </p>
            <p>
              For patients with type 2 diabetes, Ozempic (semaglutide 0.5–2mg weekly) and Mounjaro (tirzepatide 5–15mg) are FDA-approved for blood sugar management as a primary indication — weight loss is a secondary benefit. The diabetes approvals have broader insurance coverage than the obesity approvals.
            </p>

            <h2>Who Should Not Take GLP-1 Medications?</h2>
            <p>
              GLP-1 medications are contraindicated for certain patients. A thorough screening by a physician before prescribing is essential. You should <strong>not</strong> start GLP-1 treatment if you have:
            </p>
            <ul>
              <li><strong>Personal or family history of medullary thyroid carcinoma (MTC)</strong> — GLP-1 medications carry an FDA black box warning for this. The risk is based on animal studies; the absolute risk in humans is considered low, but the contraindication stands.</li>
              <li><strong>Multiple Endocrine Neoplasia syndrome type 2 (MEN2)</strong> — a hereditary condition that increases thyroid and other endocrine cancer risk.</li>
              <li><strong>History of pancreatitis</strong> — GLP-1 medications have been associated with pancreatitis risk. Active pancreatitis or a history of chronic pancreatitis is a contraindication.</li>
              <li><strong>Pregnancy or planning pregnancy</strong> — GLP-1 medications should be discontinued at least 2 months before attempting conception and are not safe during pregnancy.</li>
              <li><strong>Severe gastroparesis</strong> — GLP-1 medications slow gastric emptying; patients with pre-existing gastroparesis can experience significant worsening.</li>
              <li><strong>Severe kidney disease</strong> — some patients with stage 4–5 chronic kidney disease may require closer monitoring or dose adjustment.</li>
            </ul>

            <h2>What the Initial Evaluation Looks Like</h2>
            <p>
              A proper initial evaluation at a GLP-1 clinic should include all of the following. If a provider skips any of these, consider it a red flag:
            </p>
            <ul>
              <li><strong>Weight and height measurement</strong> — BMI calculation to confirm you meet criteria</li>
              <li><strong>Blood pressure and vitals</strong> — essential baseline, and some conditions affect medication choice</li>
              <li><strong>Medical history review</strong> — covering thyroid disease, cancer history, pancreatitis, kidney disease, gastrointestinal conditions, and family history of thyroid or endocrine cancer</li>
              <li><strong>Current medication review</strong> — several drugs interact with GLP-1 agents, including other diabetes medications (hypoglycemia risk), oral contraceptives (absorption timing), and some supplements</li>
              <li><strong>Baseline lab panel</strong> — typically includes TSH (thyroid), comprehensive metabolic panel (kidney and liver function), lipid panel, and HbA1c (blood sugar). These establish your baseline and screen for contraindications.</li>
              <li><strong>Goals discussion</strong> — a physician-supervised program should understand your weight history, previous attempts, motivations, and realistic expectations</li>
            </ul>
            <p>
              Telehealth-only programs that issue a prescription after a health questionnaire alone — with no physician review, no labs, and no vitals — are not providing an adequate standard of care. The convenience is real; the risk is that contraindications go undetected.
            </p>

            <h2>What to Bring to Your First Appointment</h2>
            <p>
              Coming prepared makes your initial evaluation more efficient and productive:
            </p>
            <ul>
              <li>A complete list of all current medications, supplements, and vitamins with dosages</li>
              <li>Your most recent lab results if available (bloodwork from the past 6–12 months)</li>
              <li>Your weight history — approximate highest and lowest adult weights, and any previous weight loss attempts and outcomes</li>
              <li>Insurance cards and information — let the clinic run your benefits before the appointment ends</li>
              <li>A list of questions (see our FAQ below for a starting point)</li>
              <li>Family medical history notes for thyroid disease, endocrine conditions, or pancreatitis if known</li>
            </ul>

            <h2>Frequently Asked Questions</h2>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-3">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                What BMI qualifies me for GLP-1 weight loss medications?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                The FDA-approved criteria: BMI of 30 or higher, or BMI of 27 or higher with at least one weight-related health condition such as type 2 diabetes, high blood pressure, high cholesterol, or obstructive sleep apnea. A BMI of 25–26.9 with comorbidities does not meet the FDA threshold, though some physicians may prescribe off-label in select cases.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-3">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                Who should not take GLP-1 medications?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                GLP-1 medications are contraindicated for people with a personal or family history of medullary thyroid carcinoma (MTC), Multiple Endocrine Neoplasia syndrome type 2 (MEN2), a history of pancreatitis, or who are pregnant or planning to become pregnant. People with severe gastroparesis or certain kidney conditions may also be poor candidates.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-3">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                Can I get GLP-1 medications if I just want to lose 20 pounds?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Possibly, but you need to meet the BMI and comorbidity criteria above. If your BMI is below 27, you do not meet FDA-approved criteria. Some telehealth providers prescribe off-label in gray-area BMI ranges, but this is not FDA-approved use. Be cautious of any program that doesn&apos;t screen your BMI and medical history before prescribing.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-8">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                What happens at my first GLP-1 evaluation appointment?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                A proper initial evaluation includes: weight/height measurement, blood pressure and vitals, a medical history review covering thyroid disease, pancreatitis, kidney disease, and family cancer history, a medication review, a baseline lab panel (TSH, metabolic panel, lipid panel, HbA1c), and a discussion of your weight history and goals. Telehealth-only programs that skip labs or vitals are providing incomplete care.
              </div>
            </details>
          </article>

          {/* CTA */}
          <div className="rounded-2xl bg-teal-50 border border-teal-100 p-6 mt-4">
            <h2 className="text-lg font-bold text-charcoal mb-2">Ready to find a GLP-1 clinic near you?</h2>
            <p className="text-sm text-gray-600 mb-4">
              Browse physician-supervised semaglutide and tirzepatide programs. Filter by location, medication type, insurance acceptance, and telehealth availability.
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
