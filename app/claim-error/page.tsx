import Link from 'next/link'
import { XCircle } from 'lucide-react'

interface PageProps {
  searchParams: Promise<{ reason?: string }>
}

export default async function ClaimErrorPage({ searchParams }: PageProps) {
  const { reason } = await searchParams

  return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center px-4">
      <div className="card p-10 max-w-md w-full text-center">
        <XCircle className="h-12 w-12 text-red-400 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-charcoal mb-2">
          {reason === 'expired' ? 'Link Expired' : 'Invalid Link'}
        </h1>
        <p className="text-gray-500 mb-6">
          {reason === 'expired'
            ? 'This verification link has expired. Please request a new one from your listing page.'
            : 'This verification link is invalid. Please request a new claim link.'}
        </p>
        <Link href="/listings" className="btn-primary">Browse Listings</Link>
      </div>
    </div>
  )
}
