import { createClient, createServiceClient, createStaticClient } from '@/lib/supabase/server'
import type { Listing, SearchFilters } from '@/lib/types'

const PAGE_SIZE = 20

export async function getListings(
  filters: SearchFilters = {}
): Promise<{ listings: Listing[]; total: number }> {
  const supabase = await createClient()
  const { q, state, city, medication, clinic_type, insurance, physician_supervised, tier, page = 1 } = filters
  const offset = (page - 1) * PAGE_SIZE

  let query = supabase
    .from('glp1_listings')
    .select('*', { count: 'exact' })
    .eq('is_active', true)
    .eq('is_approved', true)
    .order('listing_tier_rank', { ascending: false })
    .order('clinic_name', { ascending: true })
    .range(offset, offset + PAGE_SIZE - 1)

  if (q) {
    query = query.or(`clinic_name.ilike.%${q}%,city.ilike.%${q}%,state.ilike.%${q}%`)
  }
  if (state) query = query.eq('state', state.toUpperCase())
  if (city) query = query.ilike('city', city)
  if (medication) query = query.contains('medications_offered', [medication])
  if (clinic_type) query = query.eq('clinic_type', clinic_type)
  if (insurance === 'yes') query = query.eq('insurance_accepted', true)
  if (physician_supervised === 'yes') query = query.eq('physician_supervised', true)
  if (tier) query = query.eq('listing_tier', tier)

  const { data, count, error } = await query
  if (error) throw error
  return { listings: (data as Listing[]) ?? [], total: count ?? 0 }
}

export async function getListingBySlug(slug: string): Promise<Listing | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('glp1_listings')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()

  if (error) return null
  return data as Listing
}

export async function getListingById(id: string): Promise<Listing | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('glp1_listings')
    .select('*')
    .eq('id', id)
    .single()

  if (error) return null
  return data as Listing
}

export async function getFeaturedListings(limit = 6): Promise<Listing[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('glp1_listings')
    .select('*')
    .eq('listing_tier', 'featured')
    .eq('is_active', true)
    .eq('is_approved', true)
    .order('clinic_name', { ascending: true })
    .limit(limit)

  if (error) return []
  return (data as Listing[]) ?? []
}

export async function getRecentListings(limit = 8): Promise<Listing[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('glp1_listings')
    .select('*')
    .eq('is_active', true)
    .eq('is_approved', true)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) return []
  return (data as Listing[]) ?? []
}

export async function getListingsByCategory(params: {
  medication?: string
  clinic_type?: string
  insurance_accepted?: boolean
  physician_supervised?: boolean
}, limit = 50): Promise<Listing[]> {
  const supabase = await createClient()
  let query = supabase
    .from('glp1_listings')
    .select('*')
    .eq('is_active', true)
    .eq('is_approved', true)
    .order('listing_tier_rank', { ascending: false })
    .order('clinic_name', { ascending: true })
    .limit(limit)

  if (params.medication) query = query.contains('medications_offered', [params.medication])
  if (params.clinic_type) query = query.eq('clinic_type', params.clinic_type)
  if (params.insurance_accepted) query = query.eq('insurance_accepted', true)
  if (params.physician_supervised) query = query.eq('physician_supervised', true)

  const { data, error } = await query
  if (error) return []
  return (data as Listing[]) ?? []
}

export async function getListingsByState(state: string, limit = 50): Promise<Listing[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('glp1_listings')
    .select('*')
    .eq('state', state.toUpperCase())
    .eq('is_active', true)
    .eq('is_approved', true)
    .order('listing_tier_rank', { ascending: false })
    .order('clinic_name', { ascending: true })
    .limit(limit)

  if (error) return []
  return (data as Listing[]) ?? []
}

export async function getListingsByCity(city: string, state: string, limit = 30): Promise<Listing[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('glp1_listings')
    .select('*')
    .ilike('city', city)
    .eq('state', state.toUpperCase())
    .eq('is_active', true)
    .eq('is_approved', true)
    .order('listing_tier_rank', { ascending: false })
    .order('clinic_name', { ascending: true })
    .limit(limit)

  if (error) return []
  return (data as Listing[]) ?? []
}

export async function getTotalCount(): Promise<number> {
  const supabase = await createClient()
  const { count, error } = await supabase
    .from('glp1_listings')
    .select('*', { count: 'exact', head: true })
    .eq('is_active', true)
    .eq('is_approved', true)

  if (error) return 0
  return count ?? 0
}

export async function getStateCounts(): Promise<{ state: string; count: number }[]> {
  const supabase = createStaticClient()
  const { data, error } = await supabase
    .from('glp1_listings')
    .select('state')
    .eq('is_active', true)
    .eq('is_approved', true)

  if (error || !data) return []

  const counts: Record<string, number> = {}
  for (const row of data) {
    counts[row.state] = (counts[row.state] ?? 0) + 1
  }

  return Object.entries(counts)
    .map(([state, count]) => ({ state, count }))
    .sort((a, b) => b.count - a.count)
}

export async function getAllSlugs(): Promise<string[]> {
  const supabase = createStaticClient()
  const { data, error } = await supabase
    .from('glp1_listings')
    .select('slug')
    .eq('is_active', true)
    .eq('is_approved', true)

  if (error) return []
  return data?.map((r) => r.slug) ?? []
}

export async function getPendingListings(): Promise<Listing[]> {
  const supabase = await createServiceClient()
  const { data, error } = await supabase
    .from('glp1_listings')
    .select('*')
    .eq('is_approved', false)
    .order('created_at', { ascending: false })

  if (error) return []
  return (data as Listing[]) ?? []
}
