import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account } from '../../models';

@Component({
  selector: 'app-account-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent {
  @Input() account!: Account;

  get isCredit(): boolean {
    return this.account.accountType === 'credit';
  }

  get displayName(): string {
    switch (this.account.accountType) {
      case 'checking':
        return 'Advantage Plus Checking';
      case 'savings':
        return 'Advantage Savings';
      case 'credit':
        return 'Customized Cash Rewards';
      default:
        return this.account.accountType;
    }
  }

  get absBalance(): number {
    return Math.abs(this.account.balance);
  }
}
