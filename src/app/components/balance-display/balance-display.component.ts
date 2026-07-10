import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-balance-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './balance-display.component.html',
  styleUrls: ['./balance-display.component.scss']
})
export class BalanceDisplayComponent {
  @Input() balance!: number;
  @Input() label!: string;
  @Input() sublabel = '';
  @Input() icon: 'wallet' | 'chart' = 'wallet';

  get absBalance(): number {
    return Math.abs(this.balance);
  }

  get isNegative(): boolean {
    return this.balance < 0;
  }
}
