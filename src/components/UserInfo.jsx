import React from 'react';
import UserInfoGet from './UserInfoGet';
import UserInfoDisplay from './UserInfoDisplay';

function UserInfo(props) {

  return(
    <div>
      <UserInfoGet />
      <UserInfoDisplay />
    </div>
  )
}

export default UserInfo;
