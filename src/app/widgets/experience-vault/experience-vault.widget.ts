import { exposeComponent } from '@hashbrownai/angular';
import { ExperienceVaultWidgetComponent } from './experience-vault.component';

export { ExperienceVaultWidgetComponent };

export const ExperienceVaultWidget = exposeComponent(ExperienceVaultWidgetComponent, {
  name: 'ExperienceVaultWidget',
  description:
    "Displays Erik's formal qualifications: Bachelor's Degree in Computer Science (Unipegaso University, 109/110) and C1 English certification (Wall Street English, in progress). " +
    'Use when asked about education, studies, certifications, or academic background.',
  input: {},
});
