import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';

const topMenuItems = [
  { label: 'Overview', to: '/docs/intro' },
  { label: 'Getting Started', to: '/docs/getting-started' },
  { label: 'Features', to: '/docs/features' },
  { label: 'API', to: '/docs/api' },
  { label: 'Guides', to: '/docs/guides' },
  { label: 'Release Notes', to: '/docs/release-notes' },
];

export default function TopNavigationBar() {
  const location = useLocation();
  
  return (
    <div className="top-nav-bar">
      {topMenuItems.map((item, index) => (
        <Link
          key={index}
          to={item.to}
          className={`top-nav-item ${location.pathname.startsWith(item.to) ? 'active' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
