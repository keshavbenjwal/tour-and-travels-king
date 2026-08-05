/**
 * Browser-side image compression.
 *
 * Firestore documents are capped at 1 MB (1,048,576 bytes), and a data: URI is
 * base64 so it inflates the raw bytes by ~33%. We resize and step the JPEG
 * quality down until the encoded string fits comfortably inside that budget.
 */

export interface CompressedImage {
  dataUrl: string;
  width: number;
  height: number;
  bytes: number;
}

/** Leaves room for the other fields on the document. */
const MAX_BYTES = 900_000;
const MAX_EDGE = 1600;
const QUALITY_STEPS = [0.82, 0.72, 0.62, 0.52, 0.42];

export async function compressImage(file: File): Promise<CompressedImage> {
  const bitmap = await loadBitmap(file);

  // Scale the long edge down to MAX_EDGE, never scaling up.
  const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height));
  let width = Math.round(bitmap.width * scale);
  let height = Math.round(bitmap.height * scale);

  for (let attempt = 0; attempt < 4; attempt++) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas is not available in this browser.');
    ctx.drawImage(bitmap, 0, 0, width, height);

    for (const quality of QUALITY_STEPS) {
      const dataUrl = canvas.toDataURL('image/jpeg', quality);
      if (dataUrl.length <= MAX_BYTES) {
        close(bitmap);
        return { dataUrl, width, height, bytes: dataUrl.length };
      }
    }

    // Still too large at the lowest quality — shrink and try the ladder again.
    width = Math.round(width * 0.75);
    height = Math.round(height * 0.75);
  }

  close(bitmap);
  throw new Error('Could not compress this image below 1 MB. Try a smaller file.');
}

function close(bitmap: ImageBitmap | HTMLImageElement): void {
  if ('close' in bitmap && typeof bitmap.close === 'function') bitmap.close();
}

async function loadBitmap(file: File): Promise<ImageBitmap | HTMLImageElement> {
  // createImageBitmap handles EXIF orientation and is faster where supported.
  if ('createImageBitmap' in window) {
    try {
      return await createImageBitmap(file);
    } catch {
      /* fall through to the <img> path */
    }
  }

  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('That file could not be read as an image.'));
    };
    img.src = url;
  });
}

/** Turns "Adi Kailash 6 Days.JPG" into "adi-kailash-6-days" for slug matching. */
export function fileNameToSlug(fileName: string): string {
  return fileName
    .replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s_-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-');
}
