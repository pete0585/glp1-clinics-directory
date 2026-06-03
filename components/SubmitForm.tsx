'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle } from 'lucide-react'
import { MEDICATIONS, CLINIC_TYPES, PROVIDER_CREDENTIALS } from '@/lib/types'

const schema = z.object({
  clinic_name: z.string().min(2, 'Clinic name is required'),
  address_line1: z.string().optional(),
  city: z.string().min(2, 'City is required'),
  state: z.string().length(2, 'Select a state'),
  zip: z.string().optional(),
  phone: z.string().optional(),
  website: z.string().url('Enter a valid URL').optional().or(z.literal('')),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')),
  clinic_type: z.string().optional(),
  medications_offered: z.array(z.string()).optional(),
  is_compounded: z.boolean().optional(),
  insurance_accepted: z.boolean().optional(),
  physician_supervised: z.boolean().optional(),
  provider_credentials: z.string().optional(),
  monthly_price_min: z.coerce.number().positive().optional().or(z.literal('')),
  monthly_price_max: z.coerce.number().positive().optional().or(z.literal('')),
})

type FormData = z.infer<typeof schema>

const US_STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC']

export default function SubmitForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register, handleSubmit, watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <CheckCircle className="h-16 w-16 text-teal mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-charcoal mb-2">Listing Submitted!</h2>
        <p className="text-gray-500">
          Your clinic will be reviewed and added to the directory within 24 hours.
          You&apos;ll receive an email with your listing link.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Basic info */}
      <div>
        <h3 className="text-base font-bold text-charcoal mb-4 pb-2 border-b border-gray-100">Clinic Information</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="label-text">Clinic Name *</label>
            <input {...register('clinic_name')} className="input-field" placeholder="e.g., Austin Weight Loss Clinic" />
            {errors.clinic_name && <p className="text-xs text-red-500 mt-1">{errors.clinic_name.message}</p>}
          </div>
          <div className="sm:col-span-2">
            <label className="label-text">Street Address</label>
            <input {...register('address_line1')} className="input-field" placeholder="123 Main St, Suite 200" />
          </div>
          <div>
            <label className="label-text">City *</label>
            <input {...register('city')} className="input-field" placeholder="Houston" />
            {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city.message}</p>}
          </div>
          <div>
            <label className="label-text">State *</label>
            <select {...register('state')} className="input-field">
              <option value="">Select State</option>
              {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state.message}</p>}
          </div>
          <div>
            <label className="label-text">ZIP Code</label>
            <input {...register('zip')} className="input-field" placeholder="77001" />
          </div>
          <div>
            <label className="label-text">Phone Number</label>
            <input {...register('phone')} className="input-field" placeholder="(555) 123-4567" />
          </div>
          <div>
            <label className="label-text">Website</label>
            <input {...register('website')} className="input-field" placeholder="https://yourclinic.com" />
            {errors.website && <p className="text-xs text-red-500 mt-1">{errors.website.message}</p>}
          </div>
          <div>
            <label className="label-text">Email</label>
            <input {...register('email')} type="email" className="input-field" placeholder="hello@yourclinic.com" />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>
        </div>
      </div>

      {/* Treatment details */}
      <div>
        <h3 className="text-base font-bold text-charcoal mb-4 pb-2 border-b border-gray-100">Treatment Details</h3>
        <div className="space-y-4">
          <div>
            <label className="label-text">Clinic Type</label>
            <select {...register('clinic_type')} className="input-field">
              <option value="">Select type</option>
              {CLINIC_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
          </div>

          <div>
            <label className="label-text">Medications Offered (select all that apply)</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
              {MEDICATIONS.map((m) => (
                <label key={m.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    value={m.value}
                    {...register('medications_offered')}
                    className="accent-teal-500 h-4 w-4"
                  />
                  <span className="text-sm text-gray-700">{m.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="label-text">Provider Credentials</label>
            <select {...register('provider_credentials')} className="input-field">
              <option value="">Select credentials</option>
              {PROVIDER_CREDENTIALS.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label-text">Min Monthly Price ($)</label>
              <input {...register('monthly_price_min')} type="number" className="input-field" placeholder="200" />
            </div>
            <div>
              <label className="label-text">Max Monthly Price ($)</label>
              <input {...register('monthly_price_max')} type="number" className="input-field" placeholder="400" />
            </div>
          </div>

          <div className="space-y-2.5">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" {...register('physician_supervised')} className="accent-teal-500 h-4 w-4" />
              <span className="text-sm text-gray-700">Physician-supervised (MD/DO)</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" {...register('insurance_accepted')} className="accent-teal-500 h-4 w-4" />
              <span className="text-sm text-gray-700">Insurance accepted</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" {...register('is_compounded')} className="accent-teal-500 h-4 w-4" />
              <span className="text-sm text-gray-700">Compounded GLP-1 available</span>
            </label>
          </div>
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full py-3">
        {isSubmitting ? 'Submitting...' : 'Submit My Clinic — Free'}
      </button>
      <p className="text-xs text-gray-400 text-center">
        Free listing. No credit card required. We&apos;ll review within 24 hours.
      </p>
    </form>
  )
}
