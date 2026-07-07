import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TransfersComponent } from './pages/transfers/transfers.component';
import { AccountCardComponent } from './components/account-card/account-card.component';
import { BalanceDisplayComponent } from './components/balance-display/balance-display.component';
import { TransactionRowComponent } from './components/transaction-row/transaction-row.component';
import { SharedHeaderComponent } from './shared/components/shared-header/shared-header.component';

// BofA-specific integration modules
import { BofaAuthModule } from './modules/auth/auth.module';
import { BofaAnalyticsModule } from './modules/analytics/analytics.module';
import { BofaFinancialDataModule } from './modules/financial-data/financial-data.module';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    DashboardComponent,
    TransfersComponent,
    AccountCardComponent,
    BalanceDisplayComponent,
    TransactionRowComponent,
    SharedHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BofaAuthModule,
    BofaAnalyticsModule,
    BofaFinancialDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
