import { Component, inject, computed } from '@angular/core';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface StoryAct {
  title: string;
  body: string;
  current: boolean;
}

@Component({
  selector: 'app-widget-origin-story',
  imports: [],
  templateUrl: './origin-story.component.html',
  styleUrl: './origin-story.component.scss',
})
export class OriginStoryWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
    communicationStyle: this.store.communicationStyle(),
  }));

  readonly headline = computed(() =>
    resolveWidgetText('origin-story', 'headline', this.profile()),
  );

  readonly acts = computed<StoryAct[]>(() => {
    const p = this.profile();
    return [
      {
        title: resolveWidgetText('origin-story', 'act-1-title', p),
        body: resolveWidgetText('origin-story', 'act-1-body', p),
        current: false,
      },
      {
        title: resolveWidgetText('origin-story', 'act-2-title', p),
        body: resolveWidgetText('origin-story', 'act-2-body', p),
        current: false,
      },
      {
        title: resolveWidgetText('origin-story', 'act-3-title', p),
        body: resolveWidgetText('origin-story', 'act-3-body', p),
        current: false,
      },
      {
        title: resolveWidgetText('origin-story', 'act-4-title', p),
        body: resolveWidgetText('origin-story', 'act-4-body', p),
        current: false,
      },
      {
        title: resolveWidgetText('origin-story', 'act-5-title', p),
        body: resolveWidgetText('origin-story', 'act-5-body', p),
        current: true,
      },
    ];
  });
}
