import { DayItinerary } from '../../core/services/packages.service';

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
  /**
   * Day-by-day itinerary. The admin form does not edit this field yet, but
   * `updateDoc` leaves unspecified fields untouched, so imported itineraries
   * survive edits made through the admin panel.
   */
  itinerary?: DayItinerary[];
  createdAt?: unknown;
  updatedAt?: unknown;
}
