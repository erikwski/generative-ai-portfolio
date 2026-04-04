import { Component, input, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWrapper } from '../ui/section-wrapper';

interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

@Component({
  selector: 'app-stats-section',
  imports: [CommonModule, SectionWrapper],
  template: `
    <app-section-wrapper>
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          @for (stat of visibleStatItems(); track stat.id) {
            <div
              class="glass p-6 text-center hover:border-[#F5C400]/30 transition-colors duration-300"
              #statCard
            >
              <div class="text-3xl mb-2">{{ stat.icon }}</div>
              <div class="text-3xl md:text-4xl font-bold text-[#F5C400] mb-1">
                {{ displayValues[stat.id] || 0 }}{{ stat.suffix }}
              </div>
              <div class="text-[#6B7280] text-xs uppercase tracking-wider">{{ stat.label }}</div>
            </div>
          }
        </div>
      </div>
    </app-section-wrapper>
  `,
})
export class StatsSection implements AfterViewInit {
  visibleStats = input<string[]>(['years', 'projects', 'courses', 'coffees']);

  @ViewChildren('statCard') statCards!: QueryList<ElementRef>;

  displayValues: Record<string, number> = {};

  private readonly allStats: Stat[] = [
    { id: 'years', label: 'Years of Code', value: 4, suffix: '', icon: '🧑‍💻' },
    { id: 'projects', label: 'Projects Delivered', value: 8, suffix: '', icon: '🚀' },
    { id: 'courses', label: 'Courses Finished', value: 10, suffix: '+', icon: '📚' },
    { id: 'coffees', label: 'Coffees Consumed', value: 99, suffix: '+', icon: '☕' },
  ];

  visibleStatItems(): Stat[] {
    const ids = this.visibleStats();
    return this.allStats.filter((s) => ids.includes(s.id));
  }

  ngAfterViewInit() {
    // Initialize display values to 0
    this.visibleStatItems().forEach((s) => {
      this.displayValues[s.id] = 0;
    });

    // Use IntersectionObserver to trigger count animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe the first stat card
    setTimeout(() => {
      const first = this.statCards.first;
      if (first) observer.observe(first.nativeElement);
    }, 100);
  }

  private animateCounters() {
    this.visibleStatItems().forEach((stat) => {
      const duration = 1500;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(Math.round(increment * step), stat.value);
        this.displayValues = { ...this.displayValues, [stat.id]: current };
        if (step >= steps) clearInterval(timer);
      }, duration / steps);
    });
  }
}
