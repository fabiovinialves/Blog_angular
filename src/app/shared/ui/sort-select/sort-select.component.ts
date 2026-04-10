import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-sort-select',
  standalone: true,
  templateUrl: './sort-select.component.html',
  styleUrl: './sort-select.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortSelectComponent {
  readonly value = input<'newest' | 'oldest' | 'read-time'>('newest');
  readonly valueChange = output<'newest' | 'oldest' | 'read-time'>();

  protected onChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value as
      | 'newest'
      | 'oldest'
      | 'read-time';

    this.valueChange.emit(value);
  }
}
