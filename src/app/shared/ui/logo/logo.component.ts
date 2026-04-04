import { Component, computed, input } from '@angular/core';

export type LogoVariant = 'dark' | 'white';
export type LogoLayout = 'default' | 'horizontal' | 'mobile';

@Component({
  selector: 'app-logo',
  template: `
    <img [src]="src()" [alt]="alt()" [width]="resolvedWidth()" [height]="resolvedHeight()" />
  `,
  host: { class: 'inline-block' },
})
export class LogoComponent {
  layout = input<LogoLayout>('default');
  width = input<number | null>(null);
  height = input<number | null>(null);

  src = computed(() => `/logo/${this.filename()}`);
  alt = computed(() => 'Erikwski logo');

  private filename = computed(() => {
    const map: Record<LogoLayout, string> = {
      default: 'logo.svg',
      horizontal: 'logo-horizontal.svg',
      mobile: 'logo-mobile.svg',
    };
    return map[this.layout()];
  });

  private defaultSize = computed<{ w: number; h: number }>(() => {
    switch (this.layout()) {
      case 'horizontal':
        return { w: 160, h: 40 };
      case 'mobile':
        return { w: 40, h: 40 };
      default:
        return { w: 120, h: 120 };
    }
  });

  resolvedWidth = computed(() => this.width() ?? this.defaultSize().w);
  resolvedHeight = computed(() => this.height() ?? this.defaultSize().h);
}
