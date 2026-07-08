import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { BofaAuthModule } from './app/modules/auth/auth.module';
import { BofaAnalyticsModule } from './app/modules/analytics/analytics.module';
import { BofaFinancialDataModule } from './app/modules/financial-data/financial-data.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BofaAuthModule, BofaAnalyticsModule, BofaFinancialDataModule)
  ]
}).catch(err => console.error(err));
