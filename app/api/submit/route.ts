import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'
import { generateListingSlug } from '@/lib/utils'

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const clinic_name = body.clinic_name as string | undefined
  const city = body.city as string | undefined
  const state = body.state as string | undefined

  if (!clinic_name || !city || !state) {
    return NextResponse.json({ error: 'clinic_name, city, state required' }, { status: 400 })
  }

  const supabase = await createServiceClient()

  let slug = generateListingSlug(clinic_name, city, state)

  const { data: existing } = await supabase
    .from('glp1_listings')
    .select('id')
    .eq('slug', slug)
    .maybeSingle()

  if (existing) {
    slug = `${slug}-${Date.now()}`
  }

  const insertData = {
    clinic_name,
    slug,
    address_line1: body.address_line1 as string | undefined,
    city,
    state: state.toUpperCase(),
    zip: body.zip as string | undefined,
    phone: body.phone as string | undefined,
    website: body.website as string | undefined,
    email: body.email as string | undefined,
    clinic_type: body.clinic_type as string | undefined,
    medications_offered: (body.medications_offered as string[] | undefined) ?? [],
    is_compounded: body.is_compounded as boolean | undefined ?? false,
    insurance_accepted: body.insurance_accepted as boolean | undefined ?? false,
    physician_supervised: body.physician_supervised as boolean | undefined ?? false,
    provider_credentials: body.provider_credentials as string | undefined,
    monthly_price_min: body.monthly_price_min ? Number(body.monthly_price_min) : undefined,
    monthly_price_max: body.monthly_price_max ? Number(body.monthly_price_max) : undefined,
    accepting_new_patients: true,
    listing_tier: 'free' as const,
    listing_tier_rank: 0,
    claimed: false,
    is_active: true,
    is_approved: false,
    do_not_email: false,
    source: 'self',
  }

  const { error } = await supabase.from('glp1_listings').insert(insertData)
  if (error) {
    return NextResponse.json({ error: 'Failed to insert listing' }, { status: 500 })
  }

  return NextResponse.json({ success: true, slug })
}
