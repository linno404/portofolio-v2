export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
}

export interface Skill {
  name: string;
  percentage: number;
  category: string;
}

export type Language = 'id' | 'en';
export type Theme = 'light' | 'dark';
