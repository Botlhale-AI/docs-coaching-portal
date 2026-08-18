import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import DocPageLayoutMain from '@theme/DocPage/Layout/Main';
import SubNavbar from '@site/src/components/SubNavbar';
import styles from './styles.module.css';

export default function DocPageLayout({children}) {
  const [hiddenSidebar, setHiddenSidebar] = React.useState(false);

  return (
    <Layout>
      <SubNavbar />
      
      <div className={clsx(styles.docPage, 'modern-doc-layout')}>
        {/* The vertical sidebar is deliberately not rendered. SubNavbar above
            already lists every page for the current audience, so a second copy
            duplicated the navigation and left an empty column beside the text.
            sidebars.js is still required: it supplies the breadcrumbs and the
            previous/next links. Restore this block to bring the column back. */}
        <DocPageLayoutMain
          hiddenSidebar={hiddenSidebar}
          setSidebarHidden={setHiddenSidebar}
        >
          {children}
        </DocPageLayoutMain>
      </div>
    </Layout>
  );
}
