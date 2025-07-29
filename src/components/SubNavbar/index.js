import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import clsx from 'clsx';

// Team Lead navigation items - only show team lead specific pages
const teamLeadNavItems = [
  { label: 'Team Dashboard', to: '/docs/Dashboard' },
  { label: 'Course Management', to: '/docs/Courses' },
  { label: 'Awards & Recognition', to: '/docs/Awards' },
  { label: 'Team Progress', to: '/docs/Progress' },
  { label: 'Preferences', to: '/docs/Preferences' },
];

// Agent navigation items - only show agent specific pages
const agentNavItems = [
  { label: 'My Dashboard', to: '/docs/AgentDashboard' },
  { label: 'My Courses', to: '/docs/AgentCourses' },
  { label: 'My Awards', to: '/docs/AgentAwards' },
  { label: 'Interactions', to: '/docs/Interactions' },
  { label: 'Admin', to: '/docs/AgentAdmin' },
];

export default function SubNavbar({ userRole = 'teamlead' }) {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  
  // Handle scroll event to make the navigation sticky
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 120); // Main navbar + role navbar height
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Determine user role from URL if not explicitly passed
  const currentPath = location.pathname;
  let detectedRole = userRole;
  
  // Auto-detect role based on current page
  if (currentPath.includes('Agent')) {
    detectedRole = 'agent';
  } else if (['/docs/Dashboard', '/docs/Courses', '/docs/Awards', '/docs/Progress', '/docs/Preferences'].some(path => currentPath === path)) {
    detectedRole = 'teamlead';
  }
  
  const navItems = detectedRole === 'teamlead' ? teamLeadNavItems : agentNavItems;
  
  // Don't show navigation if user is on wrong role's page
  const shouldShowNavigation = () => {
    if (detectedRole === 'agent') {
      return agentNavItems.some(item => item.to === currentPath);
    } else {
      return teamLeadNavItems.some(item => item.to === currentPath) || currentPath === '/docs/';
    }
  };

  // Don't render if navigation shouldn't be shown
  if (!shouldShowNavigation()) {
    return null;
  }
  
  // Don't show SubNavbar since TopNavigationBar now handles role-based navigation
  return null;
}

