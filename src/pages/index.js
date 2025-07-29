import React from 'react';
import Layout from '@theme/Layout';
import LandingPage from '../components/LandingPage';

export default function Home() {
  return (
    <Layout
      description="Vela Coaching Portal - Your centralized hub for agent coaching, training resources, and performance analytics.">
      <LandingPage />
    </Layout>
  );
}