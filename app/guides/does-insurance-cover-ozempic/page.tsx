import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Does Insurance Cover Ozempic, Wegovy, or Mounjaro? (2026 Guide) | FindGLP1Clinic.com',
  description: 'The complete guide to GLP-1 insurance coverage in 2026. Which plans cover Wegovy, Ozempic, Mounjaro, and Zepbound for weight loss — and how to get coverage if yours doesn\'t.',
  alternates: { canonical: '/guides/does-insurance-cover-ozempic' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Medicare cover Ozempic for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medicare Part D covers Ozempic only when prescribed for type 2 diabetes. The Inflation Reduction Act does not yet require Medicare to cover anti-obesity medications for weight loss alone, though legislation has been introduced to change this.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Medicaid cover Wegovy or Ozempic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medicaid coverage for GLP-1 weight loss medications varies by state. Some state Medicaid programs cover Wegovy for obesity treatment; others do not. Ozempic for type 2 diabetes is more broadly covered. Check with your state Medicaid plan or a clinic that accepts Medicaid.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get my insurance to cover Wegovy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most commercial insurers require a prior authorization for Wegovy. Your physician will need to document your BMI (≥30, or ≥27 with a comorbidity like hypertension or sleep apnea), failed attempts at lifestyle modification, and the medical necessity of pharmacotherapy. Work with a clinic that handles prior authorizations — some will do this on your behalf.',
      },
    },
  ],
}

export default function InsuranceCoveragePage() {
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
              <span className="text-charcoal">Insurance Coverage for GLP-1</span>
            </nav>

            <span className="badge badge-teal mb-3">GLP-1 Guide</span>
            <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl leading-tight">
              Does Insurance Cover Ozempic, Wegovy, or Mounjaro? (2026 Guide)
            </h1>
            <p className="mt-3 text-gray-500">
              Updated June 2026 · 9-minute read
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
          <article className="prose-guide">
            <p>
              GLP-1 medications are transformative — and expensive. Brand-name Wegovy costs over $1,100/month without coverage. Mounjaro runs $1,000+. For most people, whether insurance covers their GLP-1 drug isn't a minor question. It determines whether treatment is financially possible at all.
            </p>
            <p>
              Here's the honest breakdown of how coverage works in 2026 — across commercial insurance, Medicare, and Medicaid — and what you can actually do if your plan says no.
            </p>

            <h2>Commercial Insurance (Employer-Sponsored Plans)</h2>
            <p>
              This is where you're most likely to get coverage, but it's not guaranteed.
            </p>
            <p>
              Many large employers now include <strong>Wegovy (semaglutide)</strong> and <strong>Zepbound (tirzepatide)</strong> on their drug formularies for obesity treatment. Requirements typically include:
            </p>
            <ul>
              <li>BMI ≥30, or BMI ≥27 with at least one weight-related comorbidity (hypertension, sleep apnea, type 2 diabetes, high cholesterol)</li>
              <li>Prior authorization from your physician documenting medical necessity</li>
              <li>Documentation that lifestyle modifications (diet, exercise) have been attempted</li>
            </ul>
            <p>
              <strong>Ozempic</strong> and <strong>Mounjaro</strong> — the diabetes-labeled versions of the same drugs — have broader commercial formulary coverage but are officially approved for type 2 diabetes, not obesity. Some plans cover them off-label for weight loss; most don't, and off-label coverage is increasingly scrutinized.
            </p>

            <h2>Medicare</h2>
            <p>
              This is the current gap that affects millions of older Americans. <strong>Medicare Part D covers Ozempic for type 2 diabetes</strong> but does not yet cover anti-obesity medications like Wegovy for weight loss alone. The Treat and Reduce Obesity Act has been introduced in Congress repeatedly — if it passes, it would require Medicare to cover GLP-1 drugs for obesity. As of 2026, it has not passed.
            </p>
            <p>
              If you're on Medicare and want GLP-1 treatment for weight loss, your options are compounded semaglutide (cash-pay), patient assistance programs from Novo Nordisk or Eli Lilly, or a manufacturer coupon if you have any supplemental coverage.
            </p>

            <h2>Medicaid</h2>
            <p>
              Coverage varies dramatically by state. Some state Medicaid programs — including California Medi-Cal, Illinois Medicaid, and several others — now cover Wegovy for obesity treatment. Many do not. Ozempic for type 2 diabetes is more broadly covered across state Medicaid plans.
            </p>
            <p>
              Your best path: call your state Medicaid plan's pharmacy benefits line and ask specifically about "semaglutide for obesity" or "tirzepatide for obesity." Have your BMI and diagnosis code handy.
            </p>

            <h2>How to Get Prior Authorization Approved</h2>
            <p>
              Most commercial plans require prior authorization (PA) for GLP-1 weight loss drugs. The clinic you work with typically handles this process, but you should know what it involves:
            </p>
            <ul>
              <li><strong>Step 1:</strong> Your physician documents your BMI, diagnosis (obesity, E66.01), and any comorbidities</li>
              <li><strong>Step 2:</strong> PA submitted to your insurer with a letter of medical necessity</li>
              <li><strong>Step 3:</strong> Insurer may require "step therapy" — proving you've tried a cheaper weight loss drug first (usually phentermine or orlistat)</li>
              <li><strong>Step 4:</strong> Approval or denial. Denials can be appealed — approximately 40-60% of denied GLP-1 PAs are approved on appeal</li>
            </ul>
            <p>
              When choosing a clinic, ask specifically: "Do you handle prior authorizations in-house, and do you have experience getting GLP-1 PAs approved with [your insurer]?" This is one of the most valuable things a physician-supervised program offers that telehealth-only services often can't.
            </p>

            <h2>What If Your Insurance Won't Cover It?</h2>
            <p>
              You have real options beyond just paying full price:
            </p>
            <ul>
              <li><strong>Manufacturer savings programs:</strong> Novo Nordisk's Wegovy WeightLoss.com savings card and Eli Lilly's savings card can bring monthly cost to $25–$0 for commercially insured patients who qualify</li>
              <li><strong>Compounded semaglutide:</strong> $150–$350/month through licensed 503B compounding pharmacies — the same active ingredient, significantly lower cost. Availability depends on FDA shortage status</li>
              <li><strong>Patient assistance programs:</strong> Both Novo Nordisk and Eli Lilly have programs for uninsured or underinsured patients who meet income requirements</li>
              <li><strong>Appeal your denial:</strong> Ask your physician to write a strong letter of medical necessity citing relevant comorbidities. First-level appeals succeed more often than people expect</li>
            </ul>

            <h2>Frequently Asked Questions</h2>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-3">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                Does Medicare cover Ozempic for weight loss?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Medicare Part D covers Ozempic only when prescribed for type 2 diabetes. The Inflation Reduction Act does not yet require Medicare to cover anti-obesity medications for weight loss alone, though legislation has been introduced to change this.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-3">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                Does Medicaid cover Wegovy or Ozempic?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Medicaid coverage varies by state. Some state Medicaid programs cover Wegovy for obesity treatment; others do not. Ozempic for type 2 diabetes is more broadly covered. Check with your state Medicaid plan or a clinic that accepts Medicaid.
              </div>
            </details>

            <details className="bg-white rounded-xl border border-gray-100 shadow-soft group mb-8">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                How do I get my insurance to cover Wegovy?
                <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                Most commercial insurers require a prior authorization for Wegovy. Your physician will need to document your BMI (≥30, or ≥27 with a comorbidity), failed attempts at lifestyle modification, and the medical necessity of pharmacotherapy. Work with a clinic that handles prior authorizations — some will do this on your behalf.
              </div>
            </details>
          </article>

          <div className="rounded-2xl bg-teal-50 border border-teal-100 p-6 mt-4">
            <h2 className="text-lg font-bold text-charcoal mb-2">Find a clinic that handles insurance for you</h2>
            <p className="text-sm text-gray-600 mb-4">
              Filter by "Insurance Accepted" to find GLP-1 clinics that verify your benefits and handle prior authorizations in-house.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/categories/insurance-accepted" className="btn-primary">Clinics That Accept Insurance</Link>
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
