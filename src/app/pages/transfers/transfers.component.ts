import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Account } from '../../models';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-transfers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit {
  accounts: Account[] = [];
  loading = true;
  submitted = false;

  fromAccount = '';
  toAccount = '';
  amount: number | null = null;
  memo = '';

  constructor(private accountService: AccountService) {}

  ngOnInit() {
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

  get isValid(): boolean {
    return (
      !!this.fromAccount &&
      !!this.toAccount &&
      this.fromAccount !== this.toAccount &&
      this.amount !== null &&
      this.amount > 0
    );
  }

  submitTransfer() {
    if (!this.isValid) {
      return;
    }
    this.submitted = true;
  }

  resetForm() {
    this.submitted = false;
    this.fromAccount = '';
    this.toAccount = '';
    this.amount = null;
    this.memo = '';
  }
}
