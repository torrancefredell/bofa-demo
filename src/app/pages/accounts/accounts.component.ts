import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Account } from '../../models';
import { AccountService } from '../../services/account.service';

import { SharedHeaderComponent } from '../../shared/components/shared-header/shared-header.component';
import { AccountCardComponent } from '../../components/account-card/account-card.component';

@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.scss'],
    standalone: true,
    imports: [SharedHeaderComponent, AccountCardComponent]
})
export class AccountsComponent implements OnInit {
  private accountService = inject(AccountService);
  private destroyRef = inject(DestroyRef);

  accounts: Account[] = [];
  loading = true;

  ngOnInit() {
    this.loadAccounts();
  }

  loadAccounts() {
    this.accountService.getAccounts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (accounts) => {
          this.accounts = accounts;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading accounts:', error);
          this.loading = false;
        }
      });
  }
}
