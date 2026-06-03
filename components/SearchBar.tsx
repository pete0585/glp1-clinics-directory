'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, MapPin } from 'lucide-react'

interface SearchBarProps {
  size?: 'default' | 'large'
  initialQuery?: string
}

export default function SearchBar({ size = 'default', initialQuery = '' }: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query.trim()) params.set('q', query.trim())
    router.push(`/listings?${params.toString()}`)
  }

  const isLarge = size === 'large'

  return (
    <form onSubmit={handleSubmit} className={`w-full ${isLarge ? 'max-w-2xl' : 'max-w-lg'}`}>
      <div className={`flex items-center gap-2 rounded-full bg-white shadow-card border border-teal-100 ${isLarge ? 'p-2' : 'p-1.5'}`}>
        <div className="flex-1 flex items-center gap-2 px-3">
          <MapPin className={`${isLarge ? 'h-5 w-5' : 'h-4 w-4'} text-teal-300 flex-shrink-0`} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="City, state, or zip code..."
            className={`w-full bg-transparent ${isLarge ? 'text-base py-2' : 'text-sm py-1'} text-charcoal placeholder:text-gray-400 focus:outline-none`}
          />
        </div>
        <button
          type="submit"
          className={`flex-shrink-0 flex items-center gap-2 rounded-full bg-teal text-white font-semibold ${isLarge ? 'px-6 py-3 text-sm' : 'px-4 py-2 text-xs'} hover:bg-teal-600 transition-colors`}
        >
          <Search className={`${isLarge ? 'h-4 w-4' : 'h-3.5 w-3.5'}`} />
          {isLarge ? 'Find Clinics' : 'Search'}
        </button>
      </div>
    </form>
  )
}
