export interface GalleryImage {
  id?: string;
  /** Original filename, kept so the admin can recognise the image. */
  fileName: string;
  /** Caption shown in the gallery lightbox. */
  caption: string;
  category: string;
  /**
   * Slug of the package this image belongs to, or '' for gallery-only images.
   * When set, the packages page uses this image as the package photo.
   */
  packageSlug: string;
  /** Compressed JPEG as a data: URI. Kept well under Firestore's 1 MB doc limit. */
  dataUrl: string;
  width: number;
  height: number;
  /** Byte size of the stored data URI, for the admin's own reference. */
  bytes: number;
  createdAt?: unknown;
}

export const GALLERY_CATEGORIES = [
  'Mountains',
  'Temples',
  'Trekking',
  'Valleys',
  'Villages'
];
