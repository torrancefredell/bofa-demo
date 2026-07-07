import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Account, Transaction } from '../models';
import { MockBackendService } from './mock-backend.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private mockBackend: MockBackendService) {}

  getAccounts(): Observable<Account[]> {
    return this.mockBackend.getAccounts();
  }

  getAccountTransactions(accountNumber: string): Observable<Transaction[]> {
    // Pattern 1: Deprecated HttpParams usage
    const params = new HttpParams().set('accountNumber', accountNumber);
    // In Angular 18, this would be: new HttpParams({ fromObject: { accountNumber } })
    return this.mockBackend.getTransactions(accountNumber);
  }
}