#!/bin/bash

echo "================================"
echo "Infloura Production Setup Verification"
echo "================================"
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if .env file exists
echo "1. Checking environment configuration..."
if [ -f .env ]; then
    echo -e "${GREEN}✓${NC} .env file exists"

    # Check for required variables
    required_vars=(
        "NEXT_PUBLIC_SUPABASE_URL"
        "NEXT_PUBLIC_SUPABASE_ANON_KEY"
        "SUPABASE_SERVICE_ROLE_KEY"
        "GEMINI_API_KEY"
        "STRIPE_SECRET_KEY"
        "STRIPE_WEBHOOK_SECRET"
        "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY"
        "NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID"
        "NEXT_PUBLIC_STRIPE_PRO_ANNUAL_PRICE_ID"
    )

    missing_vars=()
    for var in "${required_vars[@]}"; do
        if ! grep -q "^${var}=" .env; then
            missing_vars+=("$var")
        fi
    done

    if [ ${#missing_vars[@]} -eq 0 ]; then
        echo -e "${GREEN}✓${NC} All required environment variables present"
    else
        echo -e "${RED}✗${NC} Missing variables:"
        for var in "${missing_vars[@]}"; do
            echo "  - $var"
        done
    fi
else
    echo -e "${RED}✗${NC} .env file not found"
    echo "  Run: cp .env.example .env"
fi

echo ""

# Check dependencies
echo "2. Checking dependencies..."
if [ -d node_modules ]; then
    echo -e "${GREEN}✓${NC} node_modules exists"
else
    echo -e "${RED}✗${NC} node_modules not found"
    echo "  Run: npm install"
fi

echo ""

# Check build
echo "3. Checking build artifacts..."
if [ -d .next ]; then
    echo -e "${GREEN}✓${NC} .next build directory exists"
else
    echo -e "${YELLOW}!${NC} .next directory not found"
    echo "  Run: npm run build"
fi

echo ""

# Check migration files
echo "4. Checking database migrations..."
if [ -f supabase/migrations/001_initial_schema.sql ]; then
    echo -e "${GREEN}✓${NC} Initial schema migration exists"
else
    echo -e "${RED}✗${NC} Initial schema migration missing"
fi

if [ -f supabase/migrations/003_stripe_columns.sql ]; then
    echo -e "${GREEN}✓${NC} Stripe columns migration exists"
else
    echo -e "${RED}✗${NC} Stripe columns migration missing"
fi

echo ""

# Check documentation
echo "5. Checking documentation..."
docs=(
    "README.md"
    "DEPLOYMENT.md"
    "PRODUCTION_CHECKLIST.md"
    "LAUNCH_SUMMARY.md"
    ".env.example"
)

for doc in "${docs[@]}"; do
    if [ -f "$doc" ]; then
        echo -e "${GREEN}✓${NC} $doc exists"
    else
        echo -e "${RED}✗${NC} $doc missing"
    fi
done

echo ""

# Summary
echo "================================"
echo "Verification Complete"
echo "================================"
echo ""
echo "Next steps:"
echo "1. Review PRODUCTION_CHECKLIST.md"
echo "2. Configure external services (Supabase, Stripe, Google AI)"
echo "3. Update .env with real credentials"
echo "4. Run: npm run build"
echo "5. Deploy to Vercel"
echo ""
