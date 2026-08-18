import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import DocPageLayoutMain from '@theme/DocPage/Layout/Main';
import styles from './styles.module.css';

/**
 * The vertical doc sidebar is deliberately not rendered. The top navigation bar
 * already lists every page for the current audience, so a second copy duplicated
 * the navigation and left an empty column beside the text.
 *
 * sidebars.js is still required: it supplies the breadcrumbs, the previous and
 * next links, and the items the top bar is built from.
 */
export default function DocPageLayout({children}) {
  const [hiddenSidebar, setHiddenSidebar] = React.useState(false);

  return (
    <Layout>
      <div className={clsx(styles.docPage, 'modern-doc-layout')}>
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
