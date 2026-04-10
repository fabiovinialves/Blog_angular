import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Category, CategoryFilter } from '@core/models/post.model';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryFilterComponent {
  readonly categories = input.required<ReadonlyArray<Category>>();
  readonly selected = input<CategoryFilter>('all');

  readonly selectionChange = output<CategoryFilter>();
}
