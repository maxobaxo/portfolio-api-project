import { combineReducers } from 'redux';
import getUserInfoReducer from './get-user-info-reducer';
import getUserReposReducer from './get-repos-reducer';

const rootReducer = combineReducers({
  'userInfo': getUserInfoReducer,
  'userRepos': getUserReposReducer
})

export default rootReducer;
