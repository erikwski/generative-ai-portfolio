import { Component, inject, computed } from '@angular/core';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

@Component({
  selector: 'app-widget-languages-and-location',
  imports: [],
  templateUrl: './languages-and-location.component.html',
  styleUrl: './languages-and-location.component.scss',
})
export class LanguagesAndLocationWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
  }));

  readonly eyebrow = computed(() =>
    resolveWidgetText('languages-and-location', 'eyebrow', this.profile()),
  );
  readonly headline = computed(() =>
    resolveWidgetText('languages-and-location', 'headline', this.profile()),
  );
  readonly remoteStatement = computed(() =>
    resolveWidgetText('languages-and-location', 'remote-statement', this.profile()),
  );
  readonly langItalianLevel = computed(() =>
    resolveWidgetText('languages-and-location', 'lang-italian-level', this.profile()),
  );
  readonly langEnglishLevel = computed(() =>
    resolveWidgetText('languages-and-location', 'lang-english-level', this.profile()),
  );
  readonly langEnglishNote = computed(() =>
    resolveWidgetText('languages-and-location', 'lang-english-note', this.profile()),
  );
  readonly langGermanLevel = computed(() =>
    resolveWidgetText('languages-and-location', 'lang-german-level', this.profile()),
  );
  readonly langGermanNote = computed(() =>
    resolveWidgetText('languages-and-location', 'lang-german-note', this.profile()),
  );
  readonly timezoneValue = computed(() =>
    resolveWidgetText('languages-and-location', 'timezone-value', this.profile()),
  );
}
