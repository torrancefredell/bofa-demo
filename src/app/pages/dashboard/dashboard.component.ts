import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DashboardData, Transaction } from '../../models';
import { DashboardService } from '../../services/dashboard.service';
import { AccountService } from '../../services/account.service';
import { BofaAnalyticsSDK } from '../../modules/analytics/analytics.service';
import { AuthService } from '../../modules/auth/auth.service';
import { BalanceDisplayComponent } from '../../components/balance-display/balance-display.component';
import { TransactionRowComponent } from '../../components/transaction-row/transaction-row.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, BalanceDisplayComponent, TransactionRowComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardData!: DashboardData;
  transactions: Transaction[] = [];
  loading = true;
  today = new Date();

  constructor(
    private dashboardService: DashboardService,
    private accountService: AccountService,
    private analytics: BofaAnalyticsSDK,
    private auth: AuthService
  ) {}

  ngOnInit() {
    // Track page view with BofA analytics
    this.analytics.trackPageView('dashboard');
    
    // Validate SSO session
    this.auth.validateSSOSession().subscribe(isValid => {
      if (isValid) {
        this.loadDashboard();
        this.loadRecentActivity();
      }
    });
  }

  loadDashboard() {
    this.dashboardService.getDashboardData().subscribe(
      (data) => {
        this.dashboardData = data;
        this.loading = false;
        
        // Track dashboard load event
        this.analytics.trackEvent('dashboard_loaded', {
          totalBalance: data.totalBalance,
          user: this.auth.getCurrentUser()
        });
      },
      (error) => {
        console.error('Error loading dashboard:', error);
        this.analytics.trackError(error);
        this.loading = false;
      }
    );
  }

  loadRecentActivity() {
    this.accountService.getAccountTransactions('****1234').subscribe(
      (transactions) => {
        this.transactions = transactions;
      },
      (error) => {
        console.error('Error loading transactions:', error);
      }
    );
  }
}
