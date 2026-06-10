export interface PageSection {
  _template?: string;
  heading?: string;
  body?: string;
  linkUrl?: string;
  [key: string]: unknown;
}

export interface PageContent {
  title: string;
  seoTitle?: string;
  seoDescription?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroImage?: string;
  heroImageAlt?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryUrl?: string;
  sections?: PageSection[];
}

export interface Article {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  coverImageAlt?: string;
  category?: string;
  author?: string;
  featured?: boolean;
  body: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface EventItem {
  title: string;
  slug: string;
  startDate: string;
  endDate?: string;
  location: string;
  address?: string;
  excerpt: string;
  coverImage?: string;
  coverImageAlt?: string;
  registrationUrl?: string;
  isPastEvent?: boolean;
  body: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Testimonial {
  name: string;
  role?: string;
  quote: string;
  image?: string;
  published: boolean;
  order: number;
}

export interface Partner {
  name: string;
  logo?: string;
  websiteUrl?: string;
  order: number;
  published: boolean;
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  logo?: string;
  email: string;
  phone?: string;
  address?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
  helloAssoUrl: string;
}
