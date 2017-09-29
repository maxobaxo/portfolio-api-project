import c from './../constants';
import apiKey from './../../github-api.config.js';
import { v4 } from 'uuid';

export const requestUserInfo = () => {
  type: c.REQUEST_USER_INFO
}

export const receiveUserInfo = () => {
  type: c.RECEIVE_USER_INFO
}

export function getUserInfo(dispatch) {
  return function(dispatch) {
    const localUserId = v4();
    dispatch(requestUserInfo());
    return fetch().then(function(json) {
      dispatch(receiveUserInfo());
    });
  }
}
