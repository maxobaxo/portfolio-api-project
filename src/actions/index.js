import c from './../constants';
import { token, username } from './../../github-api.config.js';
import { v4 } from 'uuid';
import fetch from 'isomorphic-fetch';
import base64 from 'base-64';

export const requestUserInfo = () => {
  type: c.REQUEST_USER_INFO
}

export const receiveUserInfo = () => {
  type: c.RECEIVE_USER_INFO
}

let encodedKeys = base64.encode(username + ':' + token);

export function getUserInfo(dispatch) {
  console.log(encodedKeys);
  // return function(dispatch) {
  //   const localUserId = v4();
  //   dispatch(requestUserInfo());
  //   return fetch().then(function(json) {
  //     dispatch(receiveUserInfo());
  //   });
  // }
}
