import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyStateComponent {
  readonly title = input('Nenhum resultado encontrado com os filtros atuais');
  readonly description = input(
    'Tente outra palavra-chave, categoria ou forma de ordenação.'
  );

  readonly reset = output<void>();
}
