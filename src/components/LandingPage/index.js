import React, { useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import FeatureCards from '../FeatureCards';


export default function LandingPage() {
  const {siteConfig} = useDocusaurusContext();
  // The role toggle has gone: the sidebar splits by the same two audiences,
  // and the preview below is decoration rather than a view of anyone's data.
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

  // Refresh the inline SVG once on mount. It used to re-run when the role changed.
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
  }, []);

  // Tutorial videos. Only published ones belong here: an unavailable id renders
  // as a "Video unavailable" box, which reads as a broken site.
  //
  // The agent tutorial (7quhuuCEZgA) was removed on 2026-08-18. Its YouTube
  // oembed endpoint returns 404, so the video is private or deleted. Add it
  // back once there is a working id, alongside a teamlead-style entry.
  const videoData = {
    teamlead: {
      videoId: 'xmDezghws3w',
      title: 'Team Lead Tutorial',
      description: 'Learn how team leads can effectively manage courses, track agent progress, and provide coaching through the platform.'
    }
  };
  
  // The agent's journey through the portal, in the order they meet it. Each
  // step links to the page that covers it, so this section is a way into the
  // documentation rather than a list of claims about it. The order matches the
  // For Agents sidebar section.
  const agentJourney = [
    {
      title: "Sign In",
      description: "Sign in to the Coaching Portal for the first time and find your way around.",
      to: "/docs/agents/getting-started",
    },
    {
      title: "Read Your Dashboard",
      description: "Your auto-fail rate and category scores, each shown against your team's.",
      to: "/docs/agents/personal-performance",
    },
    {
      title: "Review Your Interactions",
      description: "Open the calls and chats behind those scores, with transcripts and scorecards.",
      to: "/docs/agents/your-interactions",
    },
    {
      title: "Work Through Your Courses",
      description: "Read the material, take the quiz, and see how many attempts you have left.",
      to: "/docs/agents/your-courses",
    },
    {
      title: "Collect Your Awards",
      description: "See what you have been presented and download the certificate.",
      to: "/docs/agents/your-awards",
    },
    {
      title: "Manage Your Account",
      description: "Read your notifications, check your details, and change your password.",
      to: "/docs/agents/your-account",
    },
  ];

  // Workflow steps. Only the team lead sequence is rendered; the agent journey
  // above covers the other audience.
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
        description: "Track agent development and provide personalised coaching and feedback"
      },
      {
        title: "Recognise & Motivate",
        description: "Award achievements and incentives to recognise outstanding performance"
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
        description: "Analyse your calls and chats with detailed feedback and improvement suggestions"
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
                Your centralised hub for agent coaching, training resources, and performance analytics.
              </p>
              
              {/* Two entry points, one per audience.
                  This was a stateful role toggle that switched the whole page
                  between a team lead and an agent view. It duplicated the
                  sidebar, which now splits by the same two audiences, and it
                  hid half the site behind a button nobody knew to press. These
                  link straight into the two sections instead. */}
              <div className={`${styles.roleSelector} ${styles.animateIn}`}>
                <div className={styles.roleSelectorHeader}>
                  <h3 className={styles.roleSelectorTitle}>Where would you like to start?</h3>
                  <p className={styles.roleSelectorDescription}>The documentation is split by role. Pick the one that describes you.</p>
                </div>
                <div className={styles.roleButtons}>
                  <Link to="/docs/team-leads" className={styles.roleButton}>
                    <i className="fas fa-users-cog"></i>
                    <div className={styles.roleButtonContent}>
                      <span className={styles.roleButtonLabel}>For Team Leads</span>
                      <span className={styles.roleButtonDescription}>Run coaching, build courses, track progress</span>
                    </div>
                  </Link>
                  <Link to="/docs/agents" className={styles.roleButton}>
                    <i className="fas fa-user"></i>
                    <div className={styles.roleButtonContent}>
                      <span className={styles.roleButtonLabel}>For Agents</span>
                      <span className={styles.roleButtonDescription}>Read your scores, take courses, collect awards</span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className={styles.heroCta}>
                <Link to="/docs/explanation/how-coaching-works" className={styles.portalButton}>
                  <i className="fas fa-lightbulb"></i>
                  <span>How Coaching Works</span>
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
                    Team Performance Overview
                  </div>
                </div>
                <div className={styles.dashboardBody}>
                  {/* Course performance metrics. Decorative. */}
                  <div className={styles.courseMetrics}>
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
                  </div>
                  
                  {/* Enhanced Course Graphics with SVG Illustrations */}
                  <div className={styles.modernChart}>
                    <div className={styles.chartTitle}>
                      Available Training Modules
                    </div>
                    <div className={styles.courseGraphicsContainer}>
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
              Setting up coaching, in the order the settings depend on one another
            </p>
          </div>
          
          <div className={styles.workflowContainer}>
            {workflowSteps.teamlead.map((step, index) => (
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
                
                {index < workflowSteps.teamlead.length - 1 && (
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

      {/* The agent walkthrough used to render only while the role toggle was set to
          agent, so it was invisible by default. It is useful to both audiences: a
          team lead answering "what does my agent see?" has nowhere else to look. */}
      <section className={styles.workflowSection}>
        <div className="container">
          <div className={`${styles.sectionHeader} ${styles.animateIn}`}>
            <h2 className={styles.sectionTitle}>Agent Portal Walkthrough</h2>
            <p className={styles.sectionSubtitle}>
              What an agent does, in the order they do it
            </p>
          </div>

          <div className={styles.workflowContainer}>
            {agentJourney.map((step, index) => (
              <React.Fragment key={index}>
                <div className={`${styles.workflowStep} ${styles.animateIn}`}>
                  <div className={styles.workflowNode}>
                    <div className={styles.workflowNodeInner}>{index + 1}</div>
                    <div className={styles.workflowNodeRing}></div>
                  </div>
                  <div className={styles.workflowContent}>
                    <h3 className={styles.workflowTitle}>
                      <Link to={step.to}>{step.title}</Link>
                    </h3>
                    <p className={styles.workflowDescription}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < agentJourney.length - 1 && (
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


       {/* Video Tutorial Section */}
       <section className={styles.videoSection}>
         <div className="container">
           <div className={`${styles.sectionHeader} ${styles.animateIn}`}>
             <h2 className={styles.sectionTitle}>How-To Guide Video</h2>
             <p className={styles.sectionSubtitle}>
               A walkthrough of the team lead side of coaching
             </p>
           </div>

           {/* Rendered from videoData, so removing or adding a video is a one-line
               change above rather than an edit to this markup. 
*/}
           {Object.keys(videoData).map((role) => (
             <div key={role}>
               <div className={`${styles.videoContainer} ${styles.animateIn}`}>
                 <iframe
                   className={styles.videoFrame}
                   src={`https://www.youtube.com/embed/${videoData[role].videoId}`}
                   title={videoData[role].title}
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
                 ></iframe>
               </div>
               <p className={styles.videoDescription}>
                 {videoData[role].description}
               </p>
             </div>
           ))}
         </div>
       </section>
    </div>
  );
}
