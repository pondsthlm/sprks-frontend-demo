import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { useStore } from 'store';

const Page = styled.div``;

const Home = () => {
  const { state, actions } = useStore();

  return <Page>hello</Page>;
};

export default Home;
