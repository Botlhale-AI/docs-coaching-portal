import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import RoleBasedNavbar from '../../components/RoleBasedNavbar';

export default function Navbar(props) {
  return (
    <>
      <OriginalNavbar {...props} />
      <RoleBasedNavbar />
    </>
  );
}
