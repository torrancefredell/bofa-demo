import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss']
})
export class SharedHeaderComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
}