import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LandingPage from '../components/LandingPage';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Coaching Portal for Call Centre Training and Development">
      <LandingPage />
    </Layout>
  );
}