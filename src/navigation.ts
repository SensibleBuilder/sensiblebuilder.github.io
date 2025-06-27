import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Gallery',
      href: '#gallery',
    },
    {
      text: 'About Us',
      href: '#about',
    },
    {
      text: 'Contact',
      href: '#contact',
    },
  ],
};

export const footerData = {
  links: [
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    ©2025 Sensible Builder LLC · All rights reserved
  `,
};
