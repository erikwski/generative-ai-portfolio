import { exposeComponent } from '@hashbrownai/angular';
import { s } from '@hashbrownai/core';
import { SkillConstellationWidgetComponent } from './skill-constellation.component';

export { SkillConstellationWidgetComponent };

export const SkillConstellationWidget = exposeComponent(SkillConstellationWidgetComponent, {
  name: 'SkillConstellationWidget',
  description:
    "Displays Erik's full technical skill set grouped into Frontend, Backend, and AI & Agents. " +
    'Each skill shows a proficiency level (1–5 dots). ' +
    'Text depth adapts automatically to the visitor profile. ' +
    "Use when the visitor asks about skills, tech stack, tools, or 'what do you know?'. " +
    'Pass showUpcoming: true to reveal the upcoming / in-progress skills section.',
  input: {
    showUpcoming: s.string(
      'Pass "true" to reveal the upcoming skills section (LangChain, C1 English, React exploration). Leave empty or "false" to hide it.',
    ),
  },
});
