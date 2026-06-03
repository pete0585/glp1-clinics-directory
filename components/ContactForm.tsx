'use client'

import { useState } from 'react'
import { MessageSquare, Send } from 'lucide-react'

interface ContactFormProps {
  listingId: string
  clinicName: string
}

export default function ContactForm({ listingId, clinicName }: ContactFormProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listing_id: listingId, ...form }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="card p-5 text-center">
        <MessageSquare className="h-8 w-8 text-teal mx-auto mb-2" />
        <p className="font-semibold text-teal">Inquiry Sent!</p>
        <p className="text-xs text-gray-500 mt-1">
          {clinicName} will be in touch with you soon.
        </p>
      </div>
    )
  }

  return (
    <div className="card p-5">
      <div className="flex items-center gap-2 mb-3">
        <MessageSquare className="h-5 w-5 text-teal" />
        <h3 className="text-sm font-bold text-charcoal">Contact This Clinic</h3>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text" required
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="input-field text-sm"
        />
        <input
          type="email" required
          placeholder="Email address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input-field text-sm"
        />
        <input
          type="tel"
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="input-field text-sm"
        />
        <textarea
          rows={3}
          placeholder="What are you looking for? (medication, insurance questions, etc.)"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="input-field text-sm resize-none"
        />
        {status === 'error' && (
          <p className="text-xs text-red-500">Something went wrong. Please try again.</p>
        )}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-primary w-full text-sm py-2.5"
        >
          {status === 'sending' ? 'Sending...' : (
            <><Send className="h-3.5 w-3.5" /> Send Inquiry</>
          )}
        </button>
      </form>
      <p className="text-xs text-gray-400 mt-2 text-center">
        Free to contact. No spam.
      </p>
    </div>
  )
}
