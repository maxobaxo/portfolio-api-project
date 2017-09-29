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
        <h1 onClick={this.getMaxInfo} alt="Click Me">[ Max Scher: Web Development Portfolio ]</h1>
      </div>
    )
  }
}

export default connect()(UserInfoGet);
