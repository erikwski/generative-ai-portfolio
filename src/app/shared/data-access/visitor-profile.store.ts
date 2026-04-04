import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { EMPTY_PROFILE, VisitorProfile } from '../domain/visitor-profile';

const STORAGE_KEY = 'visitor-profile';

function loadFromStorage(): VisitorProfile {
  if (typeof localStorage === 'undefined') return EMPTY_PROFILE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...EMPTY_PROFILE, ...JSON.parse(raw) } : EMPTY_PROFILE;
  } catch {
    return EMPTY_PROFILE;
  }
}

function saveToStorage(profile: VisitorProfile): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

function clearStorage(): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

export const VisitorProfileStore = signalStore(
  { providedIn: 'root' },
  withState<VisitorProfile>(EMPTY_PROFILE),
  withComputed((store) => ({
    isOnboarded: computed(
      () =>
        store.role() !== null &&
        store.timeAvailable() !== null &&
        store.communicationStyle() !== null,
    ),
    systemPromptContext: computed(() => {
      const role = store.role();
      const time = store.timeAvailable();
      const style = store.communicationStyle();
      if (!role) return '';

      const roleLabel: Record<string, string> = {
        developer: 'a peer software developer',
        recruiter: 'a recruiter or talent scout',
        client: 'a potential client or customer',
      };
      const timeLabel: Record<string, string> = {
        elevator: 'only 30 seconds (elevator pitch)',
        coffee: 'about 5 minutes (coffee break)',
        'deep-dive': 'plenty of time for a deep dive (15+ minutes)',
      };
      const styleLabel: Record<string, string> = {
        formal: 'formal and precise',
        creative: 'creative and experimental',
        technical: 'fast and highly technical',
      };

      return [
        `The visitor is ${roleLabel[role]}.`,
        time ? `They have ${timeLabel[time]}.` : '',
        style ? `They prefer communication that is ${styleLabel[style]}.` : '',
      ]
        .filter(Boolean)
        .join(' ');
    }),
  })),
  withMethods((store) => ({
    setProfile(profile: VisitorProfile): void {
      patchState(store, profile);
      saveToStorage(profile);
    },
    reset(): void {
      patchState(store, EMPTY_PROFILE);
      clearStorage();
    },
  })),
  withHooks({
    onInit(store) {
      patchState(store, loadFromStorage());
    },
  }),
);
