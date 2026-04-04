export interface OnboardingTranslation {
  eyebrow: string;
  title: string;
  role: {
    developer: string;
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
  style: {
    label: string;
    formal: string;
    creative: string;
    technical: string;
  };
  submit: string;
  note: string;
}

export interface AppTranslation {
  onboarding: OnboardingTranslation;
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
