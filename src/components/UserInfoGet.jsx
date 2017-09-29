import React from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from './../actions/index';

class UserInfoGet extends React.Component {

  constructor(props) {
    super(props);
    this.getMaxInfo = this.getMaxInfo.bind(this);
  }

  getMaxInfo() {
    const { dispatch } = this.props;
    dispatch(getUserInfo());
  }

  render() {
    return(
      <div>
        <button onClick={this.getMaxInfo}>Get Max's Info</button>
      </div>
    )
  }
}

export default connect()(UserInfoGet);
