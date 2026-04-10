import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Post } from '@core/models/post.model';
import { AuthorChipComponent } from '@shared/ui/author-chip/author-chip.component';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [RouterLink, DatePipe, AuthorChipComponent],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent {
  readonly post = input.required<Post>();
}
