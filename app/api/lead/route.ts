import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const listing_id = body.listing_id as string | undefined
  if (!listing_id) {
    return NextResponse.json({ error: 'listing_id required' }, { status: 400 })
  }

  const supabase = await createServiceClient()

  const { data: listing } = await supabase
    .from('glp1_listings')
    .select('id, clinic_name, email, listing_tier')
    .eq('id', listing_id)
    .single()

  if (!listing) {
    return NextResponse.json({ error: 'Listing not found' }, { status: 404 })
  }

  await supabase.from('glp1_leads').insert({
    listing_id,
    name: body.name as string | undefined,
    email: body.email as string | undefined,
    phone: body.phone as string | undefined,
    message: body.message as string | undefined,
    status: 'new',
  })

  // Forward to clinic if Resend configured and listing has email
  const resendApiKey = process.env.RESEND_API_KEY
  if (resendApiKey && listing.email && listing.listing_tier !== 'free') {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
        'User-Agent': 'curl/8.5.0',
      },
      body: JSON.stringify({
        from: 'FindGLP1Clinic <hello@mail.findglp1clinic.com>',
        to: [listing.email],
        reply_to: body.email as string,
        subject: `New patient inquiry for ${listing.clinic_name}`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
            <h2 style="color:#0B6E6E">New Patient Inquiry</h2>
            <p><strong>Name:</strong> ${body.name ?? 'Not provided'}</p>
            <p><strong>Email:</strong> ${body.email ?? 'Not provided'}</p>
            <p><strong>Phone:</strong> ${body.phone ?? 'Not provided'}</p>
            <p><strong>Message:</strong> ${body.message ?? 'No message'}</p>
            <hr/>
            <p style="color:#999;font-size:12px">Sent via FindGLP1Clinic.com</p>
          </div>
        `,
      }),
    })
  }

  return NextResponse.json({ success: true })
}
