import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-golden-button',
  template: `
    <button
      [type]="type()"
      (click)="clicked.emit()"
      class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
             bg-[#F5C400] text-[#0A0A0A] font-semibold text-sm
             transition-all duration-200
             hover:bg-[#FFD700] hover:shadow-[0_0_24px_rgba(245,196,0,0.5)]
             active:scale-95 cursor-pointer select-none"
      [class]="extraClass()"
    >
      <ng-content />
    </button>
  `,
})
export class GoldenButton {
  type = input<'button' | 'submit' | 'reset'>('button');
  extraClass = input<string>('');
  clicked = output<void>();
}
