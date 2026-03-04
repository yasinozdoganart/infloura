# Production Launch Checklist

## Critical Pre-Launch Tasks

### Database Setup
- [ ] Supabase project created
- [ ] All migrations executed in correct order
- [ ] RLS policies enabled on all tables
- [ ] Service role key stored securely
- [ ] Database backup strategy configured

### API Keys Configuration
- [ ] Gemini API key obtained and tested
- [ ] Stripe account verified
- [ ] Stripe products created (Pro Monthly, Pro Annual)
- [ ] Stripe webhook configured and tested
- [ ] All environment variables set in Vercel

### Security Review
- [ ] `.env` file NOT committed to git
- [ ] Service role key only used server-side
- [ ] Stripe webhook signature verified
- [ ] CORS properly configured
- [ ] Rate limiting considered for API routes

### Functionality Testing
- [ ] User registration flow works
- [ ] Email/password login works
- [ ] Password reset flow works (if implemented)
- [ ] Free tier simulation works (3-month limit)
- [ ] Pro tier simulation works (12-month limit)
- [ ] AI Roadmap generation works for Pro users
- [ ] AI Roadmap blocked for free users
- [ ] Stripe checkout flow works
- [ ] Webhook updates user plan correctly
- [ ] Plan badges display correctly

### Performance Optimization
- [ ] Build completes without errors
- [ ] No console errors in production
- [ ] Images optimized
- [ ] Fonts loaded correctly
- [ ] Page load times acceptable
- [ ] Mobile responsive design verified

### Content Review
- [ ] Landing page copy reviewed
- [ ] Pricing information accurate
- [ ] Terms of service added (if required)
- [ ] Privacy policy added (if required)
- [ ] Contact information updated

### Monitoring Setup
- [ ] Vercel Analytics enabled
- [ ] Error tracking configured
- [ ] Supabase dashboard monitored
- [ ] Stripe dashboard monitored
- [ ] Google AI quota monitored

## Environment Variables Verification

Ensure ALL these are set in Vercel:

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
GEMINI_API_KEY
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID
NEXT_PUBLIC_STRIPE_PRO_ANNUAL_PRICE_ID
NEXT_PUBLIC_SITE_URL
```

## Post-Launch Monitoring

First 24 hours:
- [ ] Monitor error logs every 2 hours
- [ ] Check webhook delivery status
- [ ] Monitor signup conversion
- [ ] Track simulation usage
- [ ] Monitor AI API quota

First week:
- [ ] Review user feedback
- [ ] Check database performance
- [ ] Monitor payment success rate
- [ ] Review support tickets
- [ ] Track feature adoption

## Rollback Plan

If critical issues occur:
1. Revert to previous Vercel deployment
2. Check environment variables
3. Verify database migrations
4. Review error logs
5. Contact support if needed

## Support Contacts

- Supabase Support: support.supabase.com
- Stripe Support: support.stripe.com
- Vercel Support: vercel.com/support
- Google AI Support: ai.google.dev/support

## Success Metrics

Track these KPIs:
- User registration rate
- Free to Pro conversion rate
- Simulation completion rate
- AI Roadmap generation success rate
- Payment success rate
- User retention (7-day, 30-day)

## Known Limitations

Document any known issues:
- Free users limited to 3-month projections
- AI Roadmap requires Pro subscription
- Stripe webhook may have delays
- Database RLS policies enforce strict access

## Emergency Contacts

Add team contacts here:
- Technical Lead: [email]
- DevOps: [email]
- Support: [email]
