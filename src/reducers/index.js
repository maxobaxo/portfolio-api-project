import { combineReducers } from 'redux';
import getUserInfoReducer from './get-user-info-reducer';

const rootReducer = combineReducers({
  'userInfo': getUserInfoReducer
})

export default rootReducer;
