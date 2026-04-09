import { Component, input, inject, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

@Component({
  selector: 'app-widget-compatibility-engine',
  imports: [MatIconModule],
  templateUrl: './compatibility-engine.component.html',
  styleUrl: './compatibility-engine.component.scss',
})
export class CompatibilityEngineWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
    communicationStyle: this.store.communicationStyle(),
  }));

  matchScore = input<string>('');
  highlights = input<string[]>([]);

  readonly headline = computed(() =>
    resolveWidgetText('compatibility-engine', 'headline', this.profile()),
  );

  readonly subline = computed(() =>
    resolveWidgetText('compatibility-engine', 'subline', this.profile()),
  );

  readonly scoreLabel = computed(() =>
    resolveWidgetText('compatibility-engine', 'scoreLabel', this.profile()),
  );

  readonly matchLabel = computed(() =>
    resolveWidgetText('compatibility-engine', 'matchLabel', this.profile()),
  );

  readonly scoreNumeric = computed(() => {
    const raw = this.matchScore();
    const num = parseInt(raw, 10);
    return isNaN(num) ? 0 : Math.min(100, Math.max(0, num));
  });
}
