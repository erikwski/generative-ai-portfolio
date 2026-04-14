import { Component, inject, computed } from '@angular/core';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { resolveWidgetText } from '../../../locales/widget-text';

export interface BookEntry {
  title: string;
  author: string;
  note: string;
}

const BOOK_KEYS = [
  { titleKey: 'book-1-title', authorKey: 'book-1-author', noteKey: 'book-1-note' },
  { titleKey: 'book-2-title', authorKey: 'book-2-author', noteKey: 'book-2-note' },
  { titleKey: 'book-3-title', authorKey: 'book-3-author', noteKey: 'book-3-note' },
  { titleKey: 'book-4-title', authorKey: 'book-4-author', noteKey: 'book-4-note' },
  { titleKey: 'book-5-title', authorKey: 'book-5-author', noteKey: 'book-5-note' },
  { titleKey: 'book-6-title', authorKey: 'book-6-author', noteKey: 'book-6-note' },
] as const;

@Component({
  selector: 'app-widget-reading-list',
  imports: [],
  templateUrl: './reading-list.component.html',
  styleUrl: './reading-list.component.scss',
})
export class ReadingListWidgetComponent {
  private readonly store = inject(VisitorProfileStore);

  private readonly profile = computed(() => ({
    role: this.store.role(),
    timeAvailable: this.store.timeAvailable(),
  }));

  readonly headline = computed(() => resolveWidgetText('reading-list', 'headline', this.profile()));

  readonly intro = computed(() => resolveWidgetText('reading-list', 'intro', this.profile()));

  readonly anchorQuote = computed(() =>
    resolveWidgetText('reading-list', 'anchor-quote', this.profile()),
  );

  readonly books = computed<BookEntry[]>(() => {
    const p = this.profile();
    return BOOK_KEYS.map((b) => ({
      title: resolveWidgetText('reading-list', b.titleKey, p),
      author: resolveWidgetText('reading-list', b.authorKey, p),
      note: resolveWidgetText('reading-list', b.noteKey, p),
    }));
  });
}
