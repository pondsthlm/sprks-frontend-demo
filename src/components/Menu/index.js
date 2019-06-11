import React from 'react';
import styled from 'styled-components/macro';
import { Link } from '@reach/router';
import { useStore } from 'store';
import Logo from 'components/Logo';

const MenuContent = styled.div`
  display: ${p => (p.expanded ? 'block' : 'none')};
`;

const MenuButton = styled.button`
  border: none;
  font-size: 16px;
`;

const isCurrentStyle = { color: 'red' };

const setActiveStyle = ({ isCurrent }) => {
  return { style: isCurrent ? isCurrentStyle : {} };
};

const LinkTo = props => {
  return (
    <Link {...props} getProps={setActiveStyle}>
      {props.children}
    </Link>
  );
};

const generateLinkList = (pages, actions) => {
  if (!pages || !pages.length) return null;
  return pages.map(p => (
    <LinkTo to={`${p.slug}`} onClick={actions.toggleMenu} key={p._id}>
      {p.title}
    </LinkTo>
  ));
};

export default ({ page }) => {
  const { state, actions } = useStore();
  const { pages } = state;

  return (
    <menu>
      <Logo />
      <MenuButton onClick={actions.toggleMenu}>menu</MenuButton>
      <MenuContent expanded={state.menu_expanded}>
        {generateLinkList(pages, actions)}
      </MenuContent>
    </menu>
  );
};
