import React from 'react';
import clsx from 'clsx';
import {useDocsSidebar} from '@docusaurus/theme-common/internal';
import Layout from '@theme/Layout';
import DocSidebar from '@theme/DocSidebar';
import DocPageLayoutMain from '@theme/DocPage/Layout/Main';
import DocPageLayoutSidebar from '@theme/DocPage/Layout/Sidebar';
import SubNavbar from '@site/src/components/SubNavbar';
import styles from './styles.module.css';

export default function DocPageLayout({children}) {
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = React.useState(false);
  const [hiddenSidebar, setHiddenSidebar] = React.useState(false);

  return (
    <Layout>
      <SubNavbar />
      
      <div className={styles.docPage}>
        {sidebar && (
          <DocPageLayoutSidebar
            sidebar={sidebar.items}
            hiddenSidebarContainer={hiddenSidebarContainer}
            setHiddenSidebarContainer={setHiddenSidebarContainer}
          />
        )}
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
