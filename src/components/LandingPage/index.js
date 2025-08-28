import React, { useState, useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import FeatureCards from '../FeatureCards';
import styles2 from '../../theme/TopNavigationBar/styles.module.css';

export default function LandingPage() {
  const {siteConfig} = useDocusaurusContext();
  const [selectedRole, setSelectedRole] = useState('teamlead');
  const heroRef = useRef(null);
  const chartRef = useRef(null);
  
  // Add intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.appear);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(`.${styles.animateIn}`);
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Reset SVG animations when role changes - using a safer implementation
  useEffect(() => {
    if (chartRef.current) {
      // Force SVG refresh by changing the data attribute
      const objectElement = chartRef.current.querySelector('object');
      if (objectElement) {
        const currentSrc = objectElement.getAttribute('data');
        objectElement.setAttribute('data', '');
        setTimeout(() => {
          objectElement.setAttribute('data', currentSrc);
        }, 10);
      }
    }
  }, [selectedRole]);

  // Load HowdyGo script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.howdygo.com/v1.2.1/index.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector('script[src="https://js.howdygo.com/v1.2.1/index.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  // Video data based on role
  const videoData = {
    teamlead: {
      videoId: 'xmDezghws3w',
      title: 'Team Lead Tutorial',
      description: 'Learn how team leads can effectively manage courses, track agent progress, and provide coaching through the platform.'
    },
    agent: {
      videoId: '7quhuuCEZgA',
      title: 'Agent Tutorial',
      description: 'Discover how agents can access courses, track their learning progress, and review their performance metrics.'
    }
  };
  
  // Role-specific workflow steps
  const workflowSteps = {
    teamlead: [
      {
        title: "Getting Started",
        description: "Set up your team, define roles, and configure initial settings to get started"
      },
      {
        title: "Team Dashboard Overview",
        description: "Access comprehensive performance metrics for your entire team at a glance"
      },
      {
        title: "Create & Assign Courses",
        description: "Develop custom training materials and assign them to agents based on performance needs"
      },
      {
        title: "Monitor Progress & Coach",
        description: "Track agent development and provide personalized coaching and feedback"
      },
      {
        title: "Recognize & Motivate",
        description: "Award achievements and incentives to recognize outstanding performance"
      }
    ],
    agent: [
      {
        title: "Getting Started",
        description: "Set up your team, define roles, and configure initial settings to get started"
      },
      {
        title: "Personal Dashboard",
        description: "View your individual performance metrics and track your development progress"
      },
      {
        title: "Review Interactions",
        description: "Analyze your calls and chats with detailed feedback and improvement suggestions"
      },
      {
        title: "Complete Training",
        description: "Access assigned courses, complete modules, and take quizzes to enhance your skills"
      },
      {
        title: "Earn Recognition",
        description: "Receive badges and awards as you achieve performance milestones"
      }
    ]
  };
  
  return (
    <div className={styles.landingContainer}>
      {/* Modern Hero Section */}
      <section className={styles.heroSection} ref={heroRef}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientBlur}></div>
        </div>
        
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.tagWrapper}>
                <span className={styles.tagline}>Documentation Hub</span>
              </div>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleLine}>Vela</span>
                <span className={styles.heroTitleMain}>{siteConfig.title}</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Your centralized hub for agent coaching, training resources, and performance analytics.
              </p>
              
              {/* Enhanced Role Selector */}
              <div className={`${styles.roleSelector} ${styles.animateIn}`}>
                <div className={styles.roleSelectorHeader}>
                  <h3 className={styles.roleSelectorTitle}>Choose Your Access Level</h3>
                  <p className={styles.roleSelectorDescription}>Select the appropriate view based on your role</p>
                </div>
                <div className={styles.roleButtons}>
                  <button 
                    className={`${styles.roleButton} ${selectedRole === 'teamlead' ? styles.roleButtonActive : ''}`}
                    onClick={() => setSelectedRole('teamlead')}
                  >
                    <i className="fas fa-users-cog"></i>
                    <div className={styles.roleButtonContent}>
                      <span className={styles.roleButtonLabel}>Team Lead</span>
                      <span className={styles.roleButtonDescription}>Manage teams & create content</span>
                    </div>
                  </button>
                  <button 
                    className={`${styles.roleButton} ${selectedRole === 'agent' ? styles.roleButtonActive : ''}`}
                    onClick={() => setSelectedRole('agent')}
                  >
                    <i className="fas fa-user"></i>
                    <div className={styles.roleButtonContent}>
                      <span className={styles.roleButtonLabel}>Agent</span>
                      <span className={styles.roleButtonDescription}>Access courses & track progress</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Updated CTA Button to match role selector style */}
              <div className={styles.heroCta}>
                <Link 
                  to={selectedRole === 'teamlead' ? "/docs/Dashboard" : "/docs/AgentDashboard"} 
                  className={styles.portalButton}
                >
                  <i className={selectedRole === 'teamlead' ? "fas fa-users-cog" : "fas fa-user"}></i>
                  <span>{selectedRole === 'teamlead' ? 'Access Team Lead Portal' : 'Access Agent Portal'}</span>
                </Link>
              </div>
            </div>
            
            {/* Enhanced 3D Dashboard Preview */}
            <div className={styles.heroVisual}>
              <div className={styles.dashboardPreview}>
                <div className={styles.dashboardHeader}>
                  <div className={styles.dashboardControls}>
                    <span className={styles.dashboardControl}></span>
                    <span className={styles.dashboardControl}></span>
                    <span className={styles.dashboardControl}></span>
                  </div>
                  <div className={styles.dashboardTitle}>
                    {selectedRole === 'teamlead' ? 'Team Performance Overview' : 'My Learning Progress'}
                  </div>
                </div>
                <div className={styles.dashboardBody}>
                  {/* Course Performance Metrics - Role-based content */}
                  <div className={styles.courseMetrics}>
                    {selectedRole === 'teamlead' ? (
                      <>
                        <div className={styles.metricCard}>
                          <div className={styles.awardBadge}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                              <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM7 10.82C5.84 10.4 5 9.3 5 8V7h2v3.82zM12 16c-1.65 0-3-1.35-3-3V5h6v8c0 1.65-1.35 3-3 3zm7-8c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                            </svg>
                          </div>
                          <span className={styles.metricValue}>12</span>
                          <span className={styles.metricLabel}>Awards Given</span>
                          <i className={`fas fa-cog ${styles.settingsIcon}`}></i>
                        </div>
                        <div className={styles.metricCard}>
                          <div className={`${styles.awardBadge} ${styles.awardGold}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                              <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zm-7 11c-1.65 0-3-1.35-3-3V5h6v8c0 1.65-1.35 3-3 3zm-2-6V7h4v3h-4zm5.03 3.2l-.8-1.5c.52-.31.97-.72 1.31-1.2l.93 1.4c-.49.69-1.11 1.26-1.44 1.3zm1.75-3.53c.1-.47.14-.97.14-1.48V7h2v1c0 1.49-1.03 2.13-2.14 1.67z"/>
                            </svg>
                          </div>
                          <span className={styles.metricValue}>Most Skillful</span>
                          <span className={styles.metricLabel}>Top Award</span>
                          <i className={`fas fa-cog ${styles.settingsIcon}`}></i>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={styles.metricCard}>
                          <div className={styles.awardBadge}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                              <circle cx="12" cy="12" r="7"/>
                              <path d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                          </div>
                          <span className={styles.metricValue}>5</span>
                          <span className={styles.metricLabel}>Awards Received</span>
                        </div>
                        <div className={styles.metricCard}>
                          <div className={`${styles.awardBadge} ${styles.awardGold}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                          </div>
                          <span className={styles.metricValue}>Best Performing Agent</span>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Enhanced Course Graphics with SVG Illustrations */}
                  <div className={styles.modernChart}>
                    <div className={styles.chartTitle}>
                      {selectedRole === 'teamlead' ? 'Available Training Modules' : 'My Learning Path'}
                    </div>
                    <div className={styles.courseGraphicsContainer}>
                      {selectedRole === 'teamlead' ? (
                        <div className={styles.teamLeadCourseDisplay}>
                          <div className={styles.courseModule}>
                            <div className={styles.courseIcon}>
                              {/* Communication SVG Icon - Optimized size */}
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48">
                                <defs>
                                  <linearGradient id="commGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#ff7e5f" />
                                    <stop offset="100%" stopColor="#feb47b" />
                                  </linearGradient>
                                </defs>
                                <circle cx="32" cy="32" r="28" fill="url(#commGrad)" opacity="0.2" />
                                <path d="M46,20H18c-2,0-3.5,1.5-3.5,3.5v14c0,2,1.5,3.5,3.5,3.5h7v7l10-7h11c2,0,3.5-1.5,3.5-3.5v-14C49.5,21.5,48,20,46,20z" 
                                      fill="url(#commGrad)" stroke="white" strokeWidth="1.5"/>
                                <circle cx="26" cy="30" r="1.5" fill="white" />
                                <circle cx="32" cy="30" r="1.5" fill="white" />
                                <circle cx="38" cy="30" r="1.5" fill="white" />
                              </svg>
                            </div>
                            <div className={styles.courseInfo}>
                              <p>Communication Skills</p>
                              <div className={styles.courseStats}>
                                <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#6b7280">
                                    <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,5c1.66,0,3,1.34,3,3s-1.34,3-3,3S9,9.66,9,8 S10.34,5,12,5z M12,19c-2.7,0-5.8-1.29-6-6c0-0.01,0.01-0.02,0.01-0.03C7.86,11.62,9.67,11,12,11s4.14,0.62,5.99,1.97 C18,17.7,14.7,19,12,19z"/>
                                    <circle cx="5" cy="9" r="2.5" fill="#6b7280" opacity="0.7"/>
                                    <circle cx="19" cy="9" r="2.5" fill="#6b7280" opacity="0.7"/>
                                  </svg>
                                  12 agents
                                </span>
                                <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#6b7280">
                                    <path d="M19,3h-1V2c0-0.55-0.45-1-1-1s-1,0.45-1,1v1H8V2c0-0.55-0.45-1-1-1S6,1.45,6,2v1H5C3.89,3,3.01,3.9,3.01,5L3,19c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V9h14V19z M19,7H5V5h14V7z"/>
                                    <rect x="8" y="12" width="2" height="2" fill="#6b7280"/>
                                    <rect x="11" y="12" width="2" height="2" fill="#6b7280"/>
                                    <rect x="14" y="12" width="2" height="2" fill="#6b7280"/>
                                  </svg>
                                  4 weeks
                                </span>
                              </div>
                              <div className={styles.enhancedProgressBar}>
                                <div className={styles.enhancedProgressFill} style={{width: '65%'}}>
                                  <div className={styles.progressPulse}></div>
                                </div>
                                <div className={styles.progressPoints}>
                                  {[0, 25, 50, 75, 100].map(point => (
                                    <div 
                                      key={point} 
                                      className={`${styles.progressPoint} ${point <= 65 ? styles.progressPointActive : ''}`}
                                      style={{left: `${point}%`}}
                                    ></div>
                                  ))}
                                </div>
                              </div>
                              <div className={styles.progressLabels}>
                                <span>Team Progress</span>
                                <span className={styles.progressPercentage}>65%</span>
                              </div>
                            </div>
                          </div>
                          <div className={styles.courseModule}>
                            <div className={styles.courseIcon}>
                              {/* Customer Service SVG Icon - Optimized size */}
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48">
                                <defs>
                                  <linearGradient id="custGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#11998e" />
                                    <stop offset="100%" stopColor="#38ef7d" />
                                  </linearGradient>
                                </defs>
                                <circle cx="32" cy="32" r="28" fill="url(#custGrad)" opacity="0.2" />
                                <path d="M42,24h-4v-5c0-3.3-2.7-6-6-6s-6,2.7-6,6v5h-4c-1,0-1.8,0.8-1.8,1.8v16c0,1,0.8,1.8,1.8,1.8h20c1,0,1.8-0.8,1.8-1.8v-16C43.8,24.8,43,24,42,24z" 
                                      fill="url(#custGrad)" stroke="white" strokeWidth="1.5"/>
                                <circle cx="32" cy="35" r="3" fill="white"/>
                                <path d="M28,19v5h8v-5c0-2.2-1.8-4-4-4S28,16.8,28,19z" fill="white" opacity="0.8"/>
                              </svg>
                            </div>
                            <div className={styles.courseInfo}>
                              <h4>Customer Service Excellence</h4>
                              <div className={styles.courseStats}>
                                <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#6b7280">
                                    <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,5c1.66,0,3,1.34,3,3s-1.34,3-3,3S9,9.66,9,8 S10.34,5,12,5z M12,19c-2.7,0-5.8-1.29-6-6c0-0.01,0.01-0.02,0.01-0.03C7.86,11.62,9.67,11,12,11s4.14,0.62,5.99,1.97 C18,17.7,14.7,19,12,19z"/>
                                    <circle cx="5" cy="9" r="2.5" fill="#6b7280" opacity="0.7"/>
                                    <circle cx="19" cy="9" r="2.5" fill="#6b7280" opacity="0.7"/>
                                  </svg>
                                  8 agents
                                </span>
                                <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#6b7280">
                                    <path d="M19,3h-1V2c0-0.55-0.45-1-1-1s-1,0.45-1,1v1H8V2c0-0.55-0.45-1-1-1S6,1.45,6,2v1H5C3.89,3,3.01,3.9,3.01,5L3,19c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V9h14V19z M19,7H5V5h14V7z"/>
                                    <rect x="8" y="12" width="2" height="2" fill="#6b7280"/>
                                    <rect x="11" y="12" width="2" height="2" fill="#6b7280"/>
                                    <rect x="14" y="12" width="2" height="2" fill="#6b7280"/>
                                  </svg>
                                  3 weeks
                                </span>
                              </div>
                              <div className={styles.enhancedProgressBar}>
                                <div className={styles.enhancedProgressFill} style={{width: '78%'}}>
                                  <div className={styles.progressPulse}></div>
                                </div>
                                <div className={styles.progressPoints}>
                                  {[0, 25, 50, 75, 100].map(point => (
                                    <div 
                                      key={point} 
                                      className={`${styles.progressPoint} ${point <= 78 ? styles.progressPointActive : ''}`}
                                      style={{left: `${point}%`}}
                                    ></div>
                                  ))}
                                </div>
                              </div>
                              <div className={styles.progressLabels}>
                                <span>Team Progress</span>
                                <span className={styles.progressPercentage}>78%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className={styles.agentCourseDisplay}>
                          <div className={styles.courseCard}>
                            <div className={styles.courseCardHeader}>
                              <div className={styles.courseBadge}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#ffffff">
                                  <path d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M13,14h-2v-2h2V14z M13,10h-2V6h2V10z"/>
                                </svg>
                              </div>
                              <h4>Communication Skills</h4>
                              <span className={styles.courseCompletion}>
                                <svg className={styles.circularProgress}>
                                  <circle cx="12" cy="12" r="10" fill="none" stroke="#e5e7eb" strokeWidth="2.5"/>
                                  <circle 
                                    cx="12" 
                                    cy="12" 
                                    r="10" 
                                    fill="none" 
                                    stroke="#ffffff" 
                                    strokeWidth="2.5"
                                    strokeDasharray="62.8"
                                    strokeDashoffset="12.56"
                                    strokeLinecap="round"
                                  />
                                </svg>
                                80%
                              </span>
                            </div>
                            <div className={styles.courseProgress}>
                              <div className={styles.moduleItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                  <defs>
                                    <linearGradient id="checkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stopColor="#11998e" />
                                      <stop offset="100%" stopColor="#38ef7d" />
                                    </linearGradient>
                                  </defs>
                                  <circle cx="12" cy="12" r="10" fill="url(#checkGrad)"/>
                                  <path d="M9,16.17L5.83,13l-1.42,1.41L9,19L21,7l-1.41-1.41L9,16.17z" fill="white"/>
                                </svg>
                                <span>Active Listening</span>
                              </div>
                              <div className={styles.moduleItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                  <defs>
                                    <linearGradient id="checkGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stopColor="#11998e" />
                                      <stop offset="100%" stopColor="#38ef7d" />
                                    </linearGradient>
                                  </defs>
                                  <circle cx="12" cy="12" r="10" fill="url(#checkGrad2)"/>
                                  <path d="M9,16.17L5.83,13l-1.42,1.41L9,19L21,7l-1.41-1.41L9,16.17z" fill="white"/>
                                </svg>
                                <span>Customer Empathy</span>
                              </div>
                              <div className={styles.moduleItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                  <circle cx="12" cy="12" r="10" fill="#e5e7eb"/>
                                </svg>
                                <span>Conflict Resolution</span>
                              </div>
                              <div className={styles.moduleItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                  <circle cx="12" cy="12" r="10" fill="#e5e7eb"/>
                                </svg>
                                <span>Final Assessment</span>
                              </div>
                            </div>
                          </div>
                          <div className={styles.courseCard}>
                            <div className={styles.courseCardHeader}>
                              <div className={styles.courseBadge}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#ffffff">
                                  <path d="M19.3,8.9l-4.2-4.2c-0.4-0.4-1-0.4-1.4,0L12,6.3l-1.7-1.7c-0.4-0.4-1-0.4-1.4,0l-4.2,4.2c-0.4,0.4-0.4,1,0,1.4L6.3,12l-1.7,1.7c-0.4,0.4-0.4,1,0,1.4l4.2,4.2c0.4,0.4,1,0.4,1.4,0l1.7-1.7l1.7,1.7c0.4,0.4,1,0.4,1.4,0l4.2-4.2c0.4-0.4,0.4-1,0-1.4L17.7,12l1.7-1.7C19.7,9.9,19.7,9.3,19.3,8.9z M12,16c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C16,14.2,14.2,16,12,16z"/>
                                  <circle cx="12" cy="12" r="2" fill="white"/>
                                </svg>
                              </div>
                              <h4>Problem Solving</h4>
                              <span className={styles.courseCompletion}>
                                <svg className={styles.circularProgress}>
                                  <circle cx="12" cy="12" r="10" fill="none" stroke="#e5e7eb" strokeWidth="2.5"/>
                                  <circle 
                                    cx="12" 
                                    cy="12" 
                                    r="10" 
                                    fill="none" 
                                    stroke="#ffffff" 
                                    strokeWidth="2.5"
                                    strokeDasharray="62.8"
                                    strokeDashoffset="34.54"
                                    strokeLinecap="round"
                                  />
                                </svg>
                                45%
                              </span>
                            </div>
                            <div className={styles.courseProgress}>
                              <div className={styles.moduleItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                  <defs>
                                    <linearGradient id="checkGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stopColor="#11998e" />
                                      <stop offset="100%" stopColor="#38ef7d" />
                                    </linearGradient>
                                  </defs>
                                  <circle cx="12" cy="12" r="10" fill="url(#checkGrad3)"/>
                                  <path d="M9,16.17L5.83,13l-1.42,1.41L9,19L21,7l-1.41-1.41L9,16.17z" fill="white"/>
                                </svg>
                                <span>Issue Identification</span>
                              </div>
                              <div className={styles.moduleItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                  <defs>
                                    <linearGradient id="checkGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stopColor="#11998e" />
                                      <stop offset="100%" stopColor="#38ef7d" />
                                    </linearGradient>
                                  </defs>
                                  <circle cx="12" cy="12" r="10" fill="url(#checkGrad4)"/>
                                  <path d="M9,16.17L5.83,13l-1.42,1.41L9,19L21,7l-1.41-1.41L9,16.17z" fill="white"/>
                                </svg>
                                <span>Root Cause Analysis</span>
                              </div>
                              <div className={styles.moduleItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                  <defs>
                                    <linearGradient id="spinnerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                      <stop offset="0%" stopColor="#f59e0b" />
                                      <stop offset="100%" stopColor="#d97706" />
                                    </linearGradient>
                                  </defs>
                                  <circle cx="12" cy="12" r="10" fill="url(#spinnerGrad)"/>
                                  <path className={styles.spinnerPath} d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z" fill="white"/>
                                  <path d="M16.24,7.76C15.07,6.59,13.54,6,12,6L12,12L16.24,16.24c1.17-1.17,1.76-2.7,1.76-4.24C18,10.46,17.41,8.93,16.24,7.76z" fill="white"/>
                                </svg>
                                <span>Solution Development</span>
                              </div>
                              <div className={styles.moduleItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                  <circle cx="12" cy="12" r="10" fill="#e5e7eb"/>
                                </svg>
                                <span>Final Assessment</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Workflow Section with Role-Specific Content */}
      <section className={styles.workflowSection}>
        <div className="container">
          <div className={`${styles.sectionHeader} ${styles.animateIn}`}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <p className={styles.sectionSubtitle}>
              {selectedRole === 'teamlead' 
                ? 'Your journey to leading and coaching your team effectively'
                : 'Your journey to skill development and performance excellence'}
            </p>
          </div>
          
          <div className={styles.workflowContainer}>
            {workflowSteps[selectedRole].map((step, index) => (
              <React.Fragment key={index}>
                <div className={`${styles.workflowStep} ${styles.animateIn}`}>
                  <div className={styles.workflowNode}>
                    <div className={styles.workflowNodeInner}>{index + 1}</div>
                    <div className={styles.workflowNodeRing}></div>
                  </div>
                  <div className={styles.workflowContent}>
                    <h3 className={styles.workflowTitle}>{step.title}</h3>
                    <p className={styles.workflowDescription}>
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {index < workflowSteps[selectedRole].length - 1 && (
                  <div className={styles.workflowConnector}>
                    <div className={styles.workflowLine}></div>
                    <div className={styles.workflowPulse}></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Agent-Specific Features Section (visible only when Agent role is selected) */}
      {selectedRole === 'agent' && (
        <section className={styles.agentFeaturesSection}>
          <div className="container">
            <div className={`${styles.sectionHeader} ${styles.animateIn}`}>
              <h2 className={styles.sectionTitle}>Agent Portal Walkthrough</h2>
              <p className={styles.sectionSubtitle}>
                Everything you need to know to navigate the platform effectively
              </p>
            </div>
            
            <div className={styles.agentFeaturesGrid}>
              <div className={`${styles.agentFeatureCard} ${styles.animateIn}`}>
                <div className={styles.agentFeatureIcon}>
                  <i className="fas fa-sign-in-alt"></i>
                </div>
                <h3 className={styles.agentFeatureTitle}>Sign In</h3>
                <p className={styles.agentFeatureDescription}>
                  Securely log in and access your personalized portal with your assigned credentials
                </p>
              </div>
              
              <div className={`${styles.agentFeatureCard} ${styles.animateIn}`}>
                <div className={styles.agentFeatureIcon}>
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                <h3 className={styles.agentFeatureTitle}>Dashboard</h3>
                <p className={styles.agentFeatureDescription}>
                  View performance metrics, compare to team averages, and use filters for focused insights
                </p>
              </div>
              
              <div className={`${styles.agentFeatureCard} ${styles.animateIn}`}>
                <div className={styles.agentFeatureIcon}>
                  <i className="fas fa-phone-alt"></i>
                </div>
                <h3 className={styles.agentFeatureTitle}>Interactions</h3>
                <p className={styles.agentFeatureDescription}>
                  Analyze calls and chats using advanced filtering, smart summaries, and performance scorecards
                </p>
              </div>
              
              <div className={`${styles.agentFeatureCard} ${styles.animateIn}`}>
                <div className={styles.agentFeatureIcon}>
                  <i className="fas fa-book"></i>
                </div>
                <h3 className={styles.agentFeatureTitle}>Courses</h3>
                <p className={styles.agentFeatureDescription}>
                  Track assigned courses, view materials, take quizzes, and monitor your learning outcomes
                </p>
              </div>
              
              <div className={`${styles.agentFeatureCard} ${styles.animateIn}`}>
                <div className={styles.agentFeatureIcon}>
                  <i className="fas fa-trophy"></i>
                </div>
                <h3 className={styles.agentFeatureTitle}>Awards</h3>
                <p className={styles.agentFeatureDescription}>
                  Access and download your performance-based recognitions and filter by time periods
                </p>
              </div>
              
              <div className={`${styles.agentFeatureCard} ${styles.animateIn}`}>
                <div className={styles.agentFeatureIcon}>
                  <i className="fas fa-cog"></i>
                </div>
                <h3 className={styles.agentFeatureTitle}>Admin</h3>
                <p className={styles.agentFeatureDescription}>
                  View notifications and update your profile and security settings with ease
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

             {/* Interactive Demo Section */}
       <section className={styles.videoSection}>
         <div className="container">
           <div className={`${styles.sectionHeader} ${styles.animateIn}`}>
             <h2 className={styles.sectionTitle}>Interact with Coaching (Demo)</h2>
             <p className={styles.sectionSubtitle}>
               Find below an interactive demo for Coaching in general.
             </p>
           </div>
           
           <div className={`${styles.demoContainer} ${styles.animateIn}`} style={{
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             width: '100%',
             padding: '0 20px'
           }}>
             <div
               id="howdygo-embed"
               style={{
                 width: '100%',
                 maxWidth: '1440px',
                 backgroundColor: '#ffffff',
                 border: '1px solid #e2e8f0',
                 borderRadius: '12px',
                 overflow: 'hidden',
                 boxShadow: '0px 0px 1px rgba(45, 55, 72, 0.05), 0px 4px 8px rgba(45, 55, 72, 0.1)'
               }}
             >
              <div
                id="howdygo-wrapper"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '0',
                  paddingBottom: 'calc(54.02777777777777% + 40px)'
                }}
              >
                <iframe
                  id="howdygo-frame"
                  src="https://app.howdygo.com/prescreen-embed/1619b05a-4e52-4d1b-a51b-32bc316fda86?mobileStrategy=inline&launchButton=Interact+with+Coaching"
                  frameBorder="0"
                  scrolling="no"
                  allow="clipboard-write"
                  webkitAllowFullScreen
                  mozAllowFullScreen
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
       </section>

       {/* Video Tutorial Section */}
       <section className={styles.videoSection}>
         <div className="container">
           <div className={`${styles.sectionHeader} ${styles.animateIn}`}>
             <h2 className={styles.sectionTitle}>How-To Guide Video</h2>
             <p className={styles.sectionSubtitle}>
               Watch this helpful tutorial to get started with the {selectedRole === 'teamlead' ? 'team lead' : 'agent'} features
             </p>
           </div>
           
           <div className={`${styles.videoContainer} ${styles.animateIn}`}>
             <iframe 
               className={styles.videoFrame}
               src={`https://www.youtube.com/embed/${videoData[selectedRole].videoId}`}
               title={videoData[selectedRole].title}
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
             ></iframe>
           </div>
           <p className={styles.videoDescription}>
             {videoData[selectedRole].description}
           </p>
         </div>
       </section>
    </div>
  );
}
