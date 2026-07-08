import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss']
})
export class SharedHeaderComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
}