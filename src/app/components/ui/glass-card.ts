import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glass-card',
  imports: [CommonModule],
  template: `
    <div
      class="glass"
      [class]="extraClass()"
    >
      <ng-content />
    </div>
  `,
})
export class GlassCard {
  extraClass = input<string>('');
}
