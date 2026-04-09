import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { uiChatResource, RenderMessageComponent, UiAssistantMessage } from '@hashbrownai/angular';
import { LogoComponent } from '../../shared/ui/logo/logo.component';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { Router } from '@angular/router';
import { WidgetShellComponent } from '../../shared/ui/widget-shell/widget-shell.component';
import { ArchitectsIdentityWidget } from '../../widgets/architects-identity/architects-identity.widget';
import { EvolutionTimelineWidget } from '../../widgets/evolution-timeline/evolution-timeline.widget';
import { ProjectShowcaseWidget } from '../../widgets/project-showcase/project-showcase.widget';
import { SkillConstellationWidget } from '../../widgets/skill-constellation/skill-constellation.widget';
import { PersonalInterestsWidget } from '../../widgets/personal-interests/personal-interests.widget';
import { ExperienceVaultWidget } from '../../widgets/experience-vault/experience-vault.widget';
import { CompatibilityEngineWidget } from '../../widgets/compatibility-engine/compatibility-engine.widget';
import { CoreIdentityWidget } from '../../widgets/core-identity/core-identity.widget';
import { ProfessionalObjectiveWidget } from '../../widgets/professional-objective/professional-objective.widget';

@Component({
  selector: 'app-canvas',
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    LogoComponent,
    RenderMessageComponent,
    WidgetShellComponent,
  ],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss',
})
export class CanvasComponent {
  private readonly store = inject(VisitorProfileStore);
  private readonly router = inject(Router);

  readonly suggestions = [
    $localize`:@@canvas.chip.build:What can you build?`,
    $localize`:@@canvas.chip.stack:Show me your stack`,
    $localize`:@@canvas.chip.hire:Are you available for hire?`,
  ];

  readonly placeholderEmpty = $localize`:@@canvas.placeholder.empty:Ask something about Erik…`;
  readonly placeholderActive = $localize`:@@canvas.placeholder.active:Type another question…`;

  readonly prompt = signal('');

  readonly chat = uiChatResource({
    model: 'claude-haiku-4-5',
    system: computed(() =>
      `You are the AI powering Erik Ferrari's personal portfolio. Your only job is to compose a UI that answers the visitor's question.

${this.store.systemPromptContext()}

Instructions:
- Always respond by rendering one or more widgets — never with plain text.
- Choose widgets that best match what the visitor is asking.
- Pass the "highlights" prop with 2–4 short phrases (2–5 words each) that accent the most relevant facts for this specific visitor.
- Do not add explanations or commentary outside of the widgets.`.trim(),
    ),
    components: [
      ArchitectsIdentityWidget,
      EvolutionTimelineWidget,
      ProjectShowcaseWidget,
      SkillConstellationWidget,
      PersonalInterestsWidget,
      ExperienceVaultWidget,
      CompatibilityEngineWidget,
      CoreIdentityWidget,
      ProfessionalObjectiveWidget,
    ],
    debugName: 'portfolio-canvas',
  });

  readonly hasContent = computed(() => (this.chat.value()?.length ?? 0) > 0);
  readonly isLoading = this.chat.isLoading;

  readonly assistantMessages = computed(() =>
    (this.chat.value() ?? []).filter((m) => m.role === 'assistant'),
  );

  readonly dismissedIndices = signal<Set<number>>(new Set());

  dismissMessage(index: number): void {
    this.dismissedIndices.update((s) => new Set([...s, index]));
  }

  getWidgetTitle(message: UiAssistantMessage): string {
    return message.content?.ui[0].$tag ?? '';
  }

  useSuggestion(label: string): void {
    this.prompt.set(label);
    this.send();
  }

  send(): void {
    const value = this.prompt().trim();
    if (!value || this.isLoading()) return;
    this.chat.sendMessage({ role: 'user', content: value });
    this.prompt.set('');
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }

  resetExperience(): void {
    this.store.reset();
    this.router.navigate(['/onboarding']);
  }
}
