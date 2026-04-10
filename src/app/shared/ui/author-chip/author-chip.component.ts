import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Author } from '@core/models/author.model';

@Component({
  selector: 'app-author-chip',
  standalone: true,
  templateUrl: './author-chip.component.html',
  styleUrl: './author-chip.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorChipComponent {
  readonly author = input.required<Author>();
  readonly dark = input(false);
  readonly compact = input(false);
}
