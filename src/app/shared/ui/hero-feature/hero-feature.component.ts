import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Post } from '@core/models/post.model';
import { AuthorChipComponent } from '@shared/ui/author-chip/author-chip.component';

@Component({
  selector: 'app-hero-feature',
  standalone: true,
  imports: [RouterLink, DatePipe, AuthorChipComponent],
  templateUrl: './hero-feature.component.html',
  styleUrl: './hero-feature.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroFeatureComponent {
  readonly post = input.required<Post>();
  readonly activeIndex = input(0);
  readonly totalSlides = input(0);

  readonly slideSelected = output<number>();
  readonly slideIndexes = computed(() =>
    Array.from({ length: this.totalSlides() }, (_, index) => index)
  );
}
