import { Component, inject, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

@Component({
  selector: 'app-widget-cv-download',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './cv-download.component.html',
  styleUrl: './cv-download.component.scss',
})
export class CvDownloadWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
    communicationStyle: this.store.communicationStyle(),
  }));

  readonly headline = computed(() =>
    resolveWidgetText('cv-download', 'headline', this.profile()),
  );

  readonly cta = computed(() =>
    resolveWidgetText('cv-download', 'cta', this.profile()),
  );

  readonly note = computed(() =>
    resolveWidgetText('cv-download', 'note', this.profile()),
  );

  readonly cvUrl = '/cv.pdf';
}
