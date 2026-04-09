import { exposeComponent } from '@hashbrownai/angular';
import { s } from '@hashbrownai/core';
import { ProjectShowcaseWidgetComponent } from './project-showcase.component';

export { ProjectShowcaseWidgetComponent };

export const ProjectShowcaseWidget = exposeComponent(ProjectShowcaseWidgetComponent, {
  name: 'ProjectShowcaseWidget',
  description:
    "Displays a bento grid of Erik's selected projects. Each card shows a title, tech tags, " +
    'an optional metric badge, and an optional link. ' +
    "Text depth (eyebrow, headline, body) adapts automatically to the visitor's role and time preference. " +
    'Use when the visitor asks about work, projects, portfolio, or "what have you built?". ' +
    'Pass 2–4 project cards. First card spans 2 columns when there are more than 2 cards.',
  input: {
    projects: s.array(
      'List of project cards to display. Pass 2–4 cards.',
      s.object('A single project card', {
        title:  s.string('Project name, concise'),
        tags:   s.array('Tech stack tags', s.string('One tag, e.g. "Angular 21"')),
        metric: s.string('Optional KPI badge, e.g. "3× faster" or "40% drop". Leave empty if none.'),
        url:    s.string('Optional URL to the live project or repo. Leave empty to hide the link.'),
      }),
    ),
  },
});
