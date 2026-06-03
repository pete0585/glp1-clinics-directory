import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getListingBySlug, getAllSlugs } from '@/lib/data'
import ListingDetail from '@/components/ListingDetail'
import { getAbsoluteUrl, formatPrice, getMedicationLabels } from '@/lib/utils'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const listing = await getListingBySlug(slug)
  if (!listing) return {}

  const price = formatPrice(listing.monthly_price_min, listing.monthly_price_max)
  const meds = getMedicationLabels(listing.medications_offered).join(', ')

  const description = [
    `${listing.clinic_name} is a GLP-1 weight loss clinic in ${listing.city}, ${listing.state}.`,
    meds ? `Offers: ${meds}.` : '',
    price ? `Starting at ${price}.` : '',
    listing.insurance_accepted ? 'Insurance accepted.' : '',
    listing.physician_supervised ? 'Physician-supervised program.' : '',
  ].filter(Boolean).join(' ')

  const title = `${listing.clinic_name} — GLP-1 Clinic in ${listing.city}, ${listing.state}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: getAbsoluteUrl(`/listings/${slug}`),
    },
    alternates: {
      canonical: getAbsoluteUrl(`/listings/${slug}`),
    },
  }
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs().catch(() => [] as string[])
  return slugs.slice(0, 1000).map((slug) => ({ slug }))
}

export default async function ListingPage({ params }: PageProps) {
  const { slug } = await params
  const listing = await getListingBySlug(slug)
  if (!listing) notFound()

  const medLabels = getMedicationLabels(listing.medications_offered)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: listing.clinic_name,
    medicalSpecialty: 'Obesity Medicine',
    address: {
      '@type': 'PostalAddress',
      streetAddress: listing.address_line1,
      addressLocality: listing.city,
      addressRegion: listing.state,
      postalCode: listing.zip,
      addressCountry: 'US',
    },
    telephone: listing.phone,
    url: listing.website,
    priceRange: listing.monthly_price_min
      ? `$${listing.monthly_price_min}–$${listing.monthly_price_max ?? listing.monthly_price_min}/mo`
      : undefined,
    availableService: medLabels.map((m) => ({
      '@type': 'MedicalTherapy',
      name: `${m} Weight Loss Treatment`,
    })),
  }

  return (
    <div className="min-h-screen bg-offwhite py-8 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ListingDetail listing={listing} />
    </div>
  )
}
