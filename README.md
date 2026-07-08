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

## Demo Workflow

The demo is run via the Devin playbook **"BofA Demo — Angular 14→18 Migration with Validation"** (macro: `!bofa_demo`).

Start a Devin session with `!bofa_demo` to run the full demo end-to-end. The playbook:

1. Records the baseline (`npm run build` + headless Karma tests)
2. Performs the real Angular 14→18 upgrade stepwise via `ng update` (14→15→16→17→18)
3. Modernizes all known legacy patterns (see below) repo-wide in a single modernization PR
4. Validates the result: build passes, all tests pass, a repo-wide pattern scan returns zero occurrences, app serves on `localhost:4200`, and BofA integration console logs still appear
5. Delivers the work as pull requests (framework upgrade PR + one pattern modernization PR) with validation evidence, including inline PR comments pointing at each pattern fix

## Known Legacy Patterns

The Angular 14 codebase contains these legacy patterns, all eliminated repo-wide by the demo workflow:

1. **Deprecated HttpParams usage** — `new HttpParams().set(...)` chains (`src/app/services/account.service.ts`)
2. **Non-standalone components** — components declared via NgModules instead of `standalone: true`
3. **Deprecated TestBed configuration** — module-style `declarations`/`providers` setup in spec files
4. **`any` type usage** — untyped financial models and services (`src/app/models/account.model.ts`, analytics/auth/financial-data services)
5. **Deprecated template control flow** — `*ngFor`/`*ngIf` instead of Angular 17+ `@for`/`@if` (all templates)
6. **Leftover NgModule scaffolding** — unused `.module.ts` files in `src/app/modules/` after standalone bootstrap
7. **Constructor-based dependency injection** — constructor injection instead of the modern `inject()` function
8. **Untyped template-driven forms** — `[(ngModel)]` on the Transfers page instead of typed reactive forms
9. **Unmanaged subscriptions** — manual `.subscribe()` in components without `takeUntilDestroyed`, the `async` pipe, or signals

## Build Validation

After the fixes, validate the upgrade was successful:

```bash
# Build the application
ng build

# Run the application
ng serve
```

**Success indicators:**
- Build completes without errors
- Application starts on localhost:4200
- Dashboard and Accounts pages load correctly
- Console shows BofA integration logs (analytics, auth, financial data)

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