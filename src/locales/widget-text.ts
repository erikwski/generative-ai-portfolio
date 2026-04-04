import type { VisitorProfile } from '../app/shared/domain/visitor-profile';
import { getTranslations } from './index';

/**
 * Resolves a widget text label from the flat translation map using the visitor's
 * profile. Keys follow the pattern:
 *
 *   widgets.<widgetName>.<role>.<style>.<time>.<label>
 *
 * Falls back progressively if a more-specific key is missing:
 *   role + style + time  →  role + style  →  role  →  'default'
 */
export function resolveWidgetText(
  widgetName: string,
  label: string,
  profile: VisitorProfile,
  fallback = '',
): string {
  const role  = profile.role                ?? 'developer';
  const style = profile.communicationStyle  ?? 'formal';
  const time  = profile.timeAvailable       ?? 'elevator';

  const candidates = [
    `widgets.${widgetName}.${role}.${style}.${time}.${label}`,
    `widgets.${widgetName}.${role}.${style}.${label}`,
    `widgets.${widgetName}.${role}.${label}`,
    `widgets.${widgetName}.default.${label}`,
  ];

  const map = getTranslations();
  for (const key of candidates) {
    if (key in map) return map[key];
  }
  return fallback;
}
