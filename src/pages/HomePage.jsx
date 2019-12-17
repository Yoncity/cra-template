import React from 'react';
import Home from '../components/Home/Home';
import Layout from '../containers/Layout/Layout';

const HomePage = ({ location }) => {
  return (
    <Layout location={location}>
      <Home />
    </Layout>
  );
};

export default HomePage;
