import React from 'react';
import UserInfo from './UserInfo';
import RepoList from './RepoList';
import { getUserInfo } from './../actions/index';
import { connect } from 'react-redux';

class MasterMax extends React.Component {

  constructor(props) {
    super(props);
    this.getMaxInfo = this.getMaxInfo.bind(this);
  }

  hideProfileButton() {
    if (this.props.masterState.userInfo.bio) {
      return true;
    } else {
      return false;
    }
  }

  getMaxInfo() {
    const { dispatch } = this.props;
    dispatch(getUserInfo());
  }

  render() {
    return(
      <div>
        <h2 hidden={this.hideProfileButton()} onClick={this.getMaxInfo}>cLiCk tO lOaD</h2>
        <UserInfo profile={this.props.masterState.userInfo}/>

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
