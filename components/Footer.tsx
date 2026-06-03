import Link from 'next/link'
import { Syringe } from 'lucide-react'

const MEDICATION_LINKS = [
  { href: '/categories/semaglutide-clinics', label: 'Semaglutide Clinics' },
  { href: '/categories/tirzepatide-clinics', label: 'Tirzepatide Clinics' },
  { href: '/categories/compounded-glp1', label: 'Compounded GLP-1' },
  { href: '/categories/physician-supervised', label: 'Physician-Supervised' },
  { href: '/categories/telehealth-weight-loss', label: 'Telehealth Weight Loss' },
  { href: '/categories/insurance-accepted', label: 'Insurance Accepted' },
]

const PROVIDER_LINKS = [
  { href: '/submit', label: 'List Your Clinic' },
  { href: '/submit#pricing', label: 'View Pricing' },
  { href: '/claim', label: 'Claim Your Listing' },
]

const CITY_LINKS = [
  { href: '/listings?state=TX&city=Houston', label: 'Houston' },
  { href: '/listings?state=TX&city=Dallas', label: 'Dallas' },
  { href: '/listings?state=FL&city=Miami', label: 'Miami' },
  { href: '/listings?state=CA&city=Los Angeles', label: 'Los Angeles' },
  { href: '/listings?state=NY&city=New York', label: 'New York' },
  { href: '/listings?state=IL&city=Chicago', label: 'Chicago' },
  { href: '/listings?state=AZ&city=Phoenix', label: 'Phoenix' },
  { href: '/listings?state=GA&city=Atlanta', label: 'Atlanta' },
]

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-white text-base mb-3">
              <Syringe className="h-5 w-5" aria-label="FindGLP1Clinic" />
              <span>FindGLP1Clinic<span className="text-amber">.com</span></span>
            </Link>
            <p className="text-teal-200 text-sm leading-relaxed">
              The largest directory of GLP-1 weight loss clinics in the US. Compare medication types,
              pricing, and physician credentials before you book.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-3">Medications</p>
            <ul className="space-y-2">
              {MEDICATION_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-teal-200 text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-3">For Clinics</p>
            <ul className="space-y-2">
              {PROVIDER_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-teal-200 text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-3">Popular Cities</p>
            <ul className="space-y-2">
              {CITY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-teal-200 text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-teal-400 text-xs">
            &copy; {new Date().getFullYear()} FindGLP1Clinic.com. All rights reserved.
          </p>
          <p className="text-teal-500 text-xs text-center">
            FindGLP1Clinic.com is a directory service. Always consult a licensed physician before starting GLP-1 treatment.
          </p>
        </div>
      </div>
    </footer>
  )
}
