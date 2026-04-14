import type { VisitorProfile } from '../app/shared/domain/visitor-profile';
import { getTranslations } from './index';

/**
 * Maps each visitor role to its assigned communication style.
 * Style is no longer a user choice — it is derived from the role.
 */
const STYLE_BY_ROLE: Record<string, string> = {
  'tech-peer': 'technical',
  recruiter: 'creative',
  client: 'formal',
};

/**
 * Resolves a widget text label from the flat translation map using the visitor's
 * profile. Keys follow the pattern:
 *
 *   widgets.<widgetName>.<role>.<style>.<time>.<label>
 *
 * Style is auto-derived from role. Falls back progressively if a more-specific
 * key is missing:
 *   role + style + time  →  role + style  →  role + formal + time  →  role + formal  →  role  →  'default'
 */
export function resolveWidgetText(
  widgetName: string,
  label: string,
  profile: VisitorProfile,
  fallback = '',
): string {
  const role = profile.role ?? 'tech-peer';
  const style = STYLE_BY_ROLE[role] ?? 'formal';
  const time = profile.timeAvailable ?? 'elevator';

  const candidates: string[] = [
    `widgets.${widgetName}.${role}.${style}.${time}.${label}`,
    `widgets.${widgetName}.${role}.${style}.${label}`,
  ];

  // If the assigned style isn't formal, also try formal as a fallback (most complete set)
  if (style !== 'formal') {
    candidates.push(
      `widgets.${widgetName}.${role}.formal.${time}.${label}`,
      `widgets.${widgetName}.${role}.formal.${label}`,
    );
  }

  candidates.push(
    `widgets.${widgetName}.${role}.${label}`,
    `widgets.${widgetName}.default.${label}`,
  );

  const map = getTranslations();
  for (const key of candidates) {
    if (key in map) return map[key];
  }
  return fallback;
}
