export type ListingTier = 'free' | 'verified' | 'featured'
export type ClinicType = 'in_person' | 'telehealth' | 'hybrid'

export interface Listing {
  id: string
  clinic_name: string
  slug: string
  address_line1?: string
  city: string
  state: string
  zip?: string
  latitude?: number
  longitude?: number
  phone?: string
  website?: string
  email?: string
  email_source?: string
  clinic_type?: ClinicType
  medications_offered?: string[]
  is_compounded?: boolean
  insurance_accepted?: boolean
  insurance_plans?: string[]
  physician_supervised?: boolean
  provider_credentials?: string
  monthly_price_min?: number
  monthly_price_max?: number
  telehealth_states?: string[]
  accepting_new_patients?: boolean
  listing_tier: ListingTier
  listing_tier_rank: number
  claimed: boolean
  claimed_at?: string
  outreach_sent_at?: string
  upgrade_nudge_step?: number
  upgrade_nudge_sent_at?: string
  stripe_customer_id?: string
  plan_expires_at?: string
  source?: string
  is_active: boolean
  is_approved: boolean
  do_not_email?: boolean
  created_at: string
  updated_at: string
}

export interface SearchFilters {
  q?: string
  state?: string
  city?: string
  medication?: string
  clinic_type?: string
  insurance?: string
  physician_supervised?: string
  tier?: string
  page?: number
}

export interface Lead {
  id: string
  listing_id: string
  name?: string
  email?: string
  phone?: string
  message?: string
  status: 'new' | 'routed' | 'converted'
  routed_at?: string
  created_at: string
}

export const MEDICATIONS = [
  { value: 'semaglutide', label: 'Semaglutide (Wegovy/Ozempic)' },
  { value: 'tirzepatide', label: 'Tirzepatide (Mounjaro/Zepbound)' },
  { value: 'compounded_glp1', label: 'Compounded GLP-1' },
  { value: 'wegovy', label: 'Wegovy' },
  { value: 'ozempic', label: 'Ozempic' },
  { value: 'mounjaro', label: 'Mounjaro' },
  { value: 'zepbound', label: 'Zepbound' },
] as const

export const CLINIC_TYPES = [
  { value: 'in_person', label: 'In-Person' },
  { value: 'telehealth', label: 'Telehealth' },
  { value: 'hybrid', label: 'In-Person + Telehealth' },
] as const

export const PROVIDER_CREDENTIALS = [
  { value: 'MD', label: 'MD (Medical Doctor)' },
  { value: 'DO', label: 'DO (Doctor of Osteopathic Medicine)' },
  { value: 'NP', label: 'NP (Nurse Practitioner)' },
  { value: 'PA', label: 'PA (Physician Assistant)' },
  { value: 'RD', label: 'RD (Registered Dietitian)' },
] as const

export const CATEGORIES = [
  {
    slug: 'semaglutide-clinics',
    label: 'Semaglutide Clinics',
    description: 'Clinics offering semaglutide (Wegovy, Ozempic) for weight loss',
    medication: 'semaglutide',
    icon: '💉',
  },
  {
    slug: 'tirzepatide-clinics',
    label: 'Tirzepatide Clinics',
    description: 'Clinics offering tirzepatide (Mounjaro, Zepbound) for weight loss',
    medication: 'tirzepatide',
    icon: '⚕️',
  },
  {
    slug: 'compounded-glp1',
    label: 'Compounded GLP-1',
    description: 'Clinics offering compounded semaglutide at lower cost',
    medication: 'compounded_glp1',
    icon: '🧪',
  },
  {
    slug: 'physician-supervised',
    label: 'Physician-Supervised',
    description: 'MD/DO-supervised weight loss programs',
    physician_supervised: true,
    icon: '🩺',
  },
  {
    slug: 'telehealth-weight-loss',
    label: 'Telehealth Weight Loss',
    description: 'Start GLP-1 treatment from home via telehealth',
    clinic_type: 'telehealth',
    icon: '📱',
  },
  {
    slug: 'insurance-accepted',
    label: 'Insurance Accepted',
    description: 'Clinics that accept health insurance for GLP-1 treatment',
    insurance_accepted: true,
    icon: '🛡️',
  },
] as const
