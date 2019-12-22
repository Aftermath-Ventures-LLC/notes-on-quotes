import React from 'react';
import GenericPage from '../components/GenericPage';
import { withApollo } from '../lib/withApollo';

const About = () => {
  return <GenericPage slug="about" />;
};

export default withApollo(About);
