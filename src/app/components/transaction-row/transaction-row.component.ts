import { Component, Input } from '@angular/core';
import { Transaction } from '../../models';
import { DecimalPipe, DatePipe } from '@angular/common';

@Component({
    selector: 'app-transaction-row',
    templateUrl: './transaction-row.component.html',
    styleUrls: ['./transaction-row.component.scss'],
    standalone: true,
    imports: [DecimalPipe, DatePipe]
})
export class TransactionRowComponent {
  @Input() transaction!: Transaction;

  get absAmount(): number {
    return Math.abs(this.transaction.amount);
  }
}
