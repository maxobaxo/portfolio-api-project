import React from 'react';
import UserInfo from './UserInfo';
import RepoList from './RepoList';
import { getUserInfo } from './../actions/user-info';
import { getUserRepos } from './../actions/repos';
import { connect } from 'react-redux';

class MasterMax extends React.Component {

  constructor(props) {
    super(props);
    this.getMaxInfo = this.getMaxInfo.bind(this);
    this.getMaxRepos = this.getMaxRepos.bind(this);
  }

  hideProfileButton() {
    if (this.props.masterState.userInfo.bio) {
      return true;
    } else {
      return false;
    }
  }

  showProfileInfo() {
    if (this.props.masterState.userInfo.bio) {
      return false;
    } else {
      return true;
    }
  }

  getMaxInfo() {
    const { dispatch } = this.props;
    dispatch(getUserInfo());
    this.getMaxRepos();
  }

  getMaxRepos() {
    const { dispatch } = this.props;
    dispatch(getUserRepos());
  }

  render() {
    return(
      <div>
        <h2 hidden={this.hideProfileButton()} onClick={this.getMaxInfo}>cLiCk tO lOaD</h2>
        <div hidden={this.showProfileInfo()}>
          <UserInfo profile={this.props.masterState.userInfo}/>
        </div>
        <RepoList repoList={this.props.masterState.userRepos}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    masterState: state
  }
}

export default connect(mapStateToProps)(MasterMax);
