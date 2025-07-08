import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';

export default function CircuitBoard({ className }) {
  const svgRef = useRef(null);
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';
  
  // Animation for nodes and paths
  useEffect(() => {
    if (!svgRef.current) return;
    
    const svg = svgRef.current;
    const nodes = svg.querySelectorAll(`.${styles.node}`);
    const paths = svg.querySelectorAll(`.${styles.path}`);
    const pulses = svg.querySelectorAll(`.${styles.pulse}`);
    
    // Animate nodes
    nodes.forEach((node, i) => {
      const delay = i * 0.2;
      node.style.animation = `${styles.nodeAppear} 0.5s ease-out ${delay}s forwards`;
    });
    
    // Animate paths
    paths.forEach((path, i) => {
      const delay = (i * 0.15) + 0.2;
      path.style.animation = `${styles.pathDraw} 1.5s ease-out ${delay}s forwards`;
    });
    
    // Animate pulses along paths
    pulses.forEach((pulse, i) => {
      const delay = (i * 0.6) + 1;
      pulse.style.animation = `${styles.pulseMove} 3s linear ${delay}s infinite`;
    });
  }, []);
  
  const primaryColor = isDarkTheme ? '#fc5f1e' : '#fc5f1e';
  const secondaryColor = isDarkTheme ? '#ffffff' : '#031019';
  const bgColor = isDarkTheme ? '#031019' : '#ffffff';
  
  return (
    <div className={`${styles.circuitContainer} ${className || ''}`}>
      <svg 
        ref={svgRef}
        className={styles.circuitSvg} 
        viewBox="0 0 800 600" 
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Main nodes */}
        <circle className={styles.node} cx="400" cy="300" r="15" fill={primaryColor} />
        <circle className={styles.node} cx="200" cy="150" r="10" fill={primaryColor} />
        <circle className={styles.node} cx="600" cy="150" r="10" fill={primaryColor} />
        <circle className={styles.node} cx="200" cy="450" r="10" fill={primaryColor} />
        <circle className={styles.node} cx="600" cy="450" r="10" fill={primaryColor} />
        
        {/* Secondary nodes */}
        <circle className={styles.node} cx="300" cy="200" r="6" fill={secondaryColor} />
        <circle className={styles.node} cx="500" cy="200" r="6" fill={secondaryColor} />
        <circle className={styles.node} cx="300" cy="400" r="6" fill={secondaryColor} />
        <circle className={styles.node} cx="500" cy="400" r="6" fill={secondaryColor} />
        <circle className={styles.node} cx="150" cy="300" r="6" fill={secondaryColor} />
        <circle className={styles.node} cx="650" cy="300" r="6" fill={secondaryColor} />
        
        {/* Main connections */}
        <path className={styles.path} d="M400,300 L200,150" stroke={primaryColor} strokeWidth="3" fill="none" />
        <path className={styles.path} d="M400,300 L600,150" stroke={primaryColor} strokeWidth="3" fill="none" />
        <path className={styles.path} d="M400,300 L200,450" stroke={primaryColor} strokeWidth="3" fill="none" />
        <path className={styles.path} d="M400,300 L600,450" stroke={primaryColor} strokeWidth="3" fill="none" />
        
        {/* Secondary connections */}
        <path className={styles.path} d="M200,150 L300,200" stroke={secondaryColor} strokeWidth="2" fill="none" />
        <path className={styles.path} d="M600,150 L500,200" stroke={secondaryColor} strokeWidth="2" fill="none" />
        <path className={styles.path} d="M200,450 L300,400" stroke={secondaryColor} strokeWidth="2" fill="none" />
        <path className={styles.path} d="M600,450 L500,400" stroke={secondaryColor} strokeWidth="2" fill="none" />
        <path className={styles.path} d="M200,150 L150,300" stroke={secondaryColor} strokeWidth="2" fill="none" />
        <path className={styles.path} d="M600,150 L650,300" stroke={secondaryColor} strokeWidth="2" fill="none" />
        <path className={styles.path} d="M200,450 L150,300" stroke={secondaryColor} strokeWidth="2" fill="none" />
        <path className={styles.path} d="M600,450 L650,300" stroke={secondaryColor} strokeWidth="2" fill="none" />
        <path className={styles.path} d="M300,200 L500,200" stroke={secondaryColor} strokeWidth="2" fill="none" />
        <path className={styles.path} d="M300,400 L500,400" stroke={secondaryColor} strokeWidth="2" fill="none" />
        
        {/* Pulse animations along main paths */}
        <circle className={styles.pulse} r="4" fill={primaryColor}>
          <animateMotion path="M400,300 L200,150" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle className={styles.pulse} r="4" fill={primaryColor}>
          <animateMotion path="M400,300 L600,150" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle className={styles.pulse} r="4" fill={primaryColor}>
          <animateMotion path="M400,300 L200,450" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle className={styles.pulse} r="4" fill={primaryColor}>
          <animateMotion path="M400,300 L600,450" dur="3s" repeatCount="indefinite" />
        </circle>
        
        {/* Text labels */}
        <text x="400" y="285" textAnchor="middle" className={styles.label} fill={secondaryColor}>CENTRAL HUB</text>
        <text x="200" y="135" textAnchor="middle" className={styles.label} fill={secondaryColor}>TRAINING</text>
        <text x="600" y="135" textAnchor="middle" className={styles.label} fill={secondaryColor}>ANALYTICS</text>
        <text x="200" y="475" textAnchor="middle" className={styles.label} fill={secondaryColor}>ASSESSMENT</text>
        <text x="600" y="475" textAnchor="middle" className={styles.label} fill={secondaryColor}>RESOURCES</text>
      </svg>
    </div>
  );
}
