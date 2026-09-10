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
  teamlead: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
  agent: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
  idea: 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z',
  book: 'M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z',
  fields: 'M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h12v2H3v-2z',
  fix: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
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
      description: "Sign in to the Agent Portal for the first time and find your way around.",
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
      description: "Read the material, take the quiz, and see how many retakes you have left.",
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
  
  // Reference and Support, matching those two sidebar sections.
  const quickLinks = [
    {
      title: "Glossary",
      icon: "book",
      description: "What each term means, from Auto Fail to Training Initiation Score Range.",
      to: "/docs/reference/glossary",
    },
    {
      title: "Metrics",
      icon: "score",
      description: "Every figure coaching shows, and what to take from it.",
      to: "/docs/reference/metrics",
    },
    {
      title: "Course and Award Fields",
      icon: "fields",
      description: "Every field on the course, award, and preferences forms, with its limits.",
      to: "/docs/reference/course-and-award-fields",
    },
    {
      title: "Troubleshooting",
      icon: "fix",
      description: "Work from a symptom to its cause, for the problems reported most.",
      to: "/docs/support/troubleshooting-guide",
    },
  ];

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
                  <Icon name="teamlead" size={18} />
                  For Team Leads
                </Link>
                <Link to="/docs/agents" className={styles.portalButton}>
                  <Icon name="agent" size={18} />
                  For Agents
                </Link>
                <Link to="/docs/explanation/how-coaching-works" className={styles.portalButtonOutline}>
                  <Icon name="idea" size={18} />
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
                      <span className={styles.cycleStepText}>Scope sets who is eligible, then category score decides who qualifies</span>
                    </div>
                  </div>
                  <p className={styles.cycleBranchLabel}>One outcome per agent</p>
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
      <section className={styles.workflowSection} id="team-lead-walkthrough">
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
      <section className={styles.workflowSection} id="agent-walkthrough">
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


      {/* Reference and Support have their own sidebar sections but had no way
          in from here, so a reader arriving with a term or a symptom had
          nowhere to go. */}
      <section className={styles.quickSection}>
        <div className="container">
          <div className={`${styles.sectionHeader} ${styles.animateIn}`}>
            <h2 className={styles.sectionTitle}>Look Something Up</h2>
            <p className={styles.sectionSubtitle}>
              For a term, a figure, a field, or a problem
            </p>
          </div>

          <div className={`${styles.quickLinks} ${styles.animateIn}`}>
            {quickLinks.map((l) => (
              <Link key={l.to} to={l.to} className={styles.quickLink}>
                <span className={styles.quickLinkIcon}><Icon name={l.icon} size={20} /></span>
                <span className={styles.quickLinkTitle}>{l.title}</span>
                <span className={styles.quickLinkText}>{l.description}</span>
              </Link>
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
