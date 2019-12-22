import React from 'react';
import GenericPage from '../components/GenericPage';
import { withApollo } from '../lib/withApollo';

const Privacy = () => {
  return <GenericPage slug="privacy" />;
};

export default withApollo(Privacy);
