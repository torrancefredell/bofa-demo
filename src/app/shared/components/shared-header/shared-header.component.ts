import { Component, Input } from '@angular/core';


@Component({
    selector: 'shared-header',
    templateUrl: './shared-header.component.html',
    styleUrls: ['./shared-header.component.scss'],
    standalone: true,
    imports: []
})
export class SharedHeaderComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
}