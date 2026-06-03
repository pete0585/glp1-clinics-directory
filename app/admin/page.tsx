import { Suspense } from 'react'
import { getPendingListings } from '@/lib/data'
import AdminTable from '@/components/AdminTable'
import { getTotalCount } from '@/lib/data'

export default async function AdminPage() {
  const [pending, total] = await Promise.all([
    getPendingListings().catch(() => []),
    getTotalCount().catch(() => 0),
  ])

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-charcoal">Pending Approvals</h2>
        <div className="text-sm text-gray-500">
          <span className="font-semibold text-teal">{total.toLocaleString()}</span> total listings
        </div>
      </div>

      <Suspense>
        <AdminTable listings={pending} />
      </Suspense>
    </div>
  )
}
