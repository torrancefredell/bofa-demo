# BofA Digital Banking Demo - Angular 14→18 Upgrade

This is a demo repository for Bank of America's digital banking application built with Angular 14. It demonstrates Devin's capabilities in handling framework upgrades while maintaining complex BofA-specific integrations.

## Setup

```bash
# Install Node.js 18
nvm install

# Install dependencies
npm install

# Run the application
ng serve
```

## Demo Overview

**15-minute demo showing 5 Angular 14→18 legacy patterns:**

1. **Deprecated HttpParams** - `src/app/services/account.service.ts`
2. **Non-standalone components** - All component files
3. **Deprecated TestBed configuration** - Test files
4. **Any type usage** - `src/app/models/account.model.ts`
5. **Deprecated template syntax** - `src/app/pages/accounts/accounts.component.html`

## BofA-Specific Architecture

This demo mirrors BofA's actual architecture:

### Shared Component Library
- **Location**: `src/app/shared/`
- **Purpose**: Represents BofA's internal component library used by 12+ downstream teams
- **Components**: Shared UI components (headers, cards, etc.)

### BofA Integration Modules
- **Authentication**: `src/app/modules/auth/` - Mock SSO/MFA integration
- **Analytics**: `src/app/modules/analytics/` - Mock proprietary analytics SDK
- **Financial Data**: `src/app/modules/financial-data/` - Mock third-party providers (Bloomberg, Equifax, etc.)

### Design System
- **BofA branding**: Professional blue/red color scheme
- **Custom design tokens**: CSS variables for consistent theming
- **Responsive layout**: Mobile-first approach
- **Legal compliance**: Footer with proper disclaimers

## Demo Practice

```bash
# Start practice session
git checkout -b practice

# Practice the demo (make changes, test, etc.)

# Reset to clean state
git checkout main
git branch -D practice
git checkout -b practice  # Ready for next practice session
```

## Meeting Context

**45-minute meeting with BofA executives:**
- VP of Engineering, Digital Banking
- Security Engineer, Consumer Applications
- Chief Architect

**Demo narrative:** Devin accelerates Angular 14→18 migration while maintaining BofA's complex integrations and compliance requirements.

## Documentation

- **DEMO_PLAN.md** - Complete meeting and demo strategy
- **USE_CASE_RATIONALE.md** - Why Angular upgrade was chosen