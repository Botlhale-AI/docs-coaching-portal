import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import clsx from 'clsx';

// Main navigation items - moved from navbar
const mainNavItems = [
  { label: 'Dashboard', to: '/Dashboard' },
  { label: 'Awards', to: '/Awards' },
  { label: 'Courses', to: '/Courses' },
  { label: 'Progress', to: '/Progress' },
  { label: 'Evaluation Cycles', to: '/Options' },
];

export default function SubNavbar() {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  
  // Handle scroll event to make the navigation sticky
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 60); // Main navbar height
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className={clsx('horizontal-nav', isSticky && 'horizontal-nav-sticky')}>
      <div className="horizontal-nav-container">
        {mainNavItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className={clsx(
              'horizontal-nav-item',
              location.pathname.startsWith(item.to) && 'horizontal-nav-item-active'
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
