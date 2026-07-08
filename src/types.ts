export type ProjectCategory = 'wedding' | 'pre-wedding' | 'event';

export interface PortfolioItem {
  id: string;
  title: string;
  category: ProjectCategory;
  imageUrl: string;
  videoUrl?: string;
  description: string;
  location: string;
  date: string;
  aspectRatio?: 'landscape' | 'portrait';
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  couple: string;
  role: string;
  quote: string;
  location: string;
  avatarUrl: string;
}

export interface QuoteInquiry {
  name: string;
  email: string;
  phone?: string;
  eventDate: string;
  location: string;
  packageInterest: 'cinematic' | 'editorial' | 'premium' | 'custom';
  message: string;
}
