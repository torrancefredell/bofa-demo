# BofA Devin Pitch - Demo Plan

## Meeting Overview
45-minute introductory meeting with Bank of America executives:
- VP of Engineering, Digital Banking
- Security Engineer, Consumer Applications  
- Chief Architect

## Use Case: Angular 14→18 Upgrade

**Why this use case:**
- Direct impact on all three executives' concerns
- Customer-facing application serving millions of users
- Hard compliance deadline (Angular 14 EOL)
- Complex BofA-specific integrations to maintain

## 45-Minute Meeting Structure

### 1. Introduction (5 minutes)
- Thank executives for their time
- Acknowledge BofA's engineering leadership
- Introduce the Angular upgrade use case
- Set expectations for the meeting

### 2. Executive Discovery (10 minutes)
**Questions by role:**

**VP Engineering, Digital Banking:**
- Timeline concerns for the upgrade?
- Impact on team capacity for feature delivery?
- What does success look like?

**Security Engineer, Consumer Applications:**
- Security policy requirements around framework support?
- How to validate no security regressions?
- Angular 14 EOL timeline?

**Chief Architect:**
- Architectural concerns about the upgrade?
- Shared component library dependencies?
- Standards and patterns to maintain?

### 3. Devin Demo (15 minutes)

**Setup (2 minutes):**
- Show repository structure
- Explain it mirrors BofA's architecture:
  - Shared component library (`src/app/shared/`)
  - BofA integration modules (auth, analytics, financial data)
  - Custom design system with BofA branding
- **Explain downstream teams context:**
  - "In reality, BofA has 12+ teams consuming this shared component library:
    - Digital Banking Team (this demo)
    - Mobile Banking Team
    - Small Business Banking Team
    - Wealth Management Team
    - Credit Cards Team
    - Mortgage Team
    - And 6+ other teams
  - The shared library team's upgrade must not break any of these downstream teams' applications
  - In this demo, our `src/app/shared/` represents the shared component library, and the pages represent one downstream team's app consuming it"
- Highlight the 5 legacy patterns to fix

**Fix 5 Patterns (12 minutes, ~2 minutes each):**

1. **Pattern 1: Deprecated HttpParams** (`account.service.ts`)
   - Old: `new HttpParams().set('accountId', accountId)`
   - New: `new HttpParams({ fromObject: { accountId } })`
   - Value: API evolution, systematic updates

2. **Pattern 2: Non-standalone Component** (`account-card.component.ts`)
   - Add `standalone: true` and proper imports
   - Value: Angular 18 feature adoption

3. **Pattern 3: Deprecated TestBed** (`account.service.spec.ts`)
   - Update TestBed configuration
   - Value: Testing framework updates

4. **Pattern 4: Any Types** (`account.model.ts`)
   - Replace `any` with proper TypeScript types
   - Value: Type safety for financial applications

5. **Pattern 5: Deprecated Template Syntax** (`accounts.component.html`)
   - Replace `*ngFor` with new `@for` syntax
   - Value: Modern Angular 18 control flow

**Validation (1 minute):**
- Run the application to show it still works
- Demonstrate BofA branding and integrations work
- Show analytics console logs proving BofA SDK integration
- Show the automated pattern scan output: zero remaining occurrences of all 5 legacy patterns
- Show the inline PR comments on the modernization PR pointing at each pattern fix
- Play the recorded GUI click-through (Devin navigating Dashboard/Accounts in its own browser) as visual proof

### 4. Discussion & Next Steps (15 minutes)

**Executive-specific benefits:**

**VP Engineering, Digital Banking:**
- "Devin handles 60-70% of upgrade work"
- "Your team can focus on feature delivery"
- "Systematic approach reduces human error"

**Security Engineer, Consumer Applications:**
- "Devin helps meet Angular 14 EOL deadline"
- "All actions logged for compliance"
- "Security checks can be integrated"

**Chief Architect:**
- "Devin maintains architectural standards and ensures shared library upgrades don't break downstream teams"
- "With 12+ teams consuming the shared library, a manual upgrade would require coordination across all teams"
- "Devin's systematic approach tests the upgrade at the library level, ensuring all downstream teams can consume the upgraded library without manual intervention"
- "Creates documentation for future upgrades"

**Next steps proposal:**
1. Pilot engagement (2-4 weeks)
2. Success criteria definition
3. Security review
4. Phased rollout planning

## Executive Messaging

### VP of Engineering, Digital Banking
**Primary concerns:** Timeline, resource allocation, feature delivery impact
**Key message:** "Devin gives time back to your developers by handling framework maintenance"

### Security Engineer, Consumer Applications  
**Primary concerns:** Compliance, security regressions, audit trail
**Key message:** "Devin ensures security compliance while meeting the Angular 14 EOL deadline"

### Chief Architect
**Primary concerns:** Architecture integrity, downstream impact, standards
**Key message:** "Devin maintains architectural standards and ensures shared library upgrades don't break downstream teams. With 12+ teams consuming the shared library, Devin's systematic approach ensures all downstream teams can consume the upgraded library without manual intervention."

## Demo Practice Tips

### Timing
- Practice each fix to hit ~2 minutes
- Total demo should be under 15 minutes
- Have backup scenarios if something goes wrong

### Explanations
- Focus on business value, not technical details
- Connect each fix to BofA's specific concerns
- Show understanding of BofA's architecture

### Recovery
- Use git branches for practice
- `git checkout main` to reset to clean state
- Practice multiple times before the meeting

## Success Criteria

### Meeting success
- All executives participate in discussion
- They understand how Devin addresses their concerns
- They express interest in next steps
- Clear path forward established

### Demo success
- Demo clearly addresses Angular upgrade challenge
- Devin successfully completes all 5 fixes
- Executives see clear value in using Devin
- App continues to work after upgrades

## Post-Meeting Follow-up

1. Send meeting notes with action items (24-48 hours)
2. Share any promised materials
3. Confirm next steps and timeline
4. Schedule technical deep-dive if needed

## Key Reminders

- Focus on their problems, not Devin's features
- Listen more than you talk
- Be honest about limitations
- Build rapport, don't just sell
- Adapt to their engagement level
- Ensure clear next steps are established