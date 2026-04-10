import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { BlogStoreService } from '@core/services/blog-store.service';
import { TopNavComponent } from '@shared/ui/top-nav/top-nav.component';
import { AuthorChipComponent } from '@shared/ui/author-chip/author-chip.component';
import { PostCardComponent } from '@shared/ui/post-card/post-card.component';

@Component({
  selector: 'app-post-detail-page',
  standalone: true,
  imports: [
    DatePipe,
    RouterLink,
    TopNavComponent,
    AuthorChipComponent,
    PostCardComponent
  ],
  templateUrl: './post-detail-page.component.html',
  styleUrl: './post-detail-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDetailPageComponent {
  protected readonly store = inject(BlogStoreService);
  private readonly route = inject(ActivatedRoute);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug'))),
    { initialValue: this.route.snapshot.paramMap.get('slug') }
  );

  protected readonly post = computed(() => this.store.getPostBySlug(this.slug()));
  protected readonly relatedPosts = computed(() => {
    const currentPost = this.post();
    return currentPost ? this.store.getRelatedPosts(currentPost) : [];
  });

  protected onSearch(value: string): void {
    this.store.setSearchQuery(value);
  }
}
