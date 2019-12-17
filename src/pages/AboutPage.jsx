import React from 'react';
import About from '../components/About/About';
import Layout from '../containers/Layout/Layout';

const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <About />
    </Layout>
  );
};

export default AboutPage;
