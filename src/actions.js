export const mapDispatchToActions = dispatch => ({
  toggleMenu: () => dispatch({ type: 'TOGGLE_MENU', payload: null }),
  setCmsStatus: status => dispatch({ type: 'SET_CMS_STATUS', payload: status }),
  fillState: state => dispatch({ type: 'FILL_STATE_FROM_CMS', payload: state }),
});
