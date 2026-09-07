import type { Metadata } from "next"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"

export const metadata: Metadata = {
  title: "Best GLP-1 Weight Loss Clinic in New York, NY | GLP-1 Weight Loss Clinic Directory",
  description: "Find glp-1 weight loss clinic in New York, New York. 30+ listed. Filter by city and compare providers.",
  alternates: { canonical: "/best/glp1-clinics-new-york-ny" },
}

async function getListings() {
  const supabase = await createClient()
  const { data } = await supabase
    .from("glp1_listings")
    .select("*")
    .eq("city", "New York")
    .eq("state", "NY")
    .eq("is_active", true)
    .limit(24)
  return data ?? []
}

function listingName(row: Record<string, unknown>) {
  return (
    (row["clinic_name"] as string) ||
    (row.name as string) ||
    (row.full_name as string) ||
    (row.clinic_name as string) ||
    "Listing"
  )
}

function listingHref(row: Record<string, unknown>) {
  const slug = String(row.slug || "")
  return "/listings/SLUG".replace("SLUG", slug)
}

export default async function CityPage() {
  const listings = await getListings()
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many glp-1 weight loss clinic are in New York, NY?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GLP-1 Weight Loss Clinic Directory lists 30+ glp-1 weight loss clinic in New York, New York. Counts change as new listings are seeded.",
        },
      },
      {
        "@type": "Question",
        name: "How do I find glp-1 weight loss clinic in New York?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Search findglp1clinic.com and filter by New York. Compare listed providers, then contact the one that fits.",
        },
      },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <p className="text-sm text-neutral-500">New York, NY</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          GLP-1 Weight Loss Clinic in New York, NY
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          30+ listed glp-1 weight loss clinic in the New York area. Pages are generated from live directory listings — not outreach.
        </p>
        <p className="mt-2 text-sm text-neutral-500">{listings.length} shown on this page.</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {listings.map((row: Record<string, unknown>, i: number) => (
            <li key={String(row.id || row.slug || i)} className="rounded-xl border border-neutral-200 p-4">
              <Link href={listingHref(row)} className="font-semibold hover:underline">
                {listingName(row)}
              </Link>
              <p className="mt-1 text-sm text-neutral-500">
                {String(row.city || "New York")}, {String(row.state || "NY")}
              </p>
            </li>
          ))}
        </ul>
        {listings.length === 0 && (
          <p className="mt-8 text-neutral-500">Listings for this city are still being seeded.</p>
        )}
      </main>
    </>
  )
}
