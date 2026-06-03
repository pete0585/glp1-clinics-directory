'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, ExternalLink } from 'lucide-react'
import type { Listing } from '@/lib/types'

interface AdminTableProps {
  listings: Listing[]
}

export default function AdminTable({ listings: initialListings }: AdminTableProps) {
  const [listings, setListings] = useState(initialListings)
  const [loading, setLoading] = useState<string | null>(null)

  const handleAction = async (id: string, action: 'approve' | 'reject') => {
    setLoading(id)
    try {
      await fetch('/api/admin/listing', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action }),
      })
      setListings((prev) => prev.filter((l) => l.id !== id))
    } finally {
      setLoading(null)
    }
  }

  if (!listings.length) {
    return (
      <div className="text-center py-12 text-gray-500">
        <CheckCircle className="h-10 w-10 text-teal-200 mx-auto mb-2" />
        <p>No pending listings.</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-teal-50 shadow-soft">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-teal-50 text-left text-xs font-semibold text-teal-700 uppercase tracking-wider">
            <th className="px-4 py-3">Clinic</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3">Contact</th>
            <th className="px-4 py-3">Medications</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {listings.map((l) => (
            <tr key={l.id} className="bg-white hover:bg-teal-50/30 transition-colors">
              <td className="px-4 py-3">
                <p className="font-semibold text-charcoal">{l.clinic_name}</p>
                <p className="text-xs text-gray-400">{l.source ?? 'self'}</p>
              </td>
              <td className="px-4 py-3 text-gray-600">{l.city}, {l.state}</td>
              <td className="px-4 py-3">
                <p className="text-gray-600">{l.phone ?? '—'}</p>
                {l.website && (
                  <a href={l.website} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-teal hover:underline mt-0.5">
                    Website <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </td>
              <td className="px-4 py-3">
                <div className="flex flex-wrap gap-1">
                  {l.medications_offered?.slice(0, 2).map((m) => (
                    <span key={m} className="badge badge-teal">{m}</span>
                  ))}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleAction(l.id, 'approve')}
                    disabled={loading === l.id}
                    className="flex items-center gap-1 text-xs font-medium text-emerald-600 hover:text-emerald-700 disabled:opacity-50"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Approve
                  </button>
                  <button
                    onClick={() => handleAction(l.id, 'reject')}
                    disabled={loading === l.id}
                    className="flex items-center gap-1 text-xs font-medium text-red-500 hover:text-red-600 disabled:opacity-50"
                  >
                    <XCircle className="h-4 w-4" />
                    Reject
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
