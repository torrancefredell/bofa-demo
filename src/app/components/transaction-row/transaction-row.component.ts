import { Component, Input } from '@angular/core';
import { Transaction } from '../../models';

@Component({
  selector: 'app-transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.scss']
})
export class TransactionRowComponent {
  @Input() transaction!: Transaction;
}