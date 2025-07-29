import React from 'react';
import RoleBasedLayout from '../components/RoleBasedLayout';

export default function Root({ children }) {
  return (
    <RoleBasedLayout>
      {children}
    </RoleBasedLayout>
  );
}
