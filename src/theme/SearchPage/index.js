import React, { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import './styles.css';

function SearchPage() {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const searchContainerRef = useRef(null);

  // Parse the search query from the URL on component mount
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const params = new URLSearchParams(location.search);
      const q = params.get('q');
      if (q) {
        setSearchQuery(q);
      }
    }
  }, [location.search]);

  // Initialize DocSearch on the page
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM && searchQuery && siteConfig.themeConfig.algolia) {
      // We dynamically import docsearch here to avoid loading it in every page
      import('@docsearch/js').then(({ default: docsearch }) => {
        const { algolia } = siteConfig.themeConfig;
        if (!searchContainerRef.current) return;
        
        // Clean any existing docsearch container
        const existingContainer = document.getElementById('docsearch-search-results');
        if (existingContainer) {
          existingContainer.remove();
        }

        const searchResultsContainer = document.createElement('div');
        searchResultsContainer.id = 'docsearch-search-results';
        searchContainerRef.current.appendChild(searchResultsContainer);

        docsearch({
          container: '#docsearch-search-results',
          appId: algolia.appId,
          indexName: algolia.indexName,
          apiKey: algolia.apiKey,
          searchParameters: {
            ...algolia.searchParameters,
            query: searchQuery,
          },
          transformItems: (items) => {
            return items.map((item) => ({
              ...item,
              url: item.url.replace(siteConfig.url, ''),
            }));
          },
        });

        // Manually trigger a search
        const searchInput = document.querySelector('.DocSearch-Input');
        if (searchInput) {
          searchInput.value = searchQuery;
          searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
    }
  }, [searchQuery, siteConfig.themeConfig.algolia, siteConfig.url]);

  return (
    <Layout title="Search Results" description="Search results page">
      <Head>
        {/* Add required DocSearch styles */}
        <link rel="preconnect" href={`https://${siteConfig.themeConfig.algolia?.appId}-dsn.algolia.net`} crossOrigin="anonymous" />
      </Head>
      <div className="container margin-top--lg margin-bottom--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>
              <Translate id="theme.SearchPage.title">Search Results</Translate>
            </h1>
            
            {searchQuery ? (
              <>
                <p>
                  <Translate
                    id="theme.SearchPage.resultsFor"
                    values={{searchQuery}}>
                    {'Search results for "{searchQuery}"'}
                  </Translate>
                </p>
                <div ref={searchContainerRef} className="search-results-container">
                  {/* DocSearch results will be rendered here */}
                  <div className="loading-search">
                    <div className="loading-spinner"></div>
                    <p>Loading search results...</p>
                  </div>
                </div>
              </>
            ) : (
              <p>
                <Translate id="theme.SearchPage.emptyQuery">
                  Please enter a search term to see results.
                </Translate>
              </p>
            )}
            
            <div className="search-back-link">
              <Link to="/">
                <Translate id="theme.SearchPage.backToHome">← Back to Home</Translate>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SearchPage;
