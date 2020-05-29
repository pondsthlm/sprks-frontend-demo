import React, { useEffect } from 'react';
import { useStore } from 'store';
import sanityClient from '@sanity/client';

/*
Get data from cms API and transform it into  initial state .json
*/
export const clientSettings = {
  projectId: 'ngyu15sc',
  dataset: 'production',
  token: null,
  useCdn: true,
};
export const client = sanityClient(clientSettings);

/* 
  create queries for chemas
*/

// Placholder for preview.
const previewToken = undefined;

const allQuery = `{
  "categories": *[_type == 'category'] | order(order desc) {
    ...
  },
  "pages": *[_type == 'page']{
    ...
  }
}
  `; // todo: change id to aboutUs when its created.

const loadCms = (cmsStatus, actions) => {
  if (!cmsStatus) {
    try {
      actions.setCmsStatus('LOADING');
      client
        .fetch(allQuery)
        .then(cmsState => {
          actions.fillState(cmsState);
        })
        .catch(e => {
          actions.setCmsStatus('ERROR');
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
