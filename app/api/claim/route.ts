import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'
import crypto from 'crypto'

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const listing_id = body.listing_id as string | undefined
  const email = body.email as string | undefined

  if (!listing_id || !email) {
    return NextResponse.json({ error: 'listing_id and email required' }, { status: 400 })
  }

  const supabase = await createServiceClient()

  const { data: listing, error: listingError } = await supabase
    .from('glp1_listings')
    .select('id, clinic_name, slug')
    .eq('id', listing_id)
    .single()

  if (listingError || !listing) {
    return NextResponse.json({ error: 'Listing not found' }, { status: 404 })
  }

  const token = crypto.randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + 72 * 60 * 60 * 1000).toISOString()

  await supabase.from('glp1_claims').insert({
    listing_id,
    email,
    token,
    verified: false,
    expires_at: expiresAt,
  })

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.findglp1clinic.com'
  const verifyUrl = `${siteUrl}/api/claim/verify?token=${token}&id=${listing_id}`

  const resendApiKey = process.env.RESEND_API_KEY
  if (resendApiKey) {
    const emailBody = {
      from: 'FindGLP1Clinic <hello@mail.findglp1clinic.com>',
      to: [email],
      subject: `Verify your listing: ${listing.clinic_name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
          <h2 style="color:#0B6E6E">Claim Your GLP-1 Clinic Listing</h2>
          <p>Click the button below to verify ownership of <strong>${listing.clinic_name}</strong>
          on FindGLP1Clinic.com and access your listing dashboard.</p>
          <a href="${verifyUrl}" style="display:inline-block;background:#0B6E6E;color:white;padding:12px 24px;border-radius:24px;text-decoration:none;font-weight:600;margin:16px 0">
            Verify &amp; Claim Listing
          </a>
          <p style="color:#999;font-size:12px">Link expires in 72 hours. If you didn't request this, ignore this email.</p>
        </div>
      `,
    }

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
        'User-Agent': 'curl/8.5.0',
      },
      body: JSON.stringify(emailBody),
    })
  }

  return NextResponse.json({ success: true })
}
