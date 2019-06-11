import React, { useEffect } from 'react';
import { useStore } from 'store';
import sanityClient from '@sanity/client';

/*
Get data from cms API and transform it into  initial state .json
*/
const clientSettings = {
  projectId: 'rq3hxhhx',
  dataset: 'production',
  token: null,
  useCdn: true,
};
export const client = sanityClient(clientSettings);

/* 
  create queries for chemas
*/

// Page
const pages = ['_id', 'title', '"slug": slug.current', 'image', 'content'].join(
  ','
);

const pagesQuery = `*[_type == "pages"]{${pages}}`;

const allQuery = `
  {
    "pages": ${pagesQuery},
  }
  `;

const loadCms = (cmsStatus, actions) => {
  if (!cmsStatus) {
    try {
      actions.setCmsStatus('LOADING');
      client
        .fetch(allQuery)
        .then(cmsState => {
          actions.fillState(cmsState);
          console.log('DONE', cmsState);
        })
        .catch(e => {
          actions.setCmsStatus('ERROR');
          console.error('CMS ERROR', e);
        });
    } catch (e) {
      console.log('e', e);
    }
  }
  return;
};

const Cms = ({ children }) => {
  const { state, actions } = useStore();
  const { cmsStatus } = state;
  useEffect(() => {
    loadCms(cmsStatus, actions);
  }, [actions, cmsStatus]);
  if (cmsStatus === 'DONE') return null;
  return <div id="loading">{children}</div>;
};

export default Cms;
