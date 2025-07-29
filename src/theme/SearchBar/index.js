import React, {useRef, useCallback, useState} from 'react';
import {createPortal} from 'react-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useHistory} from '@docusaurus/router';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import {DocSearchButton, useDocSearchKeyboardEvents} from '@docsearch/react';
import Head from '@docusaurus/Head';
import '@docsearch/css'; // Import the DocSearch CSS directly
import styles from './styles.module.css';

// Load DocSearch modal dynamically to reduce initial bundle size
let DocSearchModal = null;

function DocSearch() {
  const {siteConfig} = useDocusaurusContext();
  const {withBaseUrl} = useBaseUrlUtils();
  const history = useHistory();
  const searchButtonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState('');
  const searchContainer = useRef(null);
  
  // Access Algolia config from siteConfig.themeConfig
  const {algolia} = siteConfig.themeConfig;
  
  // Safety check - don't render if algolia config is missing
  if (!algolia) {
    console.warn('DocSearch: Algolia config is missing');
    return null;
  }

  const importDocSearchModalIfNeeded = useCallback(() => {
    if (DocSearchModal) {
      return Promise.resolve();
    }

    return import('@docsearch/react/modal').then((mod) => {
      DocSearchModal = mod.default;
    });
  }, []);

  const onOpen = useCallback(() => {
    importDocSearchModalIfNeeded().then(() => {
      setIsOpen(true);
      searchContainer.current = document.createElement('div');
      document.body.appendChild(searchContainer.current);
      
      createPortal(
        <DocSearchModal
          initialScrollY={window.scrollY}
          onClose={() => {
            setIsOpen(false);
            document.body.removeChild(searchContainer.current);
            searchContainer.current = null;
          }}
          initialQuery={initialQuery}
          navigator={{
            navigate({itemUrl}) {
              const parsedUrl = new URL(itemUrl);
              history.push(
                withBaseUrl(`${parsedUrl.pathname}${parsedUrl.hash}`),
              );
            },
          }}
          transformItems={(items) => {
            return items.map((item) => {
              const url = new URL(item.url);
              return {
                ...item,
                url: withBaseUrl(`${url.pathname}${url.hash}`),
              };
            });
          }}
          placeholder="Search docs"
          // Pass the algolia parameters directly from config
          appId={algolia.appId}
          apiKey={algolia.apiKey}
          indexName={algolia.indexName}
          searchParameters={{
            ...algolia.searchParameters,
          }}
        />,
        searchContainer.current,
      );
    });
  }, [importDocSearchModalIfNeeded, initialQuery, history, withBaseUrl, algolia]);

  const onClose = useCallback(() => {
    setIsOpen(false);
    if (searchContainer.current) {
      document.body.removeChild(searchContainer.current);
      searchContainer.current = null;
    }
  }, []);

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput: setInitialQuery,
    searchButtonRef,
  });

  return (
    <>
      <Head>
        <link rel="preconnect" href={`https://${algolia.appId}-dsn.algolia.net`} crossOrigin="anonymous" />
      </Head>
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
        // className={styles.searchButton}
      />
    </>
  );
}

export default function SearchBarWrapper() {
  return <DocSearch />;
}
