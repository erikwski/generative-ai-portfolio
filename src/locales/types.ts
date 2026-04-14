export interface OnboardingTranslation {
  eyebrow: string;
  title: string;
  role: {
    'tech-peer': string;
    recruiter: string;
    client: string;
  };
  time: {
    label: string;
    elevator: string;
    'elevator.sub': string;
    coffee: string;
    'coffee.sub': string;
    'deep-dive': string;
    'deep-dive.sub': string;
  };
  submit: string;
  note: string;
}

export interface GuardTranslation {
  onboarded: {
    message: string;
    action: string;
  };
}

export interface CanvasTranslation {
  eyebrow: string;
  headline: string;
  subline: string;
  reset: string;
  chip: {
    build: string;
    stack: string;
    hire: string;
  };
  placeholder: {
    empty: string;
    active: string;
  };
  send: {
    aria: string;
  };
}

export interface WidgetTranslationTree {
  [roleOrDefault: string]: {
    [styleOrLabel: string]:
      | string
      | {
          [timeOrLabel: string]:
            | string
            | { [label: string]: string };
        };
  };
}

export interface AppTranslation {
  onboarding: OnboardingTranslation;
  guard: GuardTranslation;
  canvas: CanvasTranslation;
  widgets?: {
    [widgetName: string]: WidgetTranslationTree;
  };
}

export function flattenTranslations(obj: AppTranslation, prefix = ''): Record<string, string> {
  return Object.entries(obj).reduce<Record<string, string>>((acc, [key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') {
      acc[fullKey] = value;
    } else {
      Object.assign(acc, flattenTranslations(value as AppTranslation, fullKey));
    }
    return acc;
  }, {});
}
