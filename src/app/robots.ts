import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/page/'],
    },
    sitemap: 'https://your-domain.com/sitemap.xml',
    // sitemap: 'https://ecommerce-inside.vercel.app//sitemap.xml',
  };
};
export default robots;
