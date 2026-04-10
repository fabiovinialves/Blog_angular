import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { BlogStoreService } from '@core/services/blog-store.service';
import { CategoryFilter, Post } from '@core/models/post.model';
import { TopNavComponent } from '@shared/ui/top-nav/top-nav.component';
import { HeroFeatureComponent } from '@shared/ui/hero-feature/hero-feature.component';
import { CategoryFilterComponent } from '@shared/ui/category-filter/category-filter.component';
import { SortSelectComponent } from '@shared/ui/sort-select/sort-select.component';
import { PostCardComponent } from '@shared/ui/post-card/post-card.component';
import { EmptyStateComponent } from '@shared/ui/empty-state/empty-state.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    TopNavComponent,
    HeroFeatureComponent,
    CategoryFilterComponent,
    SortSelectComponent,
    PostCardComponent,
    EmptyStateComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  protected readonly store = inject(BlogStoreService);

  protected readonly featuredPost = computed(() => this.store.activeFeaturedPost());
  protected readonly featuredPosts = computed(() => this.store.featuredPosts());
  protected readonly posts = computed(() => this.store.visiblePosts());

  protected onSearch(value: string): void {
    this.store.setSearchQuery(value);
  }

  protected onSelectCategory(value: CategoryFilter): void {
    this.store.setCategory(value);
  }

  protected onSelectSort(value: 'newest' | 'oldest' | 'read-time'): void {
    this.store.setSort(value);
  }

  protected onSelectHero(index: number): void {
    this.store.selectFeatured(index);
  }

  protected trackPost(_: number, post: Post): string {
    return post.id;
  }
}
