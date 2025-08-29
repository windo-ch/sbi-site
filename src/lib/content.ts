import matter from 'gray-matter';

export interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  blockHeight: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  featured: boolean;
  published: boolean;
  content: string;
  slug: string;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  expertise: string[];
  published: boolean;
  content?: string;
}

// Import all article markdown files
const articleModules = import.meta.glob('/src/content/articles/*.md', { 
  query: '?raw',
  import: 'default'
});

// Import all author markdown files  
const authorModules = import.meta.glob('/src/content/authors/*.md', {
  query: '?raw', 
  import: 'default'
});

export async function getAllArticles(): Promise<Article[]> {
  const articles: Article[] = [];
  
  for (const path in articleModules) {
    const mod = await articleModules[path]();
    const { data, content } = matter(mod as string);
    
    // Extract slug from filename
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    
    articles.push({
      ...data,
      content,
      slug,
    } as Article);
  }
  
  // Sort by date (newest first) and filter published articles
  return articles
    .filter(article => article.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getAllAuthors(): Promise<Author[]> {
  const authors: Author[] = [];
  
  for (const path in authorModules) {
    const mod = await authorModules[path]();
    const { data, content } = matter(mod as string);
    
    authors.push({
      ...data,
      content,
    } as Author);
  }
  
  return authors.filter(author => author.published);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const mod = await import(`/src/content/articles/${slug}.md?raw`);
    const { data, content } = matter(mod.default);
    
    return {
      ...data,
      content,
      slug,
    } as Article;
  } catch (error) {
    return null;
  }
}

export async function getAuthorById(id: string): Promise<Author | null> {
  try {
    const mod = await import(`/src/content/authors/${id}.md?raw`);
    const { data, content } = matter(mod.default);
    
    return {
      ...data,
      content,
    } as Author;
  } catch (error) {
    return null;
  }
}

export async function getArticlesByAuthor(authorId: string): Promise<Article[]> {
  const allArticles = await getAllArticles();
  return allArticles.filter(article => article.author === authorId);
}

export async function getFeaturedArticles(): Promise<Article[]> {
  const allArticles = await getAllArticles();
  return allArticles.filter(article => article.featured);
}

export async function getArticlesByTag(tag: string): Promise<Article[]> {
  const allArticles = await getAllArticles();
  return allArticles.filter(article => article.tags.includes(tag));
}

export async function searchArticles(query: string): Promise<Article[]> {
  const allArticles = await getAllArticles();
  const searchTerm = query.toLowerCase();
  
  return allArticles.filter(article => 
    article.title.toLowerCase().includes(searchTerm) ||
    article.excerpt.toLowerCase().includes(searchTerm) ||
    article.content.toLowerCase().includes(searchTerm) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}