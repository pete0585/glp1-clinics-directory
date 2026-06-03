import Link from 'next/link'
import { MapPin, Phone, Globe, ShieldCheck, Stethoscope, Wifi, DollarSign, Star } from 'lucide-react'
import type { Listing } from '@/lib/types'
import { formatPrice, getMedicationLabels, getClinicTypeLabel } from '@/lib/utils'

interface ListingCardProps {
  listing: Listing
  featured?: boolean
}

export default function ListingCard({ listing, featured }: ListingCardProps) {
  const {
    clinic_name, slug, city, state, phone, website,
    medications_offered, is_compounded, insurance_accepted,
    physician_supervised, provider_credentials,
    monthly_price_min, monthly_price_max,
    clinic_type, listing_tier, claimed,
  } = listing

  const isFeatured = listing_tier === 'featured' || featured
  const isVerified = listing_tier === 'verified' || isFeatured
  const price = formatPrice(monthly_price_min, monthly_price_max)
  const medLabels = getMedicationLabels(medications_offered)

  return (
    <Link href={`/listings/${slug}`} className="block">
      <div className={`card p-5 group h-full flex flex-col ${isFeatured ? 'border-amber-200 bg-amber-50/30 shadow-card' : ''}`}>
        {/* Tier badge */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            {isFeatured && (
              <span className="badge-featured flex items-center gap-1">
                <Star className="h-3 w-3 fill-white" />
                Featured
              </span>
            )}
            {!isFeatured && isVerified && (
              <span className="badge-verified">
                <ShieldCheck className="h-3 w-3" />
                Verified
              </span>
            )}
          </div>
          {claimed && !isVerified && (
            <span className="badge badge-teal text-xs">Claimed</span>
          )}
        </div>

        {/* Clinic name */}
        <h3 className="text-base font-bold text-charcoal group-hover:text-teal transition-colors leading-tight mb-1">
          {clinic_name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-3">
          <MapPin className="h-3.5 w-3.5 text-teal-300 flex-shrink-0" />
          <span>{city}, {state}</span>
        </div>

        {/* Medication badges */}
        {medLabels.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {medLabels.slice(0, 3).map((med) => (
              <span key={med} className="badge badge-teal">{med}</span>
            ))}
            {medLabels.length > 3 && (
              <span className="badge badge-gray">+{medLabels.length - 3} more</span>
            )}
          </div>
        )}

        {/* Badges row */}
        <div className="flex flex-wrap gap-2 mb-3">
          {physician_supervised && (
            <span className="badge badge-green flex items-center gap-1">
              <Stethoscope className="h-3 w-3" />
              {provider_credentials ? `${provider_credentials}-Supervised` : 'Physician-Supervised'}
            </span>
          )}
          {insurance_accepted && (
            <span className="badge badge-teal flex items-center gap-1">
              <ShieldCheck className="h-3 w-3" />
              Insurance
            </span>
          )}
          {clinic_type === 'telehealth' || clinic_type === 'hybrid' ? (
            <span className="badge badge-gray flex items-center gap-1">
              <Wifi className="h-3 w-3" />
              {getClinicTypeLabel(clinic_type)}
            </span>
          ) : null}
          {is_compounded && (
            <span className="badge badge-amber">Compounded Available</span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-xs text-gray-500">
            {price && (
              <span className="flex items-center gap-1 font-semibold text-teal">
                <DollarSign className="h-3.5 w-3.5" />
                {price}
              </span>
            )}
            {phone && (
              <span className="flex items-center gap-1">
                <Phone className="h-3.5 w-3.5" />
                {phone}
              </span>
            )}
          </div>
          {website && (
            <span className="flex items-center gap-1 text-xs text-teal-400">
              <Globe className="h-3.5 w-3.5" />
              Website
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
