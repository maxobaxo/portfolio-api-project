export default (state = [], action) => {
  let newState;
  switch (action.type) {
    case 'REQUEST_USER_REPOS':
      newState = state.slice();
      // newState.forEach()
      return newState;
    case 'RECEIVE_USER_REPOS':
      newState = action.json;
      return newState;
    default:
      return state;
  }
}
