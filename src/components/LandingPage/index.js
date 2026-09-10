import React, { useEffect } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';


// Inline SVG rather than a Font Awesome class: the kit is not reliably
// available, and an <i> that fails to load leaves an empty circle.
const ICONS = {
  score: 'M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z',
  cycle: 'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z',
  check: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
  course: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z',
  award: 'M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM7 10.82C5.84 10.4 5 9.3 5 8V7h2v3.82zM12 16c-1.65 0-3-1.35-3-3V5h6v8c0 1.65-1.35 3-3 3zm7-8c0 1.3-.84 2.4-2 2.82V7h2v1z',
  none: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z',
};

function Icon({name, size = 16}) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d={ICONS[name]} />
    </svg>
  );
}

export default function LandingPage() {
  const {siteConfig} = useDocusaurusContext();

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
      description: 'A walk through building courses, tracking progress, and coaching from the Coaching section of Vela.'
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

  // The five team lead pages, in the order the settings depend on one another
  // (the sequence Getting Started with Coaching walks through). Titles and
  // descriptions track each page, so a rename here is visible against the docs.
  const workflowSteps = {
    teamlead: [
      {
        title: "Getting Started with Coaching",
        description: "Set the evaluation cycle and pass percentage first. Nothing is assigned until a cycle runs.",
        to: "/docs/team-leads/getting-started",
      },
      {
        title: "Read the Coaching Dashboard",
        description: "See how your team is scoring and where coaching would help most.",
        to: "/docs/team-leads/coaching-dashboard",
      },
      {
        title: "Create and Assign Courses",
        description: "Build a course, set the score range that assigns it, and let Vela reach the right agents.",
        to: "/docs/team-leads/create-and-assign-courses",
      },
      {
        title: "Track Learning Progress",
        description: "See who has started, finished, or stalled on the courses you assigned.",
        to: "/docs/team-leads/track-learning-progress",
      },
      {
        title: "Recognise Good Work",
        description: "Create an award, set what earns it, and let Vela present it.",
        to: "/docs/team-leads/recognise-good-work",
      },
    ],
  };
  
  return (
    <div className={styles.landingContainer}>
      {/* Modern Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientBlur}></div>
        </div>
        
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.tagWrapper}>
                <span className={styles.tagline}>Documentation</span>
              </div>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleLine}>Vela</span>
                <span className={styles.heroTitleMain}>{siteConfig.title}</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Coaching in Vela turns scores into training and recognition. Team leads set it up
                in the Vela platform. Agents receive it in the Agent Portal.
              </p>
              
              {/* Three ways in, matching the sidebar. This replaced a stateful
                  role toggle that switched the whole page between a team lead
                  and an agent view and hid half the site behind a button
                  nobody knew to press. */}
              <div className={`${styles.heroCta} ${styles.animateIn}`}>
                <Link to="/docs/team-leads" className={styles.portalButton}>
                  For Team Leads
                </Link>
                <Link to="/docs/agents" className={styles.portalButton}>
                  For Agents
                </Link>
                <Link to="/docs/explanation/how-coaching-works" className={styles.portalButtonOutline}>
                  How Coaching Works
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
                  <div className={styles.dashboardTitle}>How coaching runs</div>
                </div>
                <div className={styles.dashboardBody}>
                  <div className={styles.cycleFlow}>
                    <div className={styles.cycleStepRow}>
                      <span className={styles.cycleStepIcon}><Icon name="score" /></span>
                      <span className={styles.cycleStepText}>Vela scores every interaction</span>
                    </div>
                    <div className={styles.cycleStepRow}>
                      <span className={styles.cycleStepIcon}><Icon name="cycle" /></span>
                      <span className={styles.cycleStepText}>The evaluation cycle runs on its schedule</span>
                    </div>
                    <div className={styles.cycleStepRow}>
                      <span className={styles.cycleStepIcon}><Icon name="check" /></span>
                      <span className={styles.cycleStepText}>Each agent&apos;s scores are checked against every course and award</span>
                    </div>
                  </div>
                  <div className={styles.cycleOutcomes}>
                    <div className={styles.cycleOutcome}>
                      <Icon name="course" size={18} />
                      <span>Course assigned</span>
                    </div>
                    <div className={styles.cycleOutcome}>
                      <Icon name="award" size={18} />
                      <span>Award presented</span>
                    </div>
                    <div className={styles.cycleOutcome}>
                      <Icon name="none" size={18} />
                      <span>Nothing this run</span>
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
            <h2 className={styles.sectionTitle}>What a Team Lead Does</h2>
            <p className={styles.sectionSubtitle}>
              In the order the settings depend on one another
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
                    <h3 className={styles.workflowTitle}>
                      <Link to={step.to}>{step.title}</Link>
                    </h3>
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
            <h2 className={styles.sectionTitle}>What an Agent Does</h2>
            <p className={styles.sectionSubtitle}>
              In the Agent Portal, in the order they meet it
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
