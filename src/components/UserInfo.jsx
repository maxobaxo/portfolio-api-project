import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, bsClass, bsSize } from 'react-bootstrap';

function UserInfo(props) {

  return(
    <div>
      <Grid>
        <Row>
          <Col md={6}>
            <div className="well">
              <img src={props.profile.avatar_url} />
            </div>
          </Col>
          <Col md={6}>
            <div className="well">
              <p>{props.profile.bio}</p>
              <p>Currently in {props.profile.location}</p>
              <a href={props.profile.blog}>LinkedIn</a> | <a href={props.profile.html_url}>GitHub</a> | <a href='mailto:max@maxobaxo.com'>{props.profile.email}</a>

              <h4>Stats</h4>
              <p> {props.profile.followers} Followers | Following {props.profile.following} | Repo Count: {props.profile.public_repos}</p>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

UserInfo.propTypes = {
  profile: PropTypes.object
}

export default UserInfo;
