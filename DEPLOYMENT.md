# Infloura - Production Deployment Guide

## Pre-Deployment Checklist

### 1. Supabase Setup

1. Create a Supabase project at https://supabase.com
2. Run all migrations in `supabase/migrations/` folder in order:
   - 001_initial_schema.sql
   - 003_stripe_columns.sql
3. Copy your Supabase credentials:
   - Project URL
   - Anon (public) key
   - Service role key (keep this secret!)

### 2. Google AI (Gemini) Setup

1. Go to https://aistudio.google.com/apikey
2. Create a new API key
3. Copy the API key for environment variables

### 3. Stripe Setup

1. Create a Stripe account at https://stripe.com
2. Get your API keys from https://dashboard.stripe.com/apikeys
3. Create two products in Stripe Dashboard:
   - Pro Monthly ($9.90/month)
   - Pro Annual ($99.90/year)
4. Copy the Price IDs for each product
5. Set up a webhook endpoint:
   - URL: `https://your-domain.com/api/webhooks/stripe`
   - Events to listen: `checkout.session.completed`, `invoice.payment_succeeded`
   - Copy the webhook signing secret

### 4. Environment Variables

Copy `.env.example` to `.env` and fill in all values:

```bash
cp .env.example .env
```

Required variables:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- GEMINI_API_KEY
- STRIPE_SECRET_KEY
- STRIPE_WEBHOOK_SECRET
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID
- NEXT_PUBLIC_STRIPE_PRO_ANNUAL_PRICE_ID
- NEXT_PUBLIC_SITE_URL

## Deployment to Vercel

1. Push your code to GitHub

2. Import project in Vercel:
   - Go to https://vercel.com/new
   - Import your repository
   - Framework: Next.js (auto-detected)

3. Configure Environment Variables:
   - Add all variables from your `.env` file
   - Set `NEXT_PUBLIC_SITE_URL` to your production domain

4. Deploy:
   - Click "Deploy"
   - Wait for build to complete

5. Configure Stripe Webhook:
   - Update Stripe webhook URL to your Vercel domain
   - Test the webhook using Stripe CLI or dashboard

## Post-Deployment

1. Test the following flows:
   - User registration
   - Login
   - Run a simulation
   - Generate AI roadmap (Pro users only)
   - Subscription upgrade
   - Webhook handling

2. Set up monitoring:
   - Vercel Analytics (automatic)
   - Supabase Dashboard for database monitoring
   - Stripe Dashboard for payment monitoring

## Troubleshooting

### Build fails
- Check all environment variables are set
- Ensure Supabase database is accessible
- Verify Stripe API keys are valid

### Webhooks not working
- Check webhook signing secret is correct
- Verify webhook URL is accessible
- Check Stripe dashboard for webhook delivery logs

### AI Roadmap not generating
- Verify GEMINI_API_KEY is valid
- Check API quota in Google AI Studio
- Ensure user has Pro subscription

## Security Notes

- Never commit `.env` file to git
- Use service role key only in server-side code
- Rotate API keys regularly
- Enable RLS policies in Supabase
- Use webhook signing secrets for Stripe

## Support

For issues, check:
1. Vercel deployment logs
2. Supabase logs
3. Stripe webhook logs
4. Browser console errors
