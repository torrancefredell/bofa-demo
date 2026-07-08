import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DashboardData, Transaction } from '../../models';
import { DashboardService } from '../../services/dashboard.service';
import { AccountService } from '../../services/account.service';
import { BofaAnalyticsSDK } from '../../modules/analytics/analytics.service';
import { AuthService } from '../../modules/auth/auth.service';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BalanceDisplayComponent } from '../../components/balance-display/balance-display.component';
import { TransactionRowComponent } from '../../components/transaction-row/transaction-row.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [RouterLink, BalanceDisplayComponent, TransactionRowComponent, DatePipe]
})
export class DashboardComponent implements OnInit {
  private dashboardService = inject(DashboardService);
  private accountService = inject(AccountService);
  private analytics = inject(BofaAnalyticsSDK);
  private auth = inject(AuthService);
  private destroyRef = inject(DestroyRef);

  dashboardData!: DashboardData;
  transactions: Transaction[] = [];
  loading = true;
  today = new Date();

  ngOnInit() {
    // Track page view with BofA analytics
    this.analytics.trackPageView('dashboard');

    // Validate SSO session
    this.auth.validateSSOSession()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(isValid => {
        if (isValid) {
          this.loadDashboard();
          this.loadRecentActivity();
        }
      });
  }

  loadDashboard() {
    this.dashboardService.getDashboardData()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.dashboardData = data;
          this.loading = false;

          // Track dashboard load event
          this.analytics.trackEvent('dashboard_loaded', {
            totalBalance: data.totalBalance,
            user: this.auth.getCurrentUser()
          });
        },
        error: (error) => {
          console.error('Error loading dashboard:', error);
          this.analytics.trackError(error);
          this.loading = false;
        }
      });
  }

  loadRecentActivity() {
    this.accountService.getAccountTransactions('****1234')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (transactions) => {
          this.transactions = transactions;
        },
        error: (error) => {
          console.error('Error loading transactions:', error);
        }
      });
  }
}
