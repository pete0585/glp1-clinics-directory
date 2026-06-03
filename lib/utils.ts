import type { Listing } from './types'

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function generateListingSlug(clinicName: string, city: string, state: string): string {
  return slugify(`${clinicName} ${city} ${state}`)
}

export function formatPrice(min?: number, max?: number): string {
  if (!min && !max) return ''
  if (min && max) return `$${min}–$${max}/mo`
  if (min) return `From $${min}/mo`
  if (max) return `Up to $${max}/mo`
  return ''
}

export function getMedicationLabels(medications?: string[]): string[] {
  if (!medications?.length) return []
  const labelMap: Record<string, string> = {
    semaglutide: 'Semaglutide',
    tirzepatide: 'Tirzepatide',
    compounded_glp1: 'Compounded GLP-1',
    wegovy: 'Wegovy',
    ozempic: 'Ozempic',
    mounjaro: 'Mounjaro',
    zepbound: 'Zepbound',
  }
  return medications.map((m) => labelMap[m] ?? m)
}

export function getClinicTypeLabel(type?: string): string {
  const map: Record<string, string> = {
    in_person: 'In-Person',
    telehealth: 'Telehealth',
    hybrid: 'In-Person + Telehealth',
  }
  return type ? (map[type] ?? type) : ''
}

export function formatListingAddress(listing: Listing): string {
  const parts = [listing.address_line1, listing.city, listing.state, listing.zip].filter(Boolean)
  return parts.join(', ')
}

export function getAbsoluteUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.findglp1clinic.com'
  return `${base.replace(/\/$/, '')}${path}`
}

export function stateNameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-')
}

export const US_STATES: { code: string; name: string }[] = [
  { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' }, { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' }, { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' }, { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' }, { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' }, { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' }, { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' }, { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' }, { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' },
  { code: 'DC', name: 'Washington D.C.' },
]
