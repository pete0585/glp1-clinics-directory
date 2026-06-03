-- GLP-1 Clinics Directory Schema
-- Apply via: supabase db push or mcp__supabase__apply_migration
-- Note: corrective migration already applied via MCP on 2026-06-03
-- This file documents the final schema for reference

-- Drop bootstrap tables (all 0 rows, safe)
DROP TABLE IF EXISTS public.glp1_clinics_reviews CASCADE;
DROP TABLE IF EXISTS public.glp1_clinics_payments CASCADE;
DROP TABLE IF EXISTS public.glp1_clinics_claims CASCADE;
DROP TABLE IF EXISTS public.glp1_clinics_listings CASCADE;

-- GLP-1 Listings
CREATE TABLE IF NOT EXISTS public.glp1_listings (
  id UUID PRIMARY KEY DEFAULT extensions.uuid_generate_v4(),
  clinic_name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  address_line1 TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip TEXT,
  latitude NUMERIC,
  longitude NUMERIC,
  phone TEXT,
  website TEXT,
  email TEXT,
  email_source VARCHAR(50),
  clinic_type TEXT DEFAULT 'in_person',
  medications_offered TEXT[] DEFAULT '{}'::text[],
  is_compounded BOOLEAN NOT NULL DEFAULT false,
  insurance_accepted BOOLEAN NOT NULL DEFAULT false,
  insurance_plans TEXT[] DEFAULT '{}'::text[],
  physician_supervised BOOLEAN NOT NULL DEFAULT false,
  provider_credentials TEXT,
  monthly_price_min INTEGER,
  monthly_price_max INTEGER,
  telehealth_states TEXT[] DEFAULT '{}'::text[],
  accepting_new_patients BOOLEAN NOT NULL DEFAULT true,
  listing_tier TEXT NOT NULL DEFAULT 'free',
  listing_tier_rank INTEGER NOT NULL DEFAULT 0,
  claimed BOOLEAN NOT NULL DEFAULT false,
  claimed_at TIMESTAMPTZ,
  outreach_sent_at TIMESTAMPTZ,
  outreach_last_sent_at TIMESTAMPTZ,
  upgrade_nudge_step INTEGER NOT NULL DEFAULT 0,
  upgrade_nudge_sent_at TIMESTAMPTZ,
  stripe_customer_id TEXT,
  plan_expires_at TIMESTAMPTZ,
  source TEXT DEFAULT 'dataseo',
  is_active BOOLEAN NOT NULL DEFAULT true,
  is_approved BOOLEAN NOT NULL DEFAULT true,
  do_not_email BOOLEAN NOT NULL DEFAULT false,
  search_vector TSVECTOR,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- GLP-1 Claims
CREATE TABLE IF NOT EXISTS public.glp1_claims (
  id UUID PRIMARY KEY DEFAULT extensions.uuid_generate_v4(),
  listing_id UUID NOT NULL REFERENCES public.glp1_listings(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  token TEXT UNIQUE NOT NULL,
  verified BOOLEAN NOT NULL DEFAULT false,
  verified_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL DEFAULT (now() + INTERVAL '72 hours'),
  nudge_sent_at TIMESTAMPTZ
);

-- GLP-1 Payments
CREATE TABLE IF NOT EXISTS public.glp1_payments (
  id UUID PRIMARY KEY DEFAULT extensions.uuid_generate_v4(),
  listing_id UUID NOT NULL REFERENCES public.glp1_listings(id) ON DELETE CASCADE,
  stripe_session_id TEXT UNIQUE,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  amount INTEGER NOT NULL,
  currency TEXT NOT NULL DEFAULT 'usd',
  tier TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- GLP-1 Leads
CREATE TABLE IF NOT EXISTS public.glp1_leads (
  id UUID PRIMARY KEY DEFAULT extensions.uuid_generate_v4(),
  listing_id UUID NOT NULL REFERENCES public.glp1_listings(id) ON DELETE CASCADE,
  name TEXT,
  email TEXT,
  phone TEXT,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  routed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_glp1_listings_city ON public.glp1_listings(city);
CREATE INDEX IF NOT EXISTS idx_glp1_listings_state ON public.glp1_listings(state);
CREATE INDEX IF NOT EXISTS idx_glp1_listings_tier ON public.glp1_listings(listing_tier);
CREATE INDEX IF NOT EXISTS idx_glp1_listings_active ON public.glp1_listings(is_active, is_approved);
CREATE INDEX IF NOT EXISTS idx_glp1_listings_search ON public.glp1_listings USING GIN(search_vector);
CREATE INDEX IF NOT EXISTS idx_glp1_listings_medications ON public.glp1_listings USING GIN(medications_offered);

-- Tsvector trigger
CREATE OR REPLACE FUNCTION public.glp1_listings_search_trigger()
RETURNS TRIGGER AS $$
BEGIN
  NEW.search_vector := to_tsvector('english',
    COALESCE(NEW.clinic_name, '') || ' ' ||
    COALESCE(NEW.city, '') || ' ' ||
    COALESCE(NEW.state, '') || ' ' ||
    COALESCE(ARRAY_TO_STRING(NEW.medications_offered, ' '), '') || ' ' ||
    COALESCE(NEW.provider_credentials, '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER glp1_listings_search_update
BEFORE INSERT OR UPDATE ON public.glp1_listings
FOR EACH ROW EXECUTE FUNCTION public.glp1_listings_search_trigger();

-- Proximity RPC
CREATE OR REPLACE FUNCTION public.find_glp1_near(
  search_lat NUMERIC,
  search_lng NUMERIC,
  radius_miles INTEGER DEFAULT 25
)
RETURNS SETOF public.glp1_listings AS $$
BEGIN
  RETURN QUERY
  SELECT l.*
  FROM public.glp1_listings l
  WHERE l.is_active = true AND l.is_approved = true
    AND l.latitude IS NOT NULL AND l.longitude IS NOT NULL
    AND (
      3959 * acos(LEAST(1.0,
        cos(radians(search_lat)) * cos(radians(l.latitude)) *
        cos(radians(l.longitude) - radians(search_lng)) +
        sin(radians(search_lat)) * sin(radians(l.latitude))
      ))
    ) <= radius_miles
  ORDER BY (
    3959 * acos(LEAST(1.0,
      cos(radians(search_lat)) * cos(radians(l.latitude)) *
      cos(radians(l.longitude) - radians(search_lng)) +
      sin(radians(search_lat)) * sin(radians(l.latitude))
    ))
  ) ASC;
END;
$$ LANGUAGE plpgsql;

-- RLS
ALTER TABLE public.glp1_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.glp1_claims ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.glp1_payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.glp1_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read glp1_listings" ON public.glp1_listings
  FOR SELECT USING (is_active = true AND is_approved = true);
CREATE POLICY "Service role full access glp1_listings" ON public.glp1_listings
  FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "Service role full access glp1_claims" ON public.glp1_claims
  FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "Service role full access glp1_payments" ON public.glp1_payments
  FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "Service role full access glp1_leads" ON public.glp1_leads
  FOR ALL TO service_role USING (true) WITH CHECK (true);

GRANT ALL ON public.glp1_listings TO service_role, anon, authenticated;
GRANT ALL ON public.glp1_claims TO service_role;
GRANT ALL ON public.glp1_payments TO service_role;
GRANT ALL ON public.glp1_leads TO service_role;
GRANT EXECUTE ON FUNCTION public.find_glp1_near TO anon, authenticated, service_role;
