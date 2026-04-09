import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-widget-shell',
  imports: [MatIconModule, MatIconButton],
  templateUrl: './widget-shell.component.html',
  styleUrl: './widget-shell.component.scss',
})
export class WidgetShellComponent {
  title = input<string>('');
  removed = output<void>();
}
