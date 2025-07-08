import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import styles from './styles.module.css';

/**
 * Custom component to enhance the documentation page with additional visual elements
 * and improved readability
 */
export default function DocItemContent({children}) {
  const {metadata, frontMatter} = useDoc();
  
  // Helper function to check if a value is a valid date
  const isValidDate = (date) => {
    return date instanceof Date && !isNaN(date);
  };
  
  // Safely get ISO string from date if it's valid
  const getDateTimeAttribute = (dateValue) => {
    if (dateValue && typeof dateValue === 'object' && typeof dateValue.toISOString === 'function') {
      return dateValue.toISOString();
    }
    return undefined;
  };
  
  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {(metadata.title || frontMatter.hide_title !== true) && (
        <header className={styles.docHeader}>
          {frontMatter.hide_title !== true && (
            <Heading as="h1" className={styles.docTitle}>
              {metadata.title}
            </Heading>
          )}
          
          {frontMatter.description && (
            <p className={styles.docDescription}>{frontMatter.description}</p>
          )}
          
          {/* Last updated information */}
          {(metadata.formattedLastUpdatedAt) && (
            <div className={styles.docLastUpdated}>
              <i className="fa-solid fa-calendar-check" aria-hidden="true"></i>
              {' Last updated: '}
              <time dateTime={getDateTimeAttribute(metadata.lastUpdatedAt)}>
                {metadata.formattedLastUpdatedAt}
              </time>
            </div>
          )}

          <div className={styles.docDivider}></div>
        </header>
      )}
      
      <MDXContent>{children}</MDXContent>
      
      {/* Feedback section */}
      <div className={styles.docFeedbackSection}>
        <div className={styles.docFeedbackTitle}>Was this page helpful?</div>
        <div className={styles.docFeedbackButtons}>
          <button className={styles.docFeedbackButton}>
            <i className="fa-solid fa-thumbs-up" aria-hidden="true"></i> Yes
          </button>
          <button className={styles.docFeedbackButton}>
            <i className="fa-solid fa-thumbs-down" aria-hidden="true"></i> No
          </button>
        </div>
        <div className={styles.docFeedbackMessage}>
          Have suggestions? <a href="mailto:support@botlhale.ai">Contact our support team</a>
        </div>
      </div>
    </div>
  );
}
