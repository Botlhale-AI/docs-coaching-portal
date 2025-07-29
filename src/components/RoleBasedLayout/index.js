import React from 'react';
import { useLocation } from '@docusaurus/router';

export default function RoleBasedLayout({ children }) {
  const location = useLocation();
  
  // Add role-based data attributes to body for CSS targeting (keep this for styling purposes)
  React.useEffect(() => {
    const isAgentPath = location.pathname.includes('Agent');
    const userRole = isAgentPath ? 'agent' : 'teamlead';
    
    // Add role-based classes to document body
    document.body.setAttribute('data-current-role', userRole);
    
    // Cleanup function
    return () => {
      document.body.removeAttribute('data-current-role');
    };
  }, [location.pathname]);
  
  // No longer render SubNavbar - just return children
  return <>{children}</>;
}
