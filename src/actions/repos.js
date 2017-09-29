import c from './../constants';
import { token, username } from './../../github-api.config.js';
import { v4 } from 'uuid';
import fetch from 'isomorphic-fetch';
import base64 from 'base-64';

let encodedKeys = base64.encode(username + ':' + token);

export const requestUserRepos = () => ({
  type: c.REQUEST_USER_REPOS
});

export const receiveUserRepos = (json) => ({
  type: c.RECEIVE_USER_REPOS,
  json
});

export function getUserRepos(dispatch) {
  return function(dispatch) {
    dispatch(requestUserRepos());
    return fetch('https://api.github.com/users/maxobaxo/repos', {
      headers: new Headers({
        'Authorization': 'Basic ' + encodedKeys,
        'Accept': 'application/vnd.github.v3+json'
      })
    }).then(
      response => response.json(),
      error => console.log('An error occured.', error)
    ).then(function(json) {
      dispatch(receiveUserRepos(json));
    });
  }
}
