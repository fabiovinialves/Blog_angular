import { Injectable, computed, signal } from '@angular/core';
import { BLOG_CATEGORIES, BLOG_POSTS } from '@core/data/blog.seed';
import { Category, CategoryFilter, Post } from '@core/models/post.model';

type SortOption = 'newest' | 'oldest' | 'read-time';

@Injectable({ providedIn: 'root' })
export class BlogStoreService {
  private readonly postsState = signal<ReadonlyArray<Post>>(BLOG_POSTS);

  readonly categories: ReadonlyArray<Category> = BLOG_CATEGORIES;

  readonly searchQuery = signal('');
  readonly selectedCategory = signal<CategoryFilter>('all');
  readonly sortOption = signal<SortOption>('newest');
  readonly featuredIndex = signal(0);

  readonly featuredPosts = computed(() =>
    this.postsState().filter((post) => post.featured)
  );

  readonly activeFeaturedPost = computed(() => {
    const posts = this.featuredPosts();

    if (!posts.length) {
      return null;
    }

    const index = this.normalizeFeaturedIndex(this.featuredIndex(), posts.length);
    return posts[index];
  });

  readonly visiblePosts = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const category = this.selectedCategory();
    const sort = this.sortOption();

    let posts = [...this.postsState()];

    if (category !== 'all') {
      posts = posts.filter((post) => post.category === category);
    }

    if (query) {
      posts = posts.filter((post) => {
        const haystack = [
          post.title,
          post.excerpt,
          post.destination,
          post.author.name,
          ...post.tags
        ]
          .join(' ')
          .toLowerCase();

        return haystack.includes(query);
      });
    }

    posts.sort((current, next) => {
      switch (sort) {
        case 'oldest':
          return (
            new Date(current.publishedAt).getTime() -
            new Date(next.publishedAt).getTime()
          );
        case 'read-time':
          return next.readTimeMinutes - current.readTimeMinutes;
        case 'newest':
        default:
          return (
            new Date(next.publishedAt).getTime() -
            new Date(current.publishedAt).getTime()
          );
      }
    });

    return posts;
  });

  setSearchQuery(value: string): void {
    this.searchQuery.set(value);
  }

  setCategory(value: CategoryFilter): void {
    this.selectedCategory.set(value);
  }

  setSort(value: SortOption): void {
    this.sortOption.set(value);
  }

  selectFeatured(index: number): void {
    const total = this.featuredPosts().length;
    this.featuredIndex.set(this.normalizeFeaturedIndex(index, total));
  }

  clearFilters(): void {
    this.searchQuery.set('');
    this.selectedCategory.set('all');
    this.sortOption.set('newest');
  }

  getPostBySlug(slug: string | null): Post | undefined {
    if (!slug) {
      return undefined;
    }

    return this.postsState().find((post) => post.slug === slug);
  }

  getRelatedPosts(post: Post, limit = 3): ReadonlyArray<Post> {
    return this.postsState()
      .filter(
        (candidate) =>
          candidate.id !== post.id &&
          (candidate.category === post.category ||
            candidate.author.id === post.author.id)
      )
      .slice(0, limit);
  }

  private normalizeFeaturedIndex(index: number, total: number): number {
    if (!total) {
      return 0;
    }

    const normalized = index % total;
    return normalized < 0 ? normalized + total : normalized;
  }
}
