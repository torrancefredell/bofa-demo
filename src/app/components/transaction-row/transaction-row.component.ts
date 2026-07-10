import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../models';

@Component({
  selector: 'app-transaction-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.scss']
})
export class TransactionRowComponent {
  @Input() transaction!: Transaction;

  get absAmount(): number {
    return Math.abs(this.transaction.amount);
  }
}
