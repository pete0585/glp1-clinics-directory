import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'GLP-1 Weight Loss Guides — Semaglutide, Tirzepatide, Insurance & More | FindGLP1Clinic.com',
  description: 'Plain-English guides to GLP-1 weight loss treatment: semaglutide vs tirzepatide, insurance coverage, compounded vs brand-name, cost breakdowns, and how to choose a clinic.',
  alternates: { canonical: '/guides' },
}

const GUIDES = [
  {
    slug: 'semaglutide-vs-tirzepatide',
    title: 'Semaglutide vs. Tirzepatide: Which GLP-1 Is Right for You?',
    description: 'How the two leading GLP-1 drugs compare on weight loss, side effects, cost, and insurance coverage.',
    tag: 'Drug Comparison',
    readTime: '8 min',
  },
  {
    slug: 'does-insurance-cover-ozempic',
    title: 'Does Insurance Cover Ozempic, Wegovy, or Mounjaro? (2026 Guide)',
    description: 'The complete breakdown of GLP-1 insurance coverage across commercial plans, Medicare, and Medicaid.',
    tag: 'Insurance',
    readTime: '9 min',
  },
  {
    slug: 'brand-vs-compounded-semaglutide',
    title: "Brand vs. Compounded Semaglutide: What Clinics Aren't Telling You",
    description: 'Is compounded semaglutide the same as Wegovy? What to know about safety, legality, and cost differences.',
    tag: 'Medications',
    readTime: '7 min',
  },
  {
    slug: 'how-much-does-semaglutide-cost',
    title: 'How Much Does Semaglutide Cost Per Month? (2026 Breakdown)',
    description: 'Real cost ranges for Wegovy, Ozempic, compounded semaglutide, and telehealth programs — with and without insurance.',
    tag: 'Cost',
    readTime: '7 min',
  },
  {
    slug: 'red-flags-choosing-glp1-clinic',
    title: '8 Red Flags When Choosing a GLP-1 Clinic (Avoid These)',
    description: 'Warning signs that a GLP-1 clinic is putting revenue ahead of your medical care — and what to ask instead.',
    tag: 'Choosing a Clinic',
    readTime: '8 min',
  },
]

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-charcoal">GLP-1 Guides</span>
          </nav>

          <h1 className="text-2xl font-bold text-charcoal sm:text-3xl lg:text-4xl">
            GLP-1 Weight Loss Guides
          </h1>
          <p className="mt-3 text-gray-500 max-w-2xl">
            Plain-English guides to GLP-1 treatment — semaglutide, tirzepatide, insurance coverage, cost breakdowns, and how to choose a clinic you can trust.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="card p-6 flex flex-col group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="badge badge-teal text-xs">{guide.tag}</span>
                <span className="text-xs text-gray-400">{guide.readTime} read</span>
              </div>
              <h2 className="text-base font-bold text-charcoal group-hover:text-teal transition-colors leading-snug mb-2">
                {guide.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{guide.description}</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-teal font-medium">
                Read guide <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl bg-teal-50 border border-teal-100 p-6 text-center">
          <h2 className="text-lg font-bold text-charcoal mb-2">Ready to find a GLP-1 clinic?</h2>
          <p className="text-sm text-gray-600 mb-4">
            Browse thousands of semaglutide and tirzepatide providers. Filter by city, insurance, medication type, and physician credentials.
          </p>
          <Link href="/listings" className="btn-primary">Browse GLP-1 Clinics Near You</Link>
        </div>
      </div>
    </div>
  )
}
