import React from 'react';
import Layout from '../components/Layout';
import { CircularProgress } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Layout>
      <CircularProgress isIndeterminate color='blue.300' />
    </Layout>
  );
};

export default Loading;
