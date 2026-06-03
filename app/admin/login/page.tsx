'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [secret, setSecret] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret }),
    })
    if (res.ok) {
      router.push('/admin')
    } else {
      setError(true)
    }
  }

  return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center px-4">
      <div className="card p-8 max-w-sm w-full">
        <h1 className="text-xl font-bold text-charcoal mb-4">Admin Access</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="Admin secret"
            className="input-field"
            required
          />
          {error && <p className="text-xs text-red-500">Invalid secret</p>}
          <button type="submit" className="btn-primary w-full">Access Admin</button>
        </form>
      </div>
    </div>
  )
}
