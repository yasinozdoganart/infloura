-- This file is for updating the DB to allow Service Role to bypass RLS 
-- or ensuring Service Role has full access. By default in Supabase, 
-- service_role ALWAYS bypasses RLS, so webhook updates should just work.
-- But just in case, we also explicitly ensure profiles has the correct columns.

-- Check if these columns exist, if not add them:
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT,
ADD COLUMN IF NOT EXISTS stripe_subscription_id TEXT,
ADD COLUMN IF NOT EXISTS stripe_price_id TEXT,
ADD COLUMN IF NOT EXISTS stripe_current_period_end TIMESTAMPTZ;

-- Let's also ensure the 'plan_type' constraint isn't blocking us.
-- Our new webhook sends 'pro_monthly' and 'pro_annual'.
ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_plan_type_check;
ALTER TABLE profiles ADD CONSTRAINT profiles_plan_type_check CHECK (plan_type IN ('free', 'pro_monthly', 'pro_annual'));
