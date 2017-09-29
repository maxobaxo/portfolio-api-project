export default (state = {}, action) => {
  let newState;
  switch (action.type) {
    case 'REQUEST_USER_INFO':
      newState = {
        isFetching: true,
        localId: action.localId
      }
      return newState;
    case 'RECEIVE_USER_INFO':
      newState = Object.assign({}, state, {
        isFetching: false
      });
      return newState;
    default:
    return state;
  }
}
