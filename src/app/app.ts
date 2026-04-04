import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingModal } from './components/onboarding/onboarding-modal';
import { FloatingPersonaPill } from './components/persona/floating-persona-pill';
import { AuraPage } from './components/hero/aura-page';
import { GenerativeView } from './hashbrown/generative-view';
import { hasOnboarded, hasGeneratedLayout } from './signals/persona.signal';

@Component({
  selector: 'app-root',
  imports: [CommonModule, OnboardingModal, FloatingPersonaPill, AuraPage, GenerativeView],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly hasOnboarded = hasOnboarded;
  readonly hasGeneratedLayout = hasGeneratedLayout;
}
