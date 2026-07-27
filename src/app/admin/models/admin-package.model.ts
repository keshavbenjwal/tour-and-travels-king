export interface AdminPackage {
  id?: string;
  title: string;
  shortTitle: string;
  slug: string;
  duration: string;
  days: number;
  nights: number;
  startLocation: string;
  endLocation: string;
  price: number;
  originalPrice: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  maxAltitude: string;
  groupSize: string;
  overview: string;
  highlights: string[];
  includes: string[];
  excludes: string[];
  badge: string;
  metaDescription: string;
  keywords: string;
  active: boolean;
  createdAt?: unknown;
  updatedAt?: unknown;
}
