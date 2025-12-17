import type { ImageMetadata } from 'astro';

/**
 * Resolves the blog post icon, handling both string paths (legacy) and imported images (new optimized).
 * If no icon is provided, returns a deterministic placeholder based on the post's publication month.
 */
export function resolveBlogIcon(iconProp?: string | ImageMetadata, date?: Date): string | ImageMetadata {
  if (!iconProp) {
    // Use month to deterministically select a placeholder icon (1-4)
    const month = date ? date.getMonth() + 1 : 1; // getMonth() is 0-indexed
    const placeholderIndex = (month % 4) + 1;
    return `/assets/blog_ph_${placeholderIndex}.png`;
  }
  if (typeof iconProp === 'string') return `/assets/${iconProp}`;
  return iconProp;
}
