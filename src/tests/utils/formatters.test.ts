import { describe, it, expect } from 'vitest';
import { toSlug, truncateText, lerp, hexToRgba, getAssetUrl } from '@/utils/formatters';
import { createSpring, stepSpring } from '@/utils/springPhysics';
import { getPhaseScreenshotItem, getEchoScreenshotItems } from '@/utils/screenshotUtils';
import { journeyPhases } from '@/data/journeyData';

describe('Utility Functions', () => {
  describe('formatters', () => {
    it('toSlug correctly slugifies strings', () => {
      expect(toSlug('Multi-Module Architecture')).toBe('multi-module-architecture');
      expect(toSlug('AI & Engineering!')).toBe('ai-engineering');
      expect(toSlug('   Leading & Trailing   ')).toBe('leading-trailing');
    });

    it('truncateText correctly truncates strings exceeding maxLength', () => {
      expect(truncateText('Hello World', 5)).toBe('Hello...');
      expect(truncateText('Short', 10)).toBe('Short');
      expect(truncateText('Exact', 5)).toBe('Exact');
    });

    it('lerp performs linear interpolation', () => {
      expect(lerp(0, 100, 0.5)).toBe(50);
      expect(lerp(10, 20, 0)).toBe(10);
      expect(lerp(10, 20, 1)).toBe(20);
    });

    it('hexToRgba converts 6-char hex codes with opacity', () => {
      expect(hexToRgba('#00ff00', 0.5)).toBe('rgba(0, 255, 0, 0.5)');
      expect(hexToRgba('#ffffff', 1)).toBe('rgba(255, 255, 255, 1)');
      // Fallback for invalid hex
      expect(hexToRgba('invalid', 0.8)).toBe('rgba(255, 255, 255, 0.8)');
    });

    it('getAssetUrl prepends BASE_URL correctly and handles edge cases', () => {
      expect(getAssetUrl('')).toBe('');
      expect(getAssetUrl(undefined)).toBe('');
      expect(getAssetUrl('https://example.com/image.png')).toBe('https://example.com/image.png');
      expect(getAssetUrl('http://example.com/image.png')).toBe('http://example.com/image.png');
      expect(getAssetUrl('data:image/svg+xml;base64,...')).toBe('data:image/svg+xml;base64,...');
      
      const res = getAssetUrl('/images/logos/android.svg');
      expect(res.endsWith('images/logos/android.svg')).toBe(true);
    });
  });

  describe('springPhysics', () => {
    it('creates initial spring state', () => {
      const spring = createSpring(10);
      expect(spring.value).toBe(10);
      expect(spring.velocity).toBe(0);
    });

    it('steps spring smoothly towards target value', () => {
      const spring = createSpring(0);
      stepSpring(spring, 100, 0.016);
      expect(spring.value).toBeGreaterThan(0);
      expect(spring.velocity).toBeGreaterThan(0);

      // Multiple steps should approach the target
      for (let i = 0; i < 60; i++) {
        stepSpring(spring, 100, 0.016);
      }
      expect(spring.value).toBeCloseTo(100, -1);
    });
  });

  describe('screenshotUtils', () => {
    it('getPhaseScreenshotItem resolves primary screenshot for phase', () => {
      const phase1 = journeyPhases[0];
      const primary = getPhaseScreenshotItem(phase1);
      expect(primary).toBeDefined();
      expect(primary?.imageUrl).toBeTruthy();

      // If custom URL is provided, returns that item
      if (phase1.gallery3D && phase1.gallery3D.length > 1) {
        const customUrl = phase1.gallery3D[1].imageUrl;
        const customItem = getPhaseScreenshotItem(phase1, customUrl);
        expect(customItem?.imageUrl).toBe(customUrl);
      }
    });

    it('getEchoScreenshotItems returns secondary screenshots without active item', () => {
      const phase = journeyPhases[0];
      const primary = getPhaseScreenshotItem(phase);
      const echos = getEchoScreenshotItems(phase, primary, 2);

      expect(echos.length).toBeLessThanOrEqual(2);
      echos.forEach((echo) => {
        expect(echo.imageUrl).not.toBe(primary?.imageUrl);
      });
    });
  });
});
