import { Author } from '@core/models/author.model';

export type CategoryId =
  | 'destination'
  | 'culinary'
  | 'lifestyle'
  | 'tips'
  | 'travel';

export type CategoryFilter = CategoryId | 'all';

export interface Category {
  id: CategoryId;
  label: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  destination: string;
  category: CategoryId;
  readTimeMinutes: number;
  publishedAt: string;
  coverImage: string;
  author: Author;
  featured: boolean;
  tags: string[];
  content: string[];
}
