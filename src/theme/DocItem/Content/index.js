import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
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
          
          {/* The description is deliberately not rendered here. It stays in
              frontmatter for the meta tag and search results, matching
              docs-vela. Rendering it put a summary directly above the opening
              paragraph, which said the same thing twice. Restore this block to
              show it again. */}
        </header>
      )}
      
      <MDXContent>{children}</MDXContent>
      
      {/* Feedback. The thumbs-up and thumbs-down buttons that were drafted here
          had no handler and nowhere to send a vote, so they are not rendered:
          a control that does nothing is the defect class CLAUDE.md warns about.
          A mail link with the page title in the subject works without a backend. */}
      <div className={styles.docFeedbackSection}>
        <div className={styles.docFeedbackTitle}>Was this page helpful?</div>
        <div className={styles.docFeedbackMessage}>
          Tell support what is missing or wrong:{' '}
          <a href={`mailto:support@botlhale.ai?subject=${encodeURIComponent(`Documentation feedback: ${metadata.title}`)}`}>
            support@botlhale.ai
          </a>
        </div>
      </div>
    </div>
  );
}
