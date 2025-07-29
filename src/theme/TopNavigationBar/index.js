import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import clsx from 'clsx';
import styles from './styles.module.css';

// Team Lead navigation items
const teamLeadMenuItems = [
  { label: 'Dashboard', to: '/docs/Dashboard' },
  { label: 'Courses', to: '/docs/Courses' },
  { label: 'Awards', to: '/docs/Awards' },
  { label: 'Progress', to: '/docs/Progress' },
  { label: 'Preferences', to: '/docs/Preferences' },
];

// Agent navigation items
const agentMenuItems = [
  { label: 'My Dashboard', to: '/docs/AgentDashboard' },
  { label: 'My Courses', to: '/docs/AgentCourses' },
  { label: 'My Awards', to: '/docs/AgentAwards' },
  { label: 'Interactions', to: '/docs/Interactions' },
  { label: 'Admin', to: '/docs/AgentAdmin' },
];

export default function TopNavigationBar() {
  const location = useLocation();
  
  // Determine initial role based on current path
  const isAgentPath = location.pathname.includes('Agent');
  const [currentRole, setCurrentRole] = useState(isAgentPath ? 'agent' : 'teamlead');
  
  // Only show navigation on docs pages
  if (!location.pathname.startsWith('/docs/')) {
    return null;
  }
  
  // Select appropriate menu items based on role
  const menuItems = currentRole === 'agent' ? agentMenuItems : teamLeadMenuItems;
  
  // Handle role toggle
  const handleRoleToggle = (newRole) => {
    setCurrentRole(newRole);
    // Navigate to appropriate dashboard when switching roles
    if (newRole === 'agent') {
      window.location.href = '/docs/AgentDashboard';
    } else {
      window.location.href = '/docs/Dashboard';
    }
  };
  
  return (
    <nav className={styles.topNavBar}>
      <div className={styles.navContainer}>
        {/* Role Toggle Section */}
        <div className={styles.roleToggleSection}>
          <div className={styles.roleToggle}>
            <button
              className={clsx(
                styles.roleToggleButton,
                currentRole === 'teamlead' && styles.roleToggleActive
              )}
              onClick={() => handleRoleToggle('teamlead')}
            >
              <i className="fas fa-users-cog"></i>
              <span>Team Lead</span>
            </button>
            <button
              className={clsx(
                styles.roleToggleButton,
                currentRole === 'agent' && styles.roleToggleActive
              )}
              onClick={() => handleRoleToggle('agent')}
            >
              <i className="fas fa-user"></i>
              <span>Agent</span>
            </button>
          </div>
        </div>
        
        {/* Navigation Items */}
        <div className={styles.navItems}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={clsx(
                styles.navItem,
                location.pathname === item.to && styles.activeNavItem
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
