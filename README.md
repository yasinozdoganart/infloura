# Infloura

Infloura is a SaaS application for digital creators to map out and simulate their revenue models, manage growth goals, and receive AI-guided roadmaps for monetization.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Database:** Supabase (PostgreSQL + Auth)
- **AI:** Google Gemini API
- **Payments:** Stripe
- **Styling:** Tailwind CSS + Shadcn/ui
- **Charts:** Recharts

## Getting Started

### Prerequisites
- Node.js 18+
- Supabase Account
- Stripe Account
- Google AI (Gemini) API Key

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url> infloura
   cd infloura
   npm install
   ```

2. **Environment Variables**
   Create a `.env.local` file with the following variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
   SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

   STRIPE_SECRET_KEY="your-stripe-secret"
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your-stripe-publishable"
   STRIPE_WEBHOOK_SECRET="your-stripe-webhook-secret"

   GEMINI_API_KEY="your-gemini-key"
   ```

3. **Database Setup**
   Run the migration block located at `supabase/migrations/001_initial_schema.sql` inside your Supabase project's SQL editor.

4. **Start Development**
   ```bash
   npm run dev
   ```

## Deployment
This project is configured for Vercel out of the box. Use the included `vercel.json` file. Set up all environment variables over at your Vercel project dashboard.

<-na Global Build Sync: Wed Mar  4 21:05:32 +03 2026 -->
