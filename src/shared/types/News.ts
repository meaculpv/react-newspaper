export interface News {
  id: string;
  title: string;
  description: string;
  importantTake: string;
  images: [];
  date: string;
  tag: string;
  likes: number;
  size: 'small' | 'medium' | 'large';
  fit: 'full' | 'top';
}

export interface NewsPagination {
  first: string;
  prev: null | string;
  next: string;
  last: string;
  pages: string;
  items: 20;
  data: News[];
}
