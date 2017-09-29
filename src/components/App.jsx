import React from 'react';
import UserInfo from './UserInfo';
import {getUserInfo} from './../actions';

function App(props) {

  getUserInfo();

  return(
    <div>
      <h1>Max Scher: Web Development Portfolio</h1>
      <UserInfo />
    </div>
  )
}

export default App;
