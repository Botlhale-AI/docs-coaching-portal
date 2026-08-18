import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import clsx from 'clsx';
import sidebars from '@site/sidebars.js';
import styles from './styles.module.css';

// Both navigations are derived from sidebars.js so there is one list to keep
// current. Adding a page to a section there puts it in the sidebar and in this
// bar at the same time. See DOCUMENTATION_FRAMEWORK.md section 6, "one
// procedure lives in one place", which applies to navigation too.
const sectionItems = (label) =>
  (sidebars.docsSidebar.find((c) => c.label === label)?.items ?? []).map(
    (item) => ({ label: item.label, to: `/docs/${item.id}` })
  );

// Reference and Help is shared by both audiences. It is one entry rather than
// four, because seven items already fill the bar at common widths.
const helpItem = { label: 'Help', to: '/docs/FAQ' };

const teamLeadMenuItems = [...sectionItems('For Team Leads'), helpItem];
const agentMenuItems = [...sectionItems('For Agents'), helpItem];

export default function TopNavigationBar() {
  const location = useLocation();
  
  // Determine initial role from an explicit list of agent pages.
  // A substring test on 'Agent' was wrong: /docs/Interactions is an agent page
  // and does not contain the word, so it showed the team lead bar.
  const isAgentPath = agentMenuItems.some(
    (item) => location.pathname === item.to || location.pathname === item.to + '/'
  );
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
