import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get('token')
  const listingId = searchParams.get('id')

  if (!token || !listingId) {
    return NextResponse.redirect(new URL('/claim-error?reason=invalid', req.url))
  }

  const supabase = await createServiceClient()

  const { data: claim, error } = await supabase
    .from('glp1_claims')
    .select('*')
    .eq('token', token)
    .eq('listing_id', listingId)
    .eq('verified', false)
    .gt('expires_at', new Date().toISOString())
    .single()

  if (error || !claim) {
    return NextResponse.redirect(new URL('/claim-error?reason=expired', req.url))
  }

  const now = new Date().toISOString()

  await Promise.all([
    supabase
      .from('glp1_claims')
      .update({ verified: true, verified_at: now })
      .eq('id', claim.id),
    supabase
      .from('glp1_listings')
      .update({ claimed: true, claimed_at: now, listing_tier: 'free' })
      .eq('id', listingId),
  ])

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.findglp1clinic.com'
  return NextResponse.redirect(new URL(`/claim/${listingId}?verified=true`, siteUrl))
}
