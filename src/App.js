import React from 'react';
import { Router } from '@reach/router';
import { createGlobalStyle } from 'styled-components/macro';
import { globalCSS } from 'theme';
import Home from 'pages/Home';
import Responsive from 'pages/Responsive';
import { useStore } from './store';
// lacy load page wait for api
import Cms from 'components/Cms';
import Page from 'pages/Page';
import Categories from 'pages/Categories';

const GlobalStyle = createGlobalStyle`
  ${globalCSS}
`;

const createPageRoutes = (pages = {}) => {
  if (!pages || !pages.length) return null;
  return pages.map(p =>
    p.slug && p.slug.current !== '/' ? (
      <Page path={p.slug.current} page={p} key={p._id} />
    ) : null
  );
};

function App() {
  const { state } = useStore();
  const pages = (state.cms || {}).pages;

  return (
    <>
      <GlobalStyle />
      <Cms>Loading...</Cms>
      <Router>
        <Categories
          path="/"
          //page={pages.find(p => p.slug.current === 'categories')}
        />
        {pages && (
          <Home
            default
            path="/home"
            page={pages.find(p => p.slug.current === '/')}
          />
        )}
        <Responsive path="/responsive" />
        {pages && createPageRoutes(pages)}
      </Router>
    </>
  );
}

export default App;
