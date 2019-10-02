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

const logger = (action, prevState, currentState) => {
  // https://medium.com/strands-tech-corner/react-state-management-without-redux-d39c7087039d
  if (process.env.NODE_ENV !== 'development') return;
  console.groupCollapsed('Logger');
  console.log('%c Action:', 'color: blue', action);
  console.log('%c Previous State:', 'color: red', prevState);
  console.log('%c Current State:', 'color: green', currentState);
  console.groupEnd();
};

const reducerMiddleWare = (state, action) => {
  const newState = reducer(state, action);
  logger(action, state, newState);
  return newState;
};

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducerMiddleWare, initialState);
  const actions = mapDispatchToActions(dispatch);
  const value = { state, actions };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
