import React from 'react';
import { mapDispatchToActions } from 'actions';

const initialState = {
  menu_expanded: false,
  cmsStatus: null,
};

export const Store = React.createContext();

export function useStore() {
  return React.useContext(Store);
}

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        menu_expanded: !state.menu_expanded,
      };
    case 'SET_CMS_STATUS':
      return {
        ...state,
        cmsStatus: payload,
      };
    case 'FILL_STATE_FROM_CMS':
      return {
        ...state,
        ...payload,
        cmsStatus: 'DONE',
      };
    default:
      return state;
  }
}

const reducerMiddleWare = (state, action) => {
  const newState = reducer(state, action);
  console.log(newState);
  return newState;
};

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducerMiddleWare, initialState);
  const actions = mapDispatchToActions(dispatch);
  const value = { state, actions };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
