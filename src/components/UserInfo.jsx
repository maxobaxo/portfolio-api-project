import React from 'react';
import UserInfoGet from './UserInfoGet';
import UserInfoDisplay from './UserInfoDisplay';
import PropTypes from 'prop-types';

function UserInfo(props) {

  return(
    <div>
      <img src={props.profile.avatar_url} />
      <p>{props.profile.bio}</p>
      <p>Currently in {props.profile.location}</p>
      <a href={props.profile.blog}>LinkedIn</a> | <a href={props.profile.html_url}>GitHub</a> | <a href='mailto:max@maxobaxo.com'>{props.profile.email}</a>

      <h4>Stats</h4>
      <p> {props.profile.followers} Followers | Following {props.profile.following} | Repo Count: {props.profile.public_repos}</p>
    </div>
  )
}

UserInfo.propTypes = {
  profile: PropTypes.object
}

export default UserInfo;
