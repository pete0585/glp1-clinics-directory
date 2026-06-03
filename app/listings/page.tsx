import type { Metadata } from 'next'
import { Suspense } from 'react'
import { getListings } from '@/lib/data'
import ListingCard from '@/components/ListingCard'
import FilterSidebar from '@/components/FilterSidebar'
import SearchBar from '@/components/SearchBar'
import type { SearchFilters } from '@/lib/types'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams
  const state = typeof params.state === 'string' ? params.state : undefined
  const medication = typeof params.medication === 'string' ? params.medication : undefined

  const title = state && medication
    ? `GLP-1 Clinics in ${state} — ${medication}`
    : state
    ? `GLP-1 Weight Loss Clinics in ${state}`
    : medication
    ? `${medication.charAt(0).toUpperCase() + medication.slice(1)} Clinics Near You`
    : 'Browse All GLP-1 Weight Loss Clinics'

  return {
    title: `${title} | FindGLP1Clinic.com`,
    description: 'Find and compare GLP-1 weight loss clinics. Filter by medication type, insurance, physician credentials, and telehealth availability.',
  }
}

function Pagination({ page, total, pageSize }: { page: number; total: number; pageSize: number }) {
  const totalPages = Math.ceil(total / pageSize)
  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-center gap-3 mt-8">
      {page > 1 && (
        <Link href={`?page=${page - 1}`} className="flex items-center gap-1 text-sm text-teal hover:underline">
          <ChevronLeft className="h-4 w-4" /> Previous
        </Link>
      )}
      <span className="text-sm text-gray-500">Page {page} of {totalPages}</span>
      {page < totalPages && (
        <Link href={`?page=${page + 1}`} className="flex items-center gap-1 text-sm text-teal hover:underline">
          Next <ChevronRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  )
}

async function ListingsContent({ params }: { params: Record<string, string | string[] | undefined> }) {
  const filters: SearchFilters = {
    q: typeof params.q === 'string' ? params.q : undefined,
    state: typeof params.state === 'string' ? params.state : undefined,
    city: typeof params.city === 'string' ? params.city : undefined,
    medication: typeof params.medication === 'string' ? params.medication : undefined,
    clinic_type: typeof params.clinic_type === 'string' ? params.clinic_type : undefined,
    insurance: typeof params.insurance === 'string' ? params.insurance : undefined,
    physician_supervised: typeof params.physician_supervised === 'string' ? params.physician_supervised : undefined,
    tier: typeof params.tier === 'string' ? params.tier : undefined,
    page: typeof params.page === 'string' ? parseInt(params.page) : 1,
  }

  const { listings, total } = await getListings(filters)
  const page = filters.page ?? 1

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          <span className="font-semibold text-charcoal">{total.toLocaleString()}</span> clinics found
        </p>
      </div>

      {listings.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg font-semibold mb-2">No clinics found</p>
          <p className="text-sm">Try adjusting your filters or searching a different location.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}

      <Pagination page={page} total={total} pageSize={20} />
    </>
  )
}

export default async function ListingsPage({ searchParams }: PageProps) {
  const params = await searchParams

  return (
    <div className="min-h-screen bg-offwhite">
      <div className="bg-white border-b border-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold text-charcoal mb-4">Browse GLP-1 Weight Loss Clinics</h1>
          <SearchBar initialQuery={typeof params.q === 'string' ? params.q : ''} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="card p-5 sticky top-20">
              <Suspense>
                <FilterSidebar />
              </Suspense>
            </div>
          </div>

          {/* Listings */}
          <div className="flex-1 min-w-0">
            <Suspense fallback={
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="card p-5 h-48 animate-pulse bg-gray-50" />
                ))}
              </div>
            }>
              <ListingsContent params={params} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
