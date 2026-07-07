import { Component, OnInit } from '@angular/core';
import { DashboardData, Transaction } from '../../models';
import { DashboardService } from '../../services/dashboard.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-dashboard',
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
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.loadDashboard();
    this.loadRecentActivity();
  }

  loadDashboard() {
    this.dashboardService.getDashboardData().subscribe(
      (data) => {
        this.dashboardData = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading dashboard:', error);
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
