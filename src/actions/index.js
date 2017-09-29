import c from './../constants';
import { token, username } from './../../github-api.config.js';
import { v4 } from 'uuid';
import fetch from 'isomorphic-fetch';
import base64 from 'base-64';

export const requestUserInfo = (localUserId) => ({
  type: c.REQUEST_USER_INFO,
  localId: localUserId
})

export const receiveUserInfo = () => ({
  type: c.RECEIVE_USER_INFO
})

let encodedKeys = base64.encode(username + ':' + token);

export function getUserInfo(dispatch) {
  console.log(encodedKeys);
  return function(dispatch) {
    const localUserId = v4();
    dispatch(requestUserInfo(localUserId));
    return fetch('https://api.github.com/users/maxobaxo', {
      headers: new Headers({
        'Authorization': 'Basic ' + encodedKeys,
        'Accept': 'application/vnd.github.v3+json'
      })
    }).then(
      response => response.json(),
      error => console.log('An error occured', error)
    ).then(function(json) {
      console.log(json);
      dispatch(receiveUserInfo());
    });
  }
}
