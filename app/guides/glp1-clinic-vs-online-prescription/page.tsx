import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'GLP-1 Clinic vs Online Prescription: Pros and Cons | FindGLP1Clinic.com',
  description:
    'Online GLP-1 prescriptions are fast and cheap. In-person clinics offer medical oversight and lifestyle support. Here is which is right for your situation.',
  alternates: { canonical: '/guides/glp1-clinic-vs-online-prescription' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it safe to get semaglutide from an online provider?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends on the provider. Reputable telehealth platforms (Ro, Calibrate, Found, Noom Med) employ licensed physicians who review medical history, check contraindications, and monitor labs. They prescribe only to patients who meet BMI and medical criteria. Platforms that ship GLP-1 medications after a questionnaire alone — with no physician review, no labs, and no contraindication screening — are not practicing safe medicine. Any GLP-1 prescription should follow a real medical evaluation, not just a weight entry form.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are compounded semaglutide options safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Compounded semaglutide is significantly cheaper ($100–$250/month vs $1,000+/month for branded Wegovy) and is available through compounding pharmacies. The FDA has cleared compounding of semaglutide while supply shortages exist. However, compounded medications are not FDA-approved for efficacy and safety in the same way branded versions are. Compounded semaglutide from an FDA-registered 503B outsourcing facility is generally considered higher quality than small-batch 503A compounding pharmacies. Any compounded medication should be prescribed by a physician — not sold directly to consumers.",
      },
    },
    {
      '@type': 'Question',
      name: 'What does a GLP-1 weight loss clinic offer that an online prescription does not?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In-person GLP-1 clinics typically offer: body composition measurement (DEXA or InBody scale) to track fat vs. muscle loss; registered dietitian or nutrition coaching; behavioral health integration; higher-touch physician monitoring with in-office visits at each milestone; on-site labs; and metabolic health support beyond the medication itself. For patients who want comprehensive, supervised weight loss management — not just a prescription — an in-person program provides more infrastructure. For patients who are highly self-directed and primarily need the medication and basic monitoring, telehealth works well.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does online GLP-1 treatment cost vs an in-person clinic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Online GLP-1 programs: $150–$400/month including compounded medication, or $200–$500/month if using branded medications with telehealth program management. In-person clinic programs: $200–$600/month including medication, labs, and monitoring visits. Branded Wegovy/Zepbound without insurance or program enrollment: $1,000–$1,400/month at pharmacy retail price. Insurance-covered GLP-1 (when covered for diabetes or obesity): $0–$50/month copay. The key variable is medication type — compounded semaglutide from a telehealth provider is typically cheapest for uninsured patients.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get GLP-1 medications covered by insurance through either option?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Insurance coverage is not determined by where you get the prescription — it is determined by your plan and the indication. Most commercial insurance covers Ozempic for type 2 diabetes (FDA-approved indication). Coverage for obesity (Wegovy) is less consistent. An in-person physician and a telehealth physician both have equal ability to submit a prior authorization for insurance coverage. Ask any provider, before starting: 'Will you help submit a prior authorization for insurance coverage?'",
      },
    },
  ],
}

const comparisonData = [
  { factor: 'Cost (monthly)', online: '$150–$400 all-in', clinic: '$200–$600 all-in' },
  { factor: 'Physician oversight', online: 'Yes (at reputable platforms)', clinic: 'Yes (in-person MD)' },
  { factor: 'Physical exam', online: 'No', clinic: 'Yes' },
  { factor: 'Body composition tracking', online: 'Rarely', clinic: 'Often included' },
  { factor: 'Nutrition coaching', online: 'Some platforms', clinic: 'Common' },
  { factor: 'Compounded semaglutide', online: 'Commonly offered', clinic: 'Some offer it' },
  { factor: 'Labs included', online: 'Sometimes ordered remotely', clinic: 'Usually in-office' },
  { factor: 'Best for', online: 'Self-directed patients wanting convenience', clinic: 'Those who want supervised program support' },
]

export default function Glp1ClinicVsOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-10 sm:px-6">
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1">
            <Link href="/" className="hover:text-charcoal">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/listings" className="hover:text-charcoal">Find a Clinic</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gray-700">GLP-1 Clinic vs Online</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4 leading-tight">
            GLP-1 Clinic vs Online Prescription: Pros and Cons
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Online GLP-1 programs are cheaper and more convenient. In-person clinics offer more
            comprehensive support. Here is how to choose based on your situation.
          </p>

          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden shadow-soft">
              <thead>
                <tr className="bg-teal-600 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Factor</th>
                  <th className="text-left px-4 py-3 font-semibold">Online Program</th>
                  <th className="text-left px-4 py-3 font-semibold">In-Person Clinic</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.factor} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-charcoal">{row.factor}</td>
                    <td className="px-4 py-3 text-gray-700">{row.online}</td>
                    <td className="px-4 py-3 text-gray-700">{row.clinic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <article className="space-y-6 mb-10">
            <h2 className="text-xl font-bold text-charcoal">When online works well</h2>
            <ul className="space-y-2 text-gray-700">
              {[
                'You meet FDA BMI criteria and have no complex contraindications',
                'You want compounded semaglutide at the lowest cost',
                'You are comfortable self-monitoring and do not need frequent in-person check-ins',
                'You live far from a GLP-1 clinic or have scheduling constraints',
                'You want to self-direct your diet and exercise alongside medication',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-teal-600 font-bold mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold text-charcoal">When in-person is better</h2>
            <ul className="space-y-2 text-gray-700">
              {[
                'You want body composition monitoring (muscle vs. fat loss tracking)',
                'You have struggled with weight loss before and want behavioral health support',
                'You have significant metabolic comorbidities (diabetes, hypertension, fatty liver)',
                'You want dietitian-supervised nutrition planning alongside medication',
                'You want in-person physician monitoring and accountability',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-teal-600 font-bold mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold text-charcoal">Frequently Asked Questions</h2>
            {faqJsonLd.mainEntity.map((item) => (
              <details key={item.name} className="bg-white rounded-xl border border-gray-100 shadow-soft group">
                <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-charcoal text-sm select-none">
                  {item.name}
                  <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                  {item.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </article>

          <div className="rounded-2xl bg-teal-50 border border-teal-100 p-6">
            <h2 className="text-lg font-bold text-charcoal mb-2">Find a GLP-1 Clinic Near You</h2>
            <p className="text-sm text-gray-600 mb-4">Browse physician-supervised weight loss programs. Filter by telehealth vs in-person, location, and medication type.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/listings" className="btn-primary">Browse Clinics Near You</Link>
              <Link href="/guides" className="btn-secondary flex items-center gap-1">More Guides <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="font-semibold text-charcoal mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides/how-much-does-semaglutide-cost" className="text-teal-600 hover:underline">How Much Does Semaglutide Cost?</Link></li>
              <li><Link href="/guides/brand-vs-compounded-semaglutide" className="text-teal-600 hover:underline">Brand vs Compounded Semaglutide</Link></li>
              <li><Link href="/guides/red-flags-choosing-glp1-clinic" className="text-teal-600 hover:underline">Red Flags When Choosing a GLP-1 Clinic</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
