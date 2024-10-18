import { siteConfig } from '@/config/site';
import { Link } from '@/navigation';
import React from 'react';
import { Icons } from '../icons';

const HeaderLinks = () => {
  const links = siteConfig.headerLinks;

  return (
    <div className="flex flex-col items-center gap-6 md:flex-row">
      {links.map((link, index) => (
        <Link
          aria-label={link.name}
          key={link.name}
          href={link.href}
          rel="noopener norefferer nofollow"
          className={`flex items-center justify-center`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
export default HeaderLinks;
