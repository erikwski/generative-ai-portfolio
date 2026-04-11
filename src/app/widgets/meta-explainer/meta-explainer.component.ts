import { Component, inject, computed } from '@angular/core';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

@Component({
  selector: 'app-widget-meta-explainer',
  imports: [],
  templateUrl: './meta-explainer.component.html',
  styleUrl: './meta-explainer.component.scss',
})
export class MetaExplainerWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
    communicationStyle: this.store.communicationStyle(),
  }));

  readonly headline = computed(() =>
    resolveWidgetText('meta-explainer', 'headline', this.profile()),
  );

  readonly body = computed(() =>
    resolveWidgetText('meta-explainer', 'body', this.profile()),
  );

  readonly techNote = computed(() =>
    resolveWidgetText('meta-explainer', 'tech-note', this.profile()),
  );

  readonly invitation = computed(() =>
    resolveWidgetText('meta-explainer', 'invitation', this.profile()),
  );
}
