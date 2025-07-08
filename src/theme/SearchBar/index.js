import React, {useState, useRef, useCallback, useMemo} from 'react';
import {createPortal} from 'react-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useHistory} from '@docusaurus/router';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import {isRegexpStringMatch, useSearchLinkCreator} from '@docusaurus/theme-common';
import {DocSearchButton, useDocSearchKeyboardEvents} from '@docsearch/react';
import {useAlgoliaContextualFacetFilters} from '@docusaurus/theme-search-algolia/client';
import Translate from '@docusaurus/Translate';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

// Custom search component with orange highlighting
function SearchBar() {
  const {siteConfig} = useDocusaurusContext();
  const {withBaseUrl} = useBaseUrlUtils();
  const history = useHistory();
  const searchContainer = useRef(null);
  const searchButtonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState('');
  
  const contextualSearchFacetFilters = useAlgoliaContextualFacetFilters();

  const configFacetFilters = siteConfig.themeConfig.algolia?.contextualSearch
    ? contextualSearchFacetFilters
    : [];

  const facetFilters = configFacetFilters;

  const searchPagePath = withBaseUrl(`search`);
  
  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onInput = useCallback(
    (event) => {
      const searchQuery = event.target.value;
      if (searchQuery.length >= 3) {
        history.push(`${searchPagePath}?q=${searchQuery}`);
      }
    },
    [history, searchPagePath],
  );

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });

  return (
    <div className="custom-search-wrapper" ref={searchContainer}>
      <DocSearchButton
        onTouchStart={onOpen}
        onMouseDown={onOpen}
        onFocus={onOpen}
        onKeyDown={onOpen}
        ref={searchButtonRef}
        translations={{
          buttonText: 'Search',
          buttonAriaLabel: 'Search',
        }}
      />
    </div>
  );
}

export default function SearchBarWrapper() {
  return <SearchBar />;
}
