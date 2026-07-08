import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account } from '../../models';
import { AccountService } from '../../services/account.service';
import { AccountCardComponent } from '../../components/account-card/account-card.component';
import { SharedHeaderComponent } from '../../shared/components/shared-header/shared-header.component';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule, AccountCardComponent, SharedHeaderComponent],
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