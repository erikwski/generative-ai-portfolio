import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-wrapper',
  template: `
    <section class="w-full py-20 px-6 md:px-12 lg:px-24" [class]="extraClass()">
      <ng-content />
    </section>
  `,
})
export class SectionWrapper {
  extraClass = input<string>('');
}
