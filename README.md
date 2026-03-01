# CreatorOS

CreatorOS is a SaaS application for digital creators to map out and simulate their revenue models, manage growth goals, and receive AI-guided roadmaps for monetization.

## Tech Stack
- Next.js 14 / App Router
- Tailwind CSS & Shadcn/ui
- Supabase (Auth, DB Serverless capabilities)
- Stripe (Billing)
- Google Gemini API (AI Roadmaps)
- Recharts (Data Visualization)

## Prerequisites
- Node.js >= 18.x
- Supabase Account
- Stripe Account
- Google Gemini API Key

## Setup Instructions

1. **Clone & Install**
   ```bash
   git clone <repo-url> creatoros
   cd creatoros
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
