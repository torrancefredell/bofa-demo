---
name: testing-bofa-demo
description: Run and validate the bofa-demo Angular banking app end-to-end (build, headless Karma tests, GUI click-through, BofA integration console logs). Use when verifying framework upgrades or UI/component changes.
---

# Testing the bofa-demo app

## Setup
- `npm install` (Node 18.19+ required for Angular 18; Node 20/22 both work).
- No credentials needed — all data comes from `MockBackendService` (no real backend).

## Build & unit tests
- Build: `npm run build` (must complete with no errors).
- Karma defaults to watch mode + non-headless Chrome. Always run:
  `CHROME_BIN=$(ls /opt/.devin/chrome/chrome/*/chrome-linux64/chrome | head -1) npm test -- --watch=false --browsers=ChromeHeadless`
  (fall back to any installed Chrome/Chromium for CHROME_BIN).
- All 5 specs should pass on modernized code. Historically `main` (Angular 14) had a stale "AppComponent should render title" boilerplate assertion failing — if you see 4/5 on an old branch, that may be pre-existing, not a regression.

## GUI validation (ng serve)
- `npx ng serve --port 4200`, open http://localhost:4200 (redirects to /dashboard).
- Golden path: Dashboard (balances, recent activity) → Accounts (3 account cards: checking/savings/credit) → Transfers (select from/to, enter amount → "Transfer scheduled" confirmation).
- Record the click-through and annotate assertions.

## Integration console logs
- With DevTools console open on /dashboard, expect: `BofA Analytics SDK initialized (v2.4.1)`, `BofA Page View: dashboard`, `BofA Analytics Event: dashboard_loaded {...}` — and zero console errors.
- Caveat: `FinancialDataService`'s "BofA Financial Data Services initialized" log might not appear because the service may not be injected anywhere; `AuthService` logs nothing by design (its user data shows inside the `dashboard_loaded` event). Verify against the baseline before calling a missing log a regression.

## Migration-specific tips
- Angular major upgrades must go stepwise via `ng update @angular/core@N @angular/cli@N` (cannot skip majors); build after each step.
- The shared library in `src/app/shared/` is consumed by downstream teams — keep selectors/inputs/outputs unchanged.

## Devin Secrets Needed
- None (fully local mock app).
