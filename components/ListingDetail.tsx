import Link from 'next/link'
import { MapPin, Phone, Globe, ShieldCheck, Stethoscope, Wifi, DollarSign, CheckCircle, ChevronRight, ExternalLink } from 'lucide-react'
import type { Listing } from '@/lib/types'
import { formatPrice, getMedicationLabels, getClinicTypeLabel, formatListingAddress } from '@/lib/utils'
import ContactForm from './ContactForm'

interface ListingDetailProps {
  listing: Listing
}

export default function ListingDetail({ listing }: ListingDetailProps) {
  const {
    id, clinic_name, address_line1, city, state, zip, phone, website,
    medications_offered, is_compounded, insurance_accepted, insurance_plans,
    physician_supervised, provider_credentials, monthly_price_min, monthly_price_max,
    clinic_type, telehealth_states, accepting_new_patients, listing_tier, claimed,
  } = listing

  const isFeatured = listing_tier === 'featured'
  const isVerified = listing_tier === 'verified' || isFeatured
  const price = formatPrice(monthly_price_min, monthly_price_max)
  const medLabels = getMedicationLabels(medications_offered)
  const fullAddress = formatListingAddress(listing)

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-teal">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/listings" className="hover:text-teal">Browse Clinics</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-charcoal">{clinic_name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header card */}
          <div className={`card p-6 ${isFeatured ? 'border-amber-200' : ''}`}>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                {isFeatured && (
                  <span className="badge-featured mb-2 inline-block">Featured Clinic</span>
                )}
                {!isFeatured && isVerified && (
                  <span className="badge-verified mb-2 inline-flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" />
                    Verified
                  </span>
                )}
                <h1 className="text-2xl font-bold text-charcoal mt-1">{clinic_name}</h1>
              </div>
              {accepting_new_patients && (
                <span className="badge badge-green flex-shrink-0">
                  <CheckCircle className="h-3 w-3" />
                  Accepting Patients
                </span>
              )}
            </div>

            {fullAddress && (
              <div className="flex items-start gap-2 text-sm text-gray-600 mb-3">
                <MapPin className="h-4 w-4 text-teal-300 mt-0.5 flex-shrink-0" />
                <span>{fullAddress}</span>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4 text-sm">
              {phone && (
                <a href={`tel:${phone}`} className="flex items-center gap-1.5 text-teal hover:text-teal-600 font-medium">
                  <Phone className="h-4 w-4" />
                  {phone}
                </a>
              )}
              {website && (
                <a href={website} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-teal hover:text-teal-600 font-medium">
                  <Globe className="h-4 w-4" />
                  Visit Website
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>

          {/* GLP-1 Info */}
          <div className="card p-6">
            <h2 className="text-lg font-bold text-charcoal mb-4">GLP-1 Treatment Details</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {medLabels.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Medications Offered</p>
                  <div className="flex flex-wrap gap-1.5">
                    {medLabels.map((m) => (
                      <span key={m} className="badge badge-teal">{m}</span>
                    ))}
                    {is_compounded && <span className="badge badge-amber">Compounded Available</span>}
                  </div>
                </div>
              )}

              {(monthly_price_min || monthly_price_max) && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Monthly Cost</p>
                  <div className="flex items-center gap-1.5 text-lg font-bold text-teal">
                    <DollarSign className="h-5 w-5" />
                    {price}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Medication only, may vary</p>
                </div>
              )}

              {clinic_type && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Visit Type</p>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-charcoal">
                    <Wifi className="h-4 w-4 text-teal-300" />
                    {getClinicTypeLabel(clinic_type)}
                  </div>
                  {telehealth_states && telehealth_states.length > 0 && (
                    <p className="text-xs text-gray-500 mt-1">
                      Telehealth available in: {telehealth_states.join(', ')}
                    </p>
                  )}
                </div>
              )}

              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Insurance</p>
                <div className={`flex items-center gap-1.5 text-sm font-medium ${insurance_accepted ? 'text-emerald-600' : 'text-gray-500'}`}>
                  {insurance_accepted
                    ? <><CheckCircle className="h-4 w-4" /> Insurance Accepted</>
                    : 'Insurance not accepted'
                  }
                </div>
                {insurance_plans && insurance_plans.length > 0 && (
                  <p className="text-xs text-gray-500 mt-1">{insurance_plans.join(', ')}</p>
                )}
              </div>

              {physician_supervised !== undefined && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Medical Supervision</p>
                  <div className={`flex items-center gap-1.5 text-sm font-medium ${physician_supervised ? 'text-emerald-600' : 'text-gray-500'}`}>
                    <Stethoscope className="h-4 w-4" />
                    {physician_supervised
                      ? `Physician-Supervised${provider_credentials ? ` (${provider_credentials})` : ''}`
                      : 'Non-physician led'
                    }
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Claim banner (unclaimed) */}
          {!claimed && (
            <div className="rounded-2xl bg-teal-50 border border-teal-100 p-5 text-sm">
              <p className="font-semibold text-teal-700 mb-1">Is this your clinic?</p>
              <p className="text-teal-600 mb-3">
                Claim this listing to add your medication types, pricing, and contact form — and upgrade to Verified or Featured for priority placement.
              </p>
              <Link href={`/claim/${id}`} className="btn-primary text-xs px-4 py-2">
                Claim This Listing
              </Link>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Contact form (verified/featured only) */}
          {isVerified ? (
            <ContactForm listingId={id} clinicName={clinic_name} />
          ) : (
            <div className="card p-5 text-center">
              <ShieldCheck className="h-8 w-8 text-teal mx-auto mb-2" />
              <p className="text-sm font-semibold text-charcoal mb-1">Get direct patient inquiries</p>
              <p className="text-xs text-gray-500 mb-3">
                Upgrade to Verified to enable your contact form and receive patient inquiries directly.
              </p>
              {claimed ? (
                <Link href={`/claim/${id}?verified=true`} className="btn-amber text-xs px-4 py-2">
                  Upgrade Now — $99/yr
                </Link>
              ) : (
                <Link href={`/claim/${id}`} className="btn-primary text-xs px-4 py-2">
                  Claim &amp; Upgrade
                </Link>
              )}
            </div>
          )}

          {/* Quick info */}
          <div className="card p-5 space-y-3">
            <h3 className="text-sm font-bold text-charcoal">Quick Info</h3>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Location</span>
                <span className="font-medium text-right">{city}, {state}</span>
              </div>
              {zip && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Zip Code</span>
                  <span className="font-medium">{zip}</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-gray-500">New Patients</span>
                <span className={`font-medium ${accepting_new_patients ? 'text-emerald-600' : 'text-gray-400'}`}>
                  {accepting_new_patients ? 'Yes' : 'No'}
                </span>
              </div>
              {clinic_type && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Visit Type</span>
                  <span className="font-medium">{getClinicTypeLabel(clinic_type)}</span>
                </div>
              )}
              {listing_tier !== 'free' && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Listing</span>
                  <span className={`badge ${isFeatured ? 'badge-featured' : 'badge-verified'}`}>
                    {isFeatured ? 'Featured' : 'Verified'}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="text-center">
            <Link href="/listings" className="text-xs text-teal hover:underline">
              ← Back to all clinics
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
