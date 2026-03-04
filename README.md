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
   Copy `.env.example` to `.env` and fill in your values:
   ```bash
   cp .env.example .env
   ```

   See `.env.example` for all required variables.

3. **Database Setup**
   Run all migrations in order inside your Supabase project's SQL editor:
   - `supabase/migrations/001_initial_schema.sql`
   - `supabase/migrations/003_stripe_columns.sql`

4. **Start Development**
   ```bash
   npm run dev
   ```

## Deployment

### Quick Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel: https://vercel.com/new
3. Add all environment variables (see `.env.example`)
4. Deploy

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

### Pre-Deployment Checklist

Before deploying to production, review [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md)

### Required Environment Variables

All environment variables must be set in Vercel. See `.env.example` for the complete list.

Critical variables:
- Supabase credentials (URL, Anon Key, Service Role Key)
- Gemini API key
- Stripe API keys and webhook secret
- Stripe Price IDs for Pro Monthly and Pro Annual plans
- Site URL

## Production Readiness

The application is production-ready with:
- Build succeeds without errors
- All API routes properly configured
- Database migrations ready to run
- Stripe webhook handler implemented
- Error handling in place
- Environment variable validation
- RLS policies for data security

## Features

### Core Features
- Revenue simulation with mathematical precision
- Multi-platform support (YouTube, TikTok, Instagram, X)
- Growth tracking and analytics
- AI-powered monetization roadmaps (Pro only)

### Subscription Tiers
- **Free**: 3-month simulations, basic tracking
- **Pro Monthly** ($9.90/mo): 12-month simulations, unlimited AI roadmaps
- **Pro Annual** ($99.90/yr): Same as monthly with 15% savings

## Support

For deployment issues, check:
1. Vercel deployment logs
2. Supabase database logs
3. Stripe webhook logs
4. Browser console errors

## License

Proprietary - All rights reserved
