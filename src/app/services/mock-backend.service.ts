import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Account, Transaction, DashboardData } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MockBackendService {
  constructor() {}

  // Simulate account data fetch - similar to BofA's accounts page
  getAccounts(): Observable<Account[]> {
    const mockAccounts: Account[] = [
      {
        accountNumber: '****1234',
        accountType: 'checking',
        balance: 25000.50,
        availableBalance: 24500.50
      },
      {
        accountNumber: '****5678',
        accountType: 'savings',
        balance: 150000.00,
        availableBalance: 150000.00
      },
      {
        accountNumber: '****9012',
        accountType: 'credit',
        balance: -2500.00,
        availableBalance: 7500.00
      }
    ];
    return of(mockAccounts).pipe(delay(500)); // Simulate network latency
  }

  // Simulate transaction history
  getTransactions(accountNumber: string): Observable<Transaction[]> {
    const mockTransactions: Transaction[] = [
      { id: 1, date: '2026-07-01', amount: -150.00, description: 'Grocery Store', category: 'Food' },
      { id: 2, date: '2026-07-02', amount: 2500.00, description: 'Direct Deposit', category: 'Income' },
      { id: 3, date: '2026-07-03', amount: -45.50, description: 'Gas Station', category: 'Transportation' },
      { id: 4, date: '2026-07-04', amount: -89.99, description: 'Electric Bill', category: 'Utilities' },
      { id: 5, date: '2026-07-05', amount: -250.00, description: 'ATM Withdrawal', category: 'Cash' }
    ];
    return of(mockTransactions).pipe(delay(300));
  }

  // Simulate dashboard data - similar to BofA's dashboard overview
  getDashboardData(): Observable<DashboardData> {
    const mockDashboard: DashboardData = {
      totalBalance: 175000.50,
      monthlySpending: -2835.49,
      pendingTransactions: 2,
      creditScore: 785
    };
    return of(mockDashboard).pipe(delay(400));
  }
}