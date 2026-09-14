/**
 * Utility functions for formatting strings and data in the UI.
 */

/**
 * Format a given string to a slug-like format.
 * Example: "Multi-Module" -> "multi-module"
 */
export const toSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

/**
 * Ensures a string is truncated to a certain length with an ellipsis.
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

/**
 * Generate a smooth lerp value (linear interpolation).
 * Useful for custom 3D animations alongside GSAP.
 */
export const lerp = (start: number, end: number, factor: number): number => {
  return start + (end - start) * factor;
};

/**
 * Converts a hex color string to an rgba string with a specified opacity.
 * Assumes a valid #RRGGBB format.
 */
export const hexToRgba = (hex: string, opacity: number): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return `rgba(255, 255, 255, ${opacity})`; // fallback to white
  
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
