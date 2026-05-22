export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically load Lucide icons
  badge?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
  avatarUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  author: {
    name: string;
    avatarUrl: string;
  };
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}
