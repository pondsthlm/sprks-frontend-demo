import React from 'react';
import { Router } from '@reach/router';
import { createGlobalStyle } from 'styled-components/macro';
import { globalCSS } from 'theme';
import Home from './pages/Home';
import { useStore } from './store';
// lacy load page wait for api
import Cms from 'components/Cms';
import Seo from 'components/Seo';
import Page from './pages/Page';
import Menu from 'components/Menu';

const GlobalStyle = createGlobalStyle`
  ${globalCSS}
`;

const createPageRoutes = pages => {
  if (!pages || !pages.length) return null;
  return pages.map(p =>
    p.slug ? <Page path={p.slug} page={p} key={p._id} /> : null
  );
};

function App() {
  const { state } = useStore();
  const { pages } = state;

  return (
    <>
      <GlobalStyle />
      <Cms>Loading...</Cms>
      <Seo />
      <Menu />
      <Router>
        <Home default path="/" />
        {createPageRoutes(pages)}
        {/*
        <p>Hej this is dog</p>
        <button onClick={actions.toggleMenu}>Menu</button>
        <menu>{state.menu_expanded ? 'menu is open' : 'menu is closed'}</menu>
        */}
      </Router>
    </>
  );
}

export default App;
