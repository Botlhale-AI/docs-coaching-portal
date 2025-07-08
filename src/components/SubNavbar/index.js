import React from 'react';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';
import {useActiveDocContext} from '@docusaurus/plugin-content-docs/client';
import {useAllDocsData} from '@docusaurus/plugin-content-docs/client';

function SubNavbar() {
  const location = useLocation();
  const activeDocContext = useActiveDocContext();
  const allDocsData = useAllDocsData();
  const currentDocData = allDocsData[activeDocContext.activeDoc?.pluginId || 'default'];
  const activeSidebarName = activeDocContext.activeSidebar;

  // If we're not in the docs section, don't render the sub navbar
  if (!activeDocContext.activeDoc) {
    return null;
  }

  // Get the current active category
  const currentCategory = activeDocContext.activeDoc.sidebar === activeSidebarName 
    ? currentDocData?.sidebars[activeSidebarName]?.find(item => 
        item.type === 'category' && activeDocContext.activeDoc.id.startsWith(item.label)
      )
    : null;

  // If no active category found, render a simplified sub navbar
  if (!currentCategory) {
    const topLevelCategories = currentDocData?.sidebars[activeSidebarName]?.filter(
      item => item.type === 'category'
    ) || [];

    return (
      <div className="sub-navbar">
        <div className="sub-navbar__items">
          {topLevelCategories.map((category, idx) => (
            <Link
              key={idx}
              to={`/${category.items[0]}`}
              className={clsx(
                'sub-navbar__item',
                location.pathname.includes(`/${category.items[0]}`) && 'sub-navbar__item--active'
              )}
            >
              {category.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Render sub navbar with items from the current category
  return (
    <div className="sub-navbar">
      <div className="sub-navbar__items">
        {currentCategory.items.map((item, idx) => (
          <Link
            key={idx}
            to={`/${item}`}
            className={clsx(
              'sub-navbar__item',
              location.pathname === `/${item}` && 'sub-navbar__item--active'
            )}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SubNavbar;
