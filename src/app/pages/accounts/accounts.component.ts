import { Component, OnInit } from '@angular/core';
import { Account } from '../../models';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  accounts: Account[] = [];
  loading = true;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.loadAccounts();
  }

  loadAccounts() {
    this.accountService.getAccounts().subscribe(
      (accounts) => {
        this.accounts = accounts;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading accounts:', error);
        this.loading = false;
      }
    );
  }
}