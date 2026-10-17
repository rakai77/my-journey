import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { journeyPhases, profileInfo } from '@/data/journeyData';

describe('Asset Integrity Tests', () => {
  const publicDir = path.resolve(__dirname, '../../../public');

  it('verifies public directory exists', () => {
    expect(fs.existsSync(publicDir)).toBe(true);
  });

  it('verifies profile avatar image exists on disk and is non-empty', () => {
    expect(profileInfo.avatarUrl).toBeDefined();
    if (profileInfo.avatarUrl) {
      const cleanPath = profileInfo.avatarUrl.replace(/^\//, '');
      const fullPath = path.join(publicDir, cleanPath);
      expect(fs.existsSync(fullPath), `Profile avatar missing at ${fullPath}`).toBe(true);
      const stat = fs.statSync(fullPath);
      expect(stat.size).toBeGreaterThan(1000); // Verify it is a valid non-empty file
    }
  });

  it('verifies all phase gallery3D images exist on disk', () => {
    let totalImagesChecked = 0;
    journeyPhases.forEach((phase) => {
      if (phase.gallery3D && phase.gallery3D.length > 0) {
        phase.gallery3D.forEach((item) => {
          if (item.imageUrl.startsWith('/')) {
            const cleanPath = item.imageUrl.replace(/^\//, '');
            const fullPath = path.join(publicDir, cleanPath);
            expect(fs.existsSync(fullPath), `Phase ${phase.id} (${phase.company}) image missing: ${cleanPath}`).toBe(true);
            totalImagesChecked++;
          }
        });
      }
    });
    expect(totalImagesChecked).toBeGreaterThan(15);
  });

  it('verifies all phase reference images exist on disk if local', () => {
    journeyPhases.forEach((phase) => {
      if (phase.references) {
        phase.references.forEach((ref) => {
          if (ref.imageUrl && ref.imageUrl.startsWith('/')) {
            const cleanPath = ref.imageUrl.replace(/^\//, '');
            const fullPath = path.join(publicDir, cleanPath);
            expect(fs.existsSync(fullPath), `Phase ${phase.id} ref image missing: ${cleanPath}`).toBe(true);
          }
        });
      }
    });
  });
});
