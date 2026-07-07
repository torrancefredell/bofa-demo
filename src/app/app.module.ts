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

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    DashboardComponent,
    TransfersComponent,
    AccountCardComponent,
    BalanceDisplayComponent,
    TransactionRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
