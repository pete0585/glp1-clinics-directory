# FindGLP1Clinic.com — GLP-1 Clinics Directory

A production-ready Next.js directory for GLP-1 weight loss clinics (semaglutide, tirzepatide, and compounded GLP-1 programs). Deployed at [findglp1clinic.com](https://findglp1clinic.com).

## Stack

- **Framework**: Next.js 15.3.9 (App Router, TypeScript)
- **Styling**: Tailwind CSS with custom teal/amber brand colors
- **Database**: Supabase (project: `fbuqrnzofktepkzyfmhy`)
- **Payments**: Stripe (Verified $99/yr, Featured $199/yr)
- **Email**: Resend
- **Deployment**: Vercel

## Local Setup

```bash
cd builds/glp1-clinics
npm install
cp .env.example .env.local
# Fill in env vars (see below)
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-only) |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |
| `STRIPE_VERIFIED_PRICE_ID` | Stripe price ID for Verified tier ($99/yr) |
| `STRIPE_FEATURED_PRICE_ID` | Stripe price ID for Featured tier ($199/yr) |
| `RESEND_API_KEY` | Resend API key for transactional emails |
| `RESEND_FROM_EMAIL` | Sender address (e.g., hello@mail.findglp1clinic.com) |
| `ADMIN_SECRET` | Admin panel password |
| `NEXT_PUBLIC_SITE_URL` | Full site URL (https://findglp1clinic.com) |

## Vercel Deployment

The Vercel project `prj_iQJk8wyq6U4ZRL6VCDEewRGPcRth` is already linked to `pete0585/glp1-clinics-directory`. All environment variables are set in Vercel. Push to `main` to deploy.

```bash
git push origin main
```

## Supabase Setup

The schema has already been applied to the live Directories Supabase project (`fbuqrnzofktepkzyfmhy`). Tables:

- `glp1_listings` — Main clinic directory with GLP-1-specific fields
- `glp1_claims` — Clinic ownership verification tokens
- `glp1_payments` — Stripe payment records
- `glp1_leads` — Patient inquiry leads

To re-apply the schema from scratch:

```bash
# Apply migration via Supabase CLI
supabase db push
# or use the MCP tool: mcp__supabase__apply_migration
```

## Data Seeding

Seed initial listings:

```bash
npx tsx scripts/seed.ts
```

Uses DataForSEO and public sources to populate 150-300 real clinic listings.

## Admin Panel

Visit `/admin` and enter the `ADMIN_SECRET` value. Approve or reject submitted listings.

## Stripe Webhook

Configure in Stripe Dashboard → Webhooks → Add endpoint:
- URL: `https://www.findglp1clinic.com/api/webhooks/stripe`
- Events: `checkout.session.completed`, `customer.subscription.deleted`, `invoice.payment_failed`

Copy the webhook signing secret to `STRIPE_WEBHOOK_SECRET`.

## Resend Inbound Email

Configure in Resend Dashboard → Inbound → Add webhook:
- URL: `https://www.findglp1clinic.com/api/inbound-email` (must use www)
- Catches replies to outreach emails sent from `mail.findglp1clinic.com`

## IndexNow

IndexNow uses a 32-character hex verification key. The live key belongs in Vercel (and as the public verification file on the deployment), not in this README.

- Host the key file at `public/<INDEXNOW_KEY>.txt` on the deployment (filename and file contents must both be the key)
- Keep the live value in Vercel / the deployed `public/<INDEXNOW_KEY>.txt` file only

## Architecture

- **Homepage** (`/`) — Hero search, medication categories, featured listings, city grid
- **Browse** (`/listings`) — Filterable listing grid (state, medication, clinic type, insurance)
- **Detail** (`/listings/[slug]`) — Full clinic profile with contact form for premium tiers
- **Categories** (`/categories/[slug]`) — SEO landing pages per medication/clinic type
- **Submit** (`/submit`) — Clinic submission with tier selection
- **Claim** (`/claim/[id]`) — Ownership verification → upgrade flow
- **Admin** (`/admin`) — Approve/reject submitted listings
