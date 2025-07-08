import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const CardsList = [
  {
    title: 'Courses',
    description: 'Browse through all available training modules and educational content',
    icon: 'fas fa-graduation-cap',
    link: '/docs/Courses',
    color: 'orange',
  },
  {
    title: 'Awards',
    description: 'View achievements, badges and recognition for completed work',
    icon: 'fas fa-trophy',
    link: '/docs/Awards',
    color: 'blue',
  },
  {
    title: 'Dashboard',
    description: 'Monitor performance metrics and progress towards learning goals',
    icon: 'fas fa-chart-line',
    link: '/docs/Dashboard',
    color: 'green',
  },
  {
    title: 'Evaluation Cycles',
    description: 'Schedule and manage performance review periods and feedback sessions',
    icon: 'fas fa-sync',
    link: '/docs/Options',
    color: 'yellow',
  },
];

function FeatureCard({ title, description, icon, link, color }) {
  return (
    <Link 
      to={link} 
      className={clsx(styles.card, styles[`card-${color}`])}
    >
      <div className={styles.cardIcon}>
        <i className={clsx(icon, styles.icon)}></i>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <div className={styles.cardArrow}>
        <i className="fas fa-arrow-right"></i>
      </div>
    </Link>
  );
}

export default function FeatureCards() {
  return (
    <section className={styles.cardsSection}>
      <h2 className={styles.sectionTitle}>Coaching Portal Features</h2>
      <div className={styles.cardsGrid}>
        {CardsList.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
