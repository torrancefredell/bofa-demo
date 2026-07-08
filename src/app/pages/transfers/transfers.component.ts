import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Account } from '../../models';
import { AccountService } from '../../services/account.service';
import { DecimalPipe, TitleCasePipe } from '@angular/common';

interface TransferForm {
  fromAccount: FormControl<string>;
  toAccount: FormControl<string>;
  amount: FormControl<number | null>;
  memo: FormControl<string>;
}

@Component({
    selector: 'app-transfers',
    templateUrl: './transfers.component.html',
    styleUrls: ['./transfers.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, DecimalPipe, TitleCasePipe]
})
export class TransfersComponent implements OnInit {
  private accountService = inject(AccountService);
  private destroyRef = inject(DestroyRef);

  accounts: Account[] = [];
  loading = true;
  submitted = false;

  transferForm = new FormGroup<TransferForm>({
    fromAccount: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    toAccount: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    amount: new FormControl<number | null>(null, [Validators.required, Validators.min(0.01)]),
    memo: new FormControl('', { nonNullable: true })
  });

  ngOnInit() {
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

  get fromAccount(): string {
    return this.transferForm.controls.fromAccount.value;
  }

  get toAccount(): string {
    return this.transferForm.controls.toAccount.value;
  }

  get amount(): number | null {
    return this.transferForm.controls.amount.value;
  }

  get isValid(): boolean {
    return this.transferForm.valid && this.fromAccount !== this.toAccount;
  }

  submitTransfer() {
    if (!this.isValid) {
      return;
    }
    this.submitted = true;
  }

  resetForm() {
    this.submitted = false;
    this.transferForm.reset();
  }
}
