import React from 'react';
import Layout from '@theme/Layout';
import LandingPage from '../components/LandingPage';

export default function Home() {
  return (
    <Layout
      description="Documentation for Vela Coaching. Team leads set up courses and awards in the Vela platform; agents receive them in the Agent Portal.">
      <LandingPage />
    </Layout>
  );
}