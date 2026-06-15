'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ShieldCheck, Star, CheckCircle, Send, ArrowRight } from 'lucide-react'

interface PageProps {
  params: Promise<{ id: string }>
}

export default function ClaimPage({ params }: PageProps) {
  const searchParams = useSearchParams()
  const isVerified = searchParams.get('verified') === 'true'
  const [listingId, setListingId] = useState<string>('')

  useEffect(() => {
    params.then(({ id }) => setListingId(id))
  }, [params])

  if (isVerified) {
    return <UpgradeScreen listingId={listingId} />
  }

  return <ClaimScreen listingId={listingId} />
}

function ClaimScreen({ listingId }: { listingId: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listing_id: listingId, email }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="min-h-screen bg-offwhite flex items-center justify-center px-4">
        <div className="card p-10 max-w-md w-full text-center">
          <Send className="h-12 w-12 text-teal mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-charcoal mb-2">Check Your Email</h1>
          <p className="text-gray-500">
            We sent a verification link to <span className="font-semibold text-charcoal">{email}</span>.
            Click it to verify your ownership and access your listing dashboard.
          </p>
          <p className="text-xs text-gray-400 mt-4">Link expires in 72 hours.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center px-4 py-12">
      <div className="card p-10 max-w-md w-full">
        <div className="text-center mb-6">
          <ShieldCheck className="h-12 w-12 text-teal mx-auto mb-3" />
          <h1 className="text-2xl font-bold text-charcoal">Claim Your Listing</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Enter your clinic email to verify ownership. We&apos;ll send you a link to access your
            listing dashboard and upgrade to Verified or Featured.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label-text">Clinic Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hello@yourclinic.com"
              className="input-field"
            />
          </div>

          {status === 'error' && (
            <p className="text-xs text-red-500">Something went wrong. Please try again.</p>
          )}

          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full py-3">
            {status === 'sending' ? 'Sending...' : 'Send Verification Link'}
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4 text-center">
          Already claimed?{' '}
          <Link href={`/claim/${listingId}?verified=true`} className="text-teal hover:underline">
            Access upgrade options
          </Link>
        </p>
      </div>
    </div>
  )
}

function UpgradeScreen({ listingId }: { listingId: string }) {
  const [loading, setLoading] = useState<string | null>(null)

  const handleUpgrade = async (tier: 'verified' | 'featured') => {
    setLoading(tier)
    try {
      const res = await fetch('/api/upgrade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listing_id: listingId, tier }),
      })
      const data = await res.json() as { url?: string }
      if (data.url) window.location.href = data.url
    } catch {
      setLoading(null)
    }
  }

  return (
    <div className="min-h-screen bg-offwhite py-12 px-4">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <CheckCircle className="h-12 w-12 text-teal mx-auto mb-3" />
          <h1 className="text-2xl font-bold text-charcoal">Your Listing is Verified!</h1>
          <p className="text-gray-500 mt-2">
            Upgrade to get more patients and show up higher in search results.
          </p>
        </div>

        <div className="text-center mb-6">
          <div className="text-5xl font-bold text-gray-900">0</div>
          <div className="text-gray-500 mt-1">people viewed your profile this month</div>
          <div className="mt-3 text-red-600 font-semibold">0 could contact you — your phone and website are hidden</div>
        </div>

        <div className="space-y-3 mb-6 text-left">
          {([
            ['Your phone number visible to searchers', 'They can call you directly'],
            ['Your website linked', 'Drive traffic to your practice site'],
            ['Your full bio displayed', 'Build trust before they reach out'],
            ['Verified badge', 'Stand out from unclaimed profiles'],
          ] as [string, string][]).map(([title, sub]) => (
            <div key={title} className="flex items-start gap-3">
              <span className="text-green-500 text-lg">✓</span>
              <div><div className="font-medium">{title}</div><div className="text-sm text-gray-500">{sub}</div></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Verified */}
          <div className="card p-6 border-teal ring-2 ring-teal ring-offset-2">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="h-5 w-5 text-teal" />
              <span className="font-bold text-teal">Verified</span>
            </div>
            <div className="text-3xl font-bold text-charcoal mb-1">$99<span className="text-sm text-gray-400 font-normal">/yr</span></div>
            <p className="text-xs text-gray-500 mb-4">Full profile + patient contact form</p>
            <button
              onClick={() => handleUpgrade('verified')}
              disabled={!!loading}
              className="btn-primary w-full py-2.5 text-sm"
            >
              {loading === 'verified' ? 'Redirecting...' : (
                <span className="flex items-center justify-center gap-1">Upgrade to Verified <ArrowRight className="h-4 w-4" /></span>
              )}
            </button>
          </div>

          {/* Featured */}
          <div className="card p-6">
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-5 w-5 text-amber" />
              <span className="font-bold text-amber-600">Featured</span>
            </div>
            <div className="text-3xl font-bold text-charcoal mb-1">$199<span className="text-sm text-gray-400 font-normal">/yr</span></div>
            <p className="text-xs text-gray-500 mb-4">Top placement + all Verified features</p>
            <button
              onClick={() => handleUpgrade('featured')}
              disabled={!!loading}
              className="btn-amber w-full py-2.5 text-sm"
            >
              {loading === 'featured' ? 'Redirecting...' : (
                <span className="flex items-center justify-center gap-1">Upgrade to Featured <ArrowRight className="h-4 w-4" /></span>
              )}
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Secure payment via Stripe. Cancel anytime before renewal.
        </p>
      </div>
    </div>
  )
}
