import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import CircuitBoard from '../CircuitBoard';
import FeatureCards from '../FeatureCards';

export default function LandingPage() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <div className={styles.landingContainer}>
      {/* Hero Section with Circuit Board Background */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <CircuitBoard className={styles.circuitBackground} />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleLine}>Welcome to the</span>
                <span className={styles.heroTitleMain}>{siteConfig.title}</span>
                <span className={styles.heroTitleUnderline}></span>
              </h1>
              <p className={styles.heroSubtitle}>
                Your centralized hub for agent coaching, training resources, and performance analytics.
                Connect, learn, and excel with our integrated call center knowledge platform.
              </p>
              <div className={styles.heroCta}>
                <Link to="/docs/intro" className={styles.heroButton}>
                  Get Started
                  <span className={styles.heroButtonArrow}>→</span>
                </Link>
                <Link to="/docs/features" className={`${styles.heroButton} ${styles.heroButtonSecondary}`}>
                  Explore Features
                </Link>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.dashboardPreview}>
                <div className={styles.dashboardHeader}>
                  <div className={styles.dashboardControls}>
                    <span className={styles.dashboardControl}></span>
                    <span className={styles.dashboardControl}></span>
                    <span className={styles.dashboardControl}></span>
                  </div>
                  <div className={styles.dashboardTitle}>Coaching Dashboard</div>
                </div>
                <div className={styles.dashboardBody}>
                  <div className={styles.chartContainer}>
                    <div className={styles.chartTitle}>Agent Performance Trends</div>
                    
                    {/* Chart grid with square gridlines */}
                    <div className={styles.chartGrid}>
                      {[...Array(6)].map((_, i) => (
                        <div key={`h-grid-${i}`} className={styles.horizontalGridLine}></div>
                      ))}
                      {[...Array(7)].map((_, i) => (
                        <div key={`v-grid-${i}`} className={styles.verticalGridLine}></div>
                      ))}
                    </div>
                    
                    {/* Y-axis labels */}
                    <div className={styles.yAxis}>
                      <div className={styles.yAxisLabel}>100%</div>
                      <div className={styles.yAxisLabel}>80%</div>
                      <div className={styles.yAxisLabel}>60%</div>
                      <div className={styles.yAxisLabel}>40%</div>
                      <div className={styles.yAxisLabel}>20%</div>
                      <div className={styles.yAxisLabel}>0%</div>
                    </div>
                    
                    {/* X-axis labels */}
                    <div className={styles.xAxis}>
                      <div className={styles.xAxisLabel}>Jan</div>
                      <div className={styles.xAxisLabel}>Feb</div>
                      <div className={styles.xAxisLabel}>Mar</div>
                      <div className={styles.xAxisLabel}>Apr</div>
                      <div className={styles.xAxisLabel}>May</div>
                      <div className={styles.xAxisLabel}>Jun</div>
                    </div>
                    
                    {/* Performance lines for different agents */}
                    <div className={`${styles.performanceLine} ${styles.agentA}`}>
                      <div className={styles.dataPoint} style={{left: '0%', bottom: '45%'}}></div>
                      <div className={styles.dataPoint} style={{left: '20%', bottom: '65%'}}></div>
                      <div className={styles.dataPoint} style={{left: '40%', bottom: '55%'}}></div>
                      <div className={styles.dataPoint} style={{left: '60%', bottom: '70%'}}></div>
                      <div className={styles.dataPoint} style={{left: '80%', bottom: '80%'}}></div>
                      <div className={styles.dataPoint} style={{left: '100%', bottom: '85%'}}></div>
                    </div>
                    
                    <div className={`${styles.performanceLine} ${styles.agentB}`}>
                      <div className={styles.dataPoint} style={{left: '0%', bottom: '30%'}}></div>
                      <div className={styles.dataPoint} style={{left: '20%', bottom: '40%'}}></div>
                      <div className={styles.dataPoint} style={{left: '40%', bottom: '60%'}}></div>
                      <div className={styles.dataPoint} style={{left: '60%', bottom: '55%'}}></div>
                      <div className={styles.dataPoint} style={{left: '80%', bottom: '65%'}}></div>
                      <div className={styles.dataPoint} style={{left: '100%', bottom: '70%'}}></div>
                    </div>
                    
                    <div className={`${styles.performanceLine} ${styles.agentC}`}>
                      <div className={styles.dataPoint} style={{left: '0%', bottom: '55%'}}></div>
                      <div className={styles.dataPoint} style={{left: '20%', bottom: '50%'}}></div>
                      <div className={styles.dataPoint} style={{left: '40%', bottom: '45%'}}></div>
                      <div className={styles.dataPoint} style={{left: '60%', bottom: '60%'}}></div>
                      <div className={styles.dataPoint} style={{left: '80%', bottom: '75%'}}></div>
                      <div className={styles.dataPoint} style={{left: '100%', bottom: '78%'}}></div>
                    </div>
                    
                    {/* Chart legend */}
                    <div className={styles.chartLegend}>
                      <div className={styles.legendItem}>
                        <div className={`${styles.legendColor} ${styles.colorA}`}></div>
                        <div className={styles.legendText}>Agent A</div>
                      </div>
                      <div className={styles.legendItem}>
                        <div className={`${styles.legendColor} ${styles.colorB}`}></div>
                        <div className={styles.legendText}>Agent B</div>
                      </div>
                      <div className={styles.legendItem}>
                        <div className={`${styles.legendColor} ${styles.colorC}`}></div>
                        <div className={styles.legendText}>Agent C</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>500+</div>
              <div className={styles.statLabel}>Training Resources</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>24/7</div>
              <div className={styles.statLabel}>Learning Access</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>98%</div>
              <div className={styles.statLabel}>User Satisfaction</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>15+</div>
              <div className={styles.statLabel}>Skill Pathways</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className={styles.featuresSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Portal Features</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to excel in your role and advance your career
            </p>
          </div>
          <FeatureCards />
        </div>
      </section>

      {/* How It Works Section with Circuit Graphics */}
      <section className={styles.workflowSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <p className={styles.sectionSubtitle}>
              Your journey to excellence in four simple steps
            </p>
          </div>
          
          <div className={styles.workflowContainer}>
            <div className={styles.workflowStep}>
              <div className={styles.workflowNode}>
                <div className={styles.workflowNodeInner}>1</div>
                <div className={styles.workflowNodeRing}></div>
              </div>
              <div className={styles.workflowContent}>
                <h3 className={styles.workflowTitle}>Access Your Dashboard</h3>
                <p className={styles.workflowDescription}>
                  Log in to view your personalized learning path and performance metrics
                </p>
              </div>
            </div>
            
            <div className={styles.workflowConnector}>
              <div className={styles.workflowLine}></div>
              <div className={styles.workflowPulse}></div>
            </div>
            
            <div className={styles.workflowStep}>
              <div className={styles.workflowNode}>
                <div className={styles.workflowNodeInner}>2</div>
                <div className={styles.workflowNodeRing}></div>
              </div>
              <div className={styles.workflowContent}>
                <h3 className={styles.workflowTitle}>Complete Training Modules</h3>
                <p className={styles.workflowDescription}>
                  Engage with interactive courses designed to build your skills
                </p>
              </div>
            </div>
            
            <div className={styles.workflowConnector}>
              <div className={styles.workflowLine}></div>
              <div className={styles.workflowPulse}></div>
            </div>
            
            <div className={styles.workflowStep}>
              <div className={styles.workflowNode}>
                <div className={styles.workflowNodeInner}>3</div>
                <div className={styles.workflowNodeRing}></div>
              </div>
              <div className={styles.workflowContent}>
                <h3 className={styles.workflowTitle}>Receive Coaching & Feedback</h3>
                <p className={styles.workflowDescription}>
                  Get personalized guidance from experienced mentors
                </p>
              </div>
            </div>
            
            <div className={styles.workflowConnector}>
              <div className={styles.workflowLine}></div>
              <div className={styles.workflowPulse}></div>
            </div>
            
            <div className={styles.workflowStep}>
              <div className={styles.workflowNode}>
                <div className={styles.workflowNodeInner}>4</div>
                <div className={styles.workflowNodeRing}></div>
              </div>
              <div className={styles.workflowContent}>
                <h3 className={styles.workflowTitle}>Track Your Growth</h3>
                <p className={styles.workflowDescription}>
                  Monitor your progress and celebrate achievements with badges and certifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <CircuitBoard className={styles.ctaBackground} />
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Elevate Your Skills?</h2>
            <p className={styles.ctaDescription}>
              Join thousands of agents who are accelerating their careers through our coaching portal
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/docs/intro" className={styles.ctaButton}>
                Start Learning Today
                <span className={styles.ctaButtonArrow}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
