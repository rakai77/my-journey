import { JourneyPhase, GalleryItem3D } from '../types/journey';

/**
 * Resolves the primary screenshot for a given phase.
 * Priority:
 * 1. User selected screenshot from gallery click
 * 2. Dedicated store-screenshot gallery item
 * 3. First item in gallery3D
 */
export const getPhaseScreenshotItem = (
  phase: JourneyPhase,
  selectedUrl?: string
): GalleryItem3D | undefined => {
  if (!phase.gallery3D || phase.gallery3D.length === 0) return undefined;

  if (selectedUrl) {
    const found = phase.gallery3D.find((item) => item.imageUrl === selectedUrl);
    if (found) return found;
  }

  const storeScreenshot = phase.gallery3D.find(
    (item) => item.type === 'store-screenshot' || item.badge.toLowerCase().includes('live')
  );
  return storeScreenshot || phase.gallery3D[0];
};

/**
 * Returns secondary/echo screenshots to place in background parallax layers.
 */
export const getEchoScreenshotItems = (
  phase: JourneyPhase,
  activeItem?: GalleryItem3D,
  limit = 2
): GalleryItem3D[] => {
  if (!phase.gallery3D) return [];
  return phase.gallery3D
    .filter((item) => item.imageUrl !== activeItem?.imageUrl)
    .slice(0, limit);
};
