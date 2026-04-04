import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { LogoComponent } from '../../shared/ui/logo/logo.component';
import { VisitorProfileStore } from '../../shared/data-access/visitor-profile.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-canvas',
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, LogoComponent],
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
  readonly hasContent = signal(false);
  readonly isLoading = signal(false);

  useSuggestion(label: string): void {
    this.prompt.set(label);
    this.send();
  }

  send(): void {
    const value = this.prompt().trim();
    if (!value || this.isLoading()) return;
    this.hasContent.set(true);
    // TODO: Hashbrown integration
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
