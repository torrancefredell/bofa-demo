# BofA Digital Banking Demo Repository

This is a demo repository for a Bank of America-style digital banking application built with Angular 14. It's designed to demonstrate Devin's capabilities in handling framework upgrades by migrating from Angular 14 to Angular 18.

## Overview

This repository mimics Bank of America's digital banking application structure with:
- **Dashboard Page**: Overview with total balance, monthly spending, pending transactions, and credit score
- **Accounts Page**: Account cards showing checking, savings, and credit accounts
- **Transfers Page**: Basic transfer functionality placeholder

## Setup Instructions

### Prerequisites
- Node.js 18.x (use nvm: `nvm install`)
- Angular CLI 14 (`npm install -g @angular/cli@14`)

### Installation
```bash
# Install Node.js version
nvm install

# Install dependencies
npm install

# Run the application
ng serve
```

The application will be available at `http://localhost:4200`

## Demo Purpose

This repository contains **5 intentional legacy patterns** that demonstrate common Angular 14→18 upgrade challenges:

1. **Pattern 1**: Deprecated HttpParams usage in `src/app/services/account.service.ts`
2. **Pattern 2**: Non-standalone components (all components)
3. **Pattern 3**: Deprecated TestBed configuration in test files
4. **Pattern 4**: Any types in `src/app/models/account.model.ts`
5. **Pattern 5**: Deprecated *ngFor syntax in `src/app/pages/accounts/accounts.component.html`

## Demo Practice System

The repository uses git checkpoints to allow easy practice and reset:

### Initial State
```bash
git reset --hard HEAD  # Reset to initial state with all 5 patterns
```

### Practice Session
```bash
# Create practice branch
git checkout -b practice

# Practice the demo (make changes, test, etc.)

# Reset to clean state
git checkout main
git branch -D practice
git checkout -b practice  # Ready for next practice session
```

### Individual Pattern Checkpoints
After fixing each pattern, you can create checkpoints:
```bash
git add .
git commit -m "checkpoint: after pattern 1 fix"
```

## Pattern Details

### Pattern 1: Deprecated HttpParams Usage
**File**: `src/app/services/account.service.ts`
**Issue**: Using deprecated `HttpParams().set()` pattern
**Angular 18 Fix**: Use `new HttpParams({ fromObject: { accountNumber } })`

### Pattern 2: Non-Standalone Components
**Files**: All component files
**Issue**: Components not using standalone: true
**Angular 18 Fix**: Add `standalone: true` and proper imports

### Pattern 3: Deprecated TestBed Configuration
**Files**: Test files
**Issue**: Old TestBed configuration pattern
**Angular 18 Fix**: Update to modern TestBed configuration

### Pattern 4: Any Type Usage
**File**: `src/app/models/account.model.ts`
**Issue**: Using `any` types instead of proper typing
**Angular 18 Fix**: Use proper TypeScript types

### Pattern 5: Deprecated Template Syntax
**File**: `src/app/pages/accounts/accounts.component.html`
**Issue**: Using deprecated `*ngFor` syntax
**Angular 18 Fix**: Use new `@for` control flow syntax

## Mock Backend

The application uses a mock backend service (`src/app/services/mock-backend.service.ts`) that simulates BofA's backend with realistic data:
- Multiple account types (checking, savings, credit)
- Realistic transaction history
- Dashboard overview data

This allows the demo to run without requiring actual backend infrastructure.

## Build and Test

```bash
# Build the application
ng build

# Run tests
ng test

# Run development server
ng serve
```

## Executive Demo Context

This demo is designed for a 45-minute introductory meeting with Bank of America executives:
- **VP of Engineering, Digital Banking**: Shows how Devin gives time back to developers
- **Security Engineer, Consumer Applications**: Demonstrates compliance-driven upgrade capabilities
- **Chief Architect**: Shows systematic approach to framework migration

The demo highlights Devin's ability to:
- Identify and fix legacy patterns systematically
- Handle framework upgrades efficiently
- Maintain application functionality during migration
- Accelerate development timelines

## Documentation

- **DEMO_PLAN.md**: Comprehensive meeting and demo plan
- **IMPLEMENTATION_PLAN.md**: Technical implementation details
- **USE_CASE_RATIONALE.md**: Why Angular upgrade was chosen for the demo

## License

This is a demo repository for interview purposes only.