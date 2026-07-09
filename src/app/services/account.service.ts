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
    const params = new HttpParams({ fromObject: { accountNumber } });
    return this.mockBackend.getTransactions(accountNumber);
  }
}