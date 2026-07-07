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

## Legacy Pattern Details

The original Angular 14 codebase contains these 5 legacy patterns that need to be upgraded:

### Pattern 1: Deprecated HttpParams Usage
**File**: `src/app/services/account.service.ts`
**Line**: 18-20
**Issue**: Using deprecated `HttpParams().set()` pattern
**Current Code**:
```typescript
const params = new HttpParams().set('accountNumber', accountNumber);
```

### Pattern 2: Non-Standalone Components
**Files**: All component files (account-card, balance-display, transaction-row, etc.)
**Issue**: Components don't use Angular 18's standalone pattern
**Current Code**:
```typescript
@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
```

### Pattern 3: Deprecated TestBed Configuration
**Files**: `src/app/services/account.service.spec.ts`, `src/app/components/account-card/account-card.component.spec.ts`
**Issue**: Using old TestBed configuration pattern
**Current Code**:
```typescript
beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [AccountService, MockBackendService]
  });
});
```

### Pattern 4: Any Type Usage
**File**: `src/app/models/account.model.ts`
**Lines**: 4-6
**Issue**: Using `any` types instead of proper TypeScript types
**Current Code**:
```typescript
export interface Account {
  accountNumber: string;
  accountType: any;  // Should be specific type
  balance: any;      // Should be number
  availableBalance: any;  // Should be number
}
```

### Pattern 5: Deprecated Template Syntax
**File**: `src/app/pages/accounts/accounts.component.html`
**Line**: 17
**Issue**: Using deprecated `*ngFor` syntax
**Current Code**:
```html
<div *ngFor="let account of accounts; let i = index">
  <app-account-card [account]="account"></app-account-card>
</div>
```

## Demo Process

1. **Initial State**: Run DeepWiki on the codebase to identify these 5 legacy patterns
2. **Ask Devin**: "Devin, fix the 5 Angular 14→18 legacy patterns identified in the codebase"
3. **Validation**: Run `ng build` and `ng serve` to verify the app still works
4. **Console Check**: Verify BofA integration logs still appear

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