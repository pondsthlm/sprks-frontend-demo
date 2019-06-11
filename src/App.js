import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/Home';
import './App.css';
import { useStore } from './store';
// lacy load page wait for api
import Cms from './components/Cms';
import Page from './pages/Page';
import Menu from './components/Menu';

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
    <React.Fragment>
      <Cms>Loading...</Cms>
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
    </React.Fragment>
  );
}

export default App;
