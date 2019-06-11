import React from 'react';
import styled from 'styled-components/macro';
import { useStore } from 'store';
import { Link } from '@reach/router';
import logo from './logo.png';

const Wrapper = styled.div`
  img {
    display: block;
    width: 100%;
  }
`;

const Logo = () => {
  const { state, actions } = useStore();

  const closeMenuIfOpen = () => {
    if (state.menu_expanded) actions.toggleMenu();
  };

  return (
    <Wrapper>
      <Link to="/" onClick={closeMenuIfOpen}>
        <img alt="companyName" src={logo} />
      </Link>
    </Wrapper>
  );
};

export default Logo;
