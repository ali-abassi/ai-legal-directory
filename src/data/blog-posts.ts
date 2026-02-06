export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  metaDescription: string;
  content: string;
}

export const blogPosts: BlogPost[] = [];
