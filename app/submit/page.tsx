import type { Metadata } from 'next'
import { ShieldCheck, Star, CheckCircle } from 'lucide-react'
import SubmitForm from '@/components/SubmitForm'

export const metadata: Metadata = {
  title: 'List Your GLP-1 Clinic — Free | FindGLP1Clinic.com',
  description: 'Submit your GLP-1 weight loss clinic to the largest directory in the US. Free basic listing. Upgrade to Verified ($99/yr) or Featured ($199/yr) for priority placement.',
}

const TIERS = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Get found by patients searching in your city',
    features: [
      'Basic clinic profile',
      'Name, location, phone',
      'Medication types listed',
      'Appears in search results',
    ],
    cta: 'Get Listed Free',
    highlight: false,
  },
  {
    name: 'Verified',
    price: '$99',
    period: 'per year',
    description: 'Full profile with contact form and priority placement',
    features: [
      'Everything in Free',
      'Full medication + pricing details',
      'Insurance & physician credentials',
      'Patient contact form',
      '"Verified" badge',
      'Priority placement below Featured',
    ],
    cta: 'Upgrade to Verified',
    highlight: true,
  },
  {
    name: 'Featured',
    price: '$199',
    period: 'per year',
    description: 'Top placement in city search results',
    features: [
      'Everything in Verified',
      'Top 3 placement in city results',
      'Highlighted card with logo',
      'Promo callout (free consult, etc.)',
      'Monthly performance snapshot',
      '"Featured" badge',
    ],
    cta: 'Upgrade to Featured',
    highlight: false,
  },
]

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-offwhite py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-charcoal mb-3">List Your GLP-1 Clinic</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Get in front of patients who are actively searching for GLP-1 treatment near them.
            Free to list. One new patient covers your upgrade cost in the first month.
          </p>
        </div>

        {/* Pricing tiers */}
        <div id="pricing" className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {TIERS.map((tier) => (
            <div key={tier.name}
              className={`card p-6 flex flex-col ${tier.highlight ? 'border-teal ring-2 ring-teal ring-offset-2' : ''}`}>
              <div className="flex items-center gap-2 mb-1">
                {tier.highlight && <ShieldCheck className="h-4 w-4 text-teal" />}
                {tier.name === 'Featured' && <Star className="h-4 w-4 text-amber" />}
                <span className={`text-sm font-bold uppercase tracking-wider ${tier.highlight ? 'text-teal' : 'text-gray-500'}`}>
                  {tier.name}
                </span>
              </div>
              <div className="mb-1">
                <span className="text-3xl font-bold text-charcoal">{tier.price}</span>
                <span className="text-sm text-gray-400 ml-1">{tier.period}</span>
              </div>
              <p className="text-xs text-gray-500 mb-4">{tier.description}</p>
              <ul className="space-y-2 flex-1 mb-5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-teal-300 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Submit form */}
        <div className="card p-8">
          <h2 className="text-xl font-bold text-charcoal mb-6">Submit Your Clinic</h2>
          <SubmitForm />
        </div>
      </div>
    </div>
  )
}
