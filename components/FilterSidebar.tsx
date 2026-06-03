'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback } from 'react'
import { X, SlidersHorizontal } from 'lucide-react'
import { US_STATES } from '@/lib/utils'

const MEDICATIONS = [
  { value: 'semaglutide', label: 'Semaglutide' },
  { value: 'tirzepatide', label: 'Tirzepatide' },
  { value: 'compounded_glp1', label: 'Compounded GLP-1' },
  { value: 'wegovy', label: 'Wegovy' },
  { value: 'ozempic', label: 'Ozempic' },
  { value: 'mounjaro', label: 'Mounjaro' },
]

const CLINIC_TYPES = [
  { value: 'in_person', label: 'In-Person Only' },
  { value: 'telehealth', label: 'Telehealth' },
  { value: 'hybrid', label: 'In-Person + Telehealth' },
]

interface FilterSidebarProps {
  onClose?: () => void
}

export default function FilterSidebar({ onClose }: FilterSidebarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString())
      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === '') {
          params.delete(key)
        } else {
          params.set(key, value)
          params.delete('page')
        }
      })
      return params.toString()
    },
    [searchParams]
  )

  const updateFilter = (key: string, value: string | null) => {
    router.push(`${pathname}?${createQueryString({ [key]: value })}`)
  }

  const clearAll = () => {
    router.push(pathname)
  }

  const current = {
    state: searchParams.get('state') ?? '',
    medication: searchParams.get('medication') ?? '',
    clinic_type: searchParams.get('clinic_type') ?? '',
    insurance: searchParams.get('insurance') ?? '',
    physician_supervised: searchParams.get('physician_supervised') ?? '',
  }

  const hasFilters = Object.values(current).some(Boolean)

  return (
    <aside className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-sm font-bold text-charcoal">
          <SlidersHorizontal className="h-4 w-4 text-teal" />
          Filters
        </div>
        <div className="flex items-center gap-2">
          {hasFilters && (
            <button onClick={clearAll} className="text-xs text-teal hover:underline">
              Clear all
            </button>
          )}
          {onClose && (
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      <div className="space-y-5">
        {/* State */}
        <div>
          <label className="label-text">State</label>
          <select
            value={current.state}
            onChange={(e) => updateFilter('state', e.target.value || null)}
            className="input-field"
          >
            <option value="">All States</option>
            {US_STATES.map((s) => (
              <option key={s.code} value={s.code}>{s.name}</option>
            ))}
          </select>
        </div>

        {/* Medication */}
        <div>
          <label className="label-text">Medication Type</label>
          <div className="space-y-2">
            {MEDICATIONS.map((m) => (
              <label key={m.value} className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="radio"
                  name="medication"
                  value={m.value}
                  checked={current.medication === m.value}
                  onChange={() => updateFilter('medication', current.medication === m.value ? null : m.value)}
                  className="accent-teal-500"
                />
                <span className="text-sm text-gray-700 group-hover:text-teal">{m.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Clinic type */}
        <div>
          <label className="label-text">Clinic Type</label>
          <div className="space-y-2">
            {CLINIC_TYPES.map((t) => (
              <label key={t.value} className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="radio"
                  name="clinic_type"
                  value={t.value}
                  checked={current.clinic_type === t.value}
                  onChange={() => updateFilter('clinic_type', current.clinic_type === t.value ? null : t.value)}
                  className="accent-teal-500"
                />
                <span className="text-sm text-gray-700 group-hover:text-teal">{t.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Insurance */}
        <div>
          <label className="label-text">Insurance</label>
          <label className="flex items-center gap-2.5 cursor-pointer group">
            <input
              type="checkbox"
              checked={current.insurance === 'yes'}
              onChange={(e) => updateFilter('insurance', e.target.checked ? 'yes' : null)}
              className="accent-teal-500 h-4 w-4 rounded"
            />
            <span className="text-sm text-gray-700 group-hover:text-teal">Insurance Accepted</span>
          </label>
        </div>

        {/* Physician supervised */}
        <div>
          <label className="label-text">Supervision</label>
          <label className="flex items-center gap-2.5 cursor-pointer group">
            <input
              type="checkbox"
              checked={current.physician_supervised === 'yes'}
              onChange={(e) => updateFilter('physician_supervised', e.target.checked ? 'yes' : null)}
              className="accent-teal-500 h-4 w-4 rounded"
            />
            <span className="text-sm text-gray-700 group-hover:text-teal">Physician-Supervised (MD/DO)</span>
          </label>
        </div>
      </div>
    </aside>
  )
}
