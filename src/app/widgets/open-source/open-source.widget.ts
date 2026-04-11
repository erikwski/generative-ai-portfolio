import { exposeComponent } from '@hashbrownai/angular';
import { OpenSourceWidgetComponent } from './open-source.component';

export { OpenSourceWidgetComponent };

export const OpenSourceWidget = exposeComponent(OpenSourceWidgetComponent, {
  name: 'OpenSourceWidget',
  description:
    "Displays Erik's open source contributions: HyperIoT (IoT/BigData Angular platform, individual contributor) " +
    'and openapi-ts (PR #3552 on hey-api/openapi-ts — added Guid support for Zod v4). ' +
    'Use when the visitor asks about open source contributions, community code, ' +
    "public GitHub work, or Erik's contributions to the ecosystem.",
  input: {},
});
