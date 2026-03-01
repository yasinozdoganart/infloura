-- USERS tablosu (Supabase auth.users'ı genişletir)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  plan_type TEXT DEFAULT 'free' CHECK (plan_type IN ('free', 'pro_monthly', 'pro_annual')),
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  trial_ends_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- PLATFORMS tablosu
CREATE TABLE platforms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  platform_name TEXT NOT NULL CHECK (platform_name IN ('youtube', 'tiktok', 'instagram', 'x')),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- MONTHLY_METRICS tablosu
CREATE TABLE monthly_metrics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  platform_id UUID REFERENCES platforms(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  month DATE NOT NULL,
  followers INTEGER,
  monthly_views INTEGER,
  engagement_rate DECIMAL(5,2),
  rpm DECIMAL(8,2),
  upload_frequency INTEGER,
  niche TEXT,
  country TEXT DEFAULT 'US',
  content_type TEXT,
  actual_revenue DECIMAL(10,2),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- SIMULATIONS tablosu
CREATE TABLE simulations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  platform_name TEXT NOT NULL,
  input_data JSONB NOT NULL,
  conservative_projection JSONB,
  realistic_projection JSONB,
  aggressive_projection JSONB,
  milestones JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- AI_REPORTS tablosu
CREATE TABLE ai_reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  simulation_id UUID REFERENCES simulations(id) ON DELETE SET NULL,
  report_type TEXT CHECK (report_type IN ('roadmap', 'risk_analysis', 'optimization')),
  content JSONB NOT NULL,
  tokens_used INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ROW LEVEL SECURITY
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE platforms ENABLE ROW LEVEL SECURITY;
ALTER TABLE monthly_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE simulations ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_reports ENABLE ROW LEVEL SECURITY;

-- Her tablo için "kullanıcı sadece kendi verisini görebilir" politikası ekle
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view own platforms" ON platforms FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own platforms" ON platforms FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own platforms" ON platforms FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own platforms" ON platforms FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Users can view own metrics" ON monthly_metrics FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own metrics" ON monthly_metrics FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own metrics" ON monthly_metrics FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own metrics" ON monthly_metrics FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Users can view own simulations" ON simulations FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own simulations" ON simulations FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own simulations" ON simulations FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Users can view own ai_reports" ON ai_reports FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own ai_reports" ON ai_reports FOR INSERT WITH CHECK (auth.uid() = user_id);

-- TRIGGERS: updated_at otomatik güncellensin
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON profiles
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
