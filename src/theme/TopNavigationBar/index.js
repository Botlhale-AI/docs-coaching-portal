import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import clsx from 'clsx';
import styles from './styles.module.css';

const topMenuItems = [
  { label: 'Overview', to: '/docs/intro' },
  { label: 'Dashboard', to: '/docs/Dashboard' },
  { label: 'Progress', to: '/docs/Progress' },
  { label: 'Courses', to: '/docs/Courses' },
  { label: 'Awards', to: '/docs/Awards' },
];

export default function TopNavigationBar() {
  const location = useLocation();
  
  return (
    <nav className={styles.topNavBar}>
      <div className={styles.navContainer}>
        {topMenuItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className={clsx(
              styles.navItem,
              location.pathname.startsWith(item.to) && styles.activeNavItem
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
