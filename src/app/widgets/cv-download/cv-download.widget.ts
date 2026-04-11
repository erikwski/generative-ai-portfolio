import { exposeComponent } from '@hashbrownai/angular';
import { CvDownloadWidgetComponent } from './cv-download.component';

export { CvDownloadWidgetComponent };

export const CvDownloadWidget = exposeComponent(CvDownloadWidgetComponent, {
  name: 'CvDownloadWidget',
  description:
    "Displays a CTA card for downloading Erik Ferrari's CV as a PDF. " +
    'Use when the visitor asks to download, save, or get Erik\'s CV, resume or credentials. ' +
    'No input props needed.',
  input: {},
});
