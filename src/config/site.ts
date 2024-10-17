import { env } from '@/env.mjs';
import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Bizonhigz',
  author: 'Bizonhigz',
  description:
    'Bizonhigz',
  keywords: ['Bizonhigz'],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: 'Bizonhigz',
  },
  headerLinks: [
    { name: 'Home', href: '/' },
  ],
  links: {
    github: '',
    twitter: '',
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.png?${new Date().getTime()}`,
};
