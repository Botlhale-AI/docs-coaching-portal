import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const TeamLeadCardsList = [
  {
    title: 'Course Management',
    description: 'Create, manage, and assign training modules to your team members',
    icon: 'fas fa-graduation-cap',
    link: '/docs/team-leads/create-and-assign-courses',
    color: 'orange',
  },
  {
    title: 'Awards & Recognition',
    description: 'Manage achievements, badges, and recognition for your team',
    icon: 'fas fa-trophy',
    link: '/docs/team-leads/recognise-good-work',
    color: 'blue',
  },
  {
    title: 'Team Dashboard',
    description: 'Monitor team performance metrics and progress towards goals',
    icon: 'fas fa-chart-line',
    link: '/docs/team-leads/coaching-dashboard',
    color: 'green',
  },
  {
    title: 'Evaluation Cycles',
    description: 'Schedule and manage performance review periods and feedback sessions',
    icon: 'fas fa-sync',
    link: '/docs/team-leads/coaching-preferences',
    color: 'yellow',
  },
];

const AgentCardsList = [
  {
    title: 'My Dashboard',
    description: 'View your performance metrics and track your learning progress',
    icon: 'fas fa-tachometer-alt',
    link: '/docs/agents/personal-performance',
    color: 'green',
  },
  {
    title: 'My Courses',
    description: 'Access assigned training modules and track completion status',
    icon: 'fas fa-book-open',
    link: '/docs/agents/your-courses',
    color: 'orange',
  },
  {
    title: 'My Awards',
    description: 'View your achievements, badges, and recognition received',
    icon: 'fas fa-medal',
    link: '/docs/agents/your-awards',
    color: 'blue',
  },
  {
    title: 'Interactions',
    description: 'Review your call recordings and chat interactions with detailed analysis',
    icon: 'fas fa-phone',
    link: '/docs/agents/your-interactions',
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

export default function FeatureCards({ selectedRole = 'teamlead' }) {
  const cardsList = selectedRole === 'teamlead' ? TeamLeadCardsList : AgentCardsList;
  
  return (
    <section className={styles.cardsSection}>
      <div className={styles.cardsGrid}>
        {cardsList.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
