import { Component, inject, computed } from '@angular/core';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface ArtistEntry {
  name: string;
  note: string;
}

const ARTIST_KEYS = [
  { nameKey: 'artist-1', noteKey: 'note-1' },
  { nameKey: 'artist-2', noteKey: 'note-2' },
  { nameKey: 'artist-3', noteKey: 'note-3' },
  { nameKey: 'artist-4', noteKey: 'note-4' },
  { nameKey: 'artist-5', noteKey: 'note-5' },
] as const;

@Component({
  selector: 'app-widget-music-taste',
  imports: [],
  templateUrl: './music-taste.component.html',
  styleUrl: './music-taste.component.scss',
})
export class MusicTasteWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
    communicationStyle: this.store.communicationStyle(),
  }));

  readonly headline = computed(() =>
    resolveWidgetText('music-taste', 'headline', this.profile()),
  );

  readonly intro = computed(() =>
    resolveWidgetText('music-taste', 'intro', this.profile()),
  );

  readonly setupNote = computed(() =>
    resolveWidgetText('music-taste', 'setup-note', this.profile()),
  );

  readonly artists = computed<ArtistEntry[]>(() => {
    const p = this.profile();
    return ARTIST_KEYS.map((a) => ({
      name: resolveWidgetText('music-taste', a.nameKey, p),
      note: resolveWidgetText('music-taste', a.noteKey, p),
    }));
  });
}
