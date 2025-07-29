import React from 'react';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';

const teamLeadMainNavItems = [
  { label: 'Dashboard', to: '/docs/Dashboard', icon: 'fas fa-tachometer-alt' },
  { label: 'Courses', to: '/docs/Courses', icon: 'fas fa-book' },
  { label: 'Awards', to: '/docs/Awards', icon: 'fas fa-trophy' },
  { label: 'Progress', to: '/docs/Progress', icon: 'fas fa-chart-line' },
  { label: 'Preferences', to: '/docs/Preferences', icon: 'fas fa-cog' },
];

const agentMainNavItems = [
  { label: 'My Dashboard', to: '/docs/AgentDashboard', icon: 'fas fa-tachometer-alt' },
  { label: 'My Courses', to: '/docs/AgentCourses', icon: 'fas fa-book' },
  { label: 'My Awards', to: '/docs/AgentAwards', icon: 'fas fa-trophy' },
  { label: 'Interactions', to: '/docs/Interactions', icon: 'fas fa-comments' },
  { label: 'Admin', to: '/docs/AgentAdmin', icon: 'fas fa-user-cog' },
];

export default function RoleBasedNavbar() {
  const location = useLocation();
  
  // Determine role based on current path
  const isAgentPath = location.pathname.includes('Agent');
  const currentRole = isAgentPath ? 'agent' : 'teamlead';
  
  // Only show role-based nav on docs pages
  if (!location.pathname.startsWith('/docs/')) {
    return null;
  }
  
  const navItems = currentRole === 'agent' ? agentMainNavItems : teamLeadMainNavItems;
  
  return (
    <div className="role-based-navbar">
      <div className="role-nav-container">
        <div className="role-indicator">
          <i className={currentRole === 'teamlead' ? 'fas fa-users-cog' : 'fas fa-user'}></i>
          <span>{currentRole === 'teamlead' ? 'Team Lead Portal' : 'Agent Portal'}</span>
        </div>
        <nav className="role-nav-items">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={`role-nav-item ${location.pathname === item.to ? 'active' : ''}`}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
