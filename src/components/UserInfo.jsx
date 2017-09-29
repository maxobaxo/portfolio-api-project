import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Well } from 'react-bootstrap';
import styles from './../styles/UserInfo.css';

function UserInfo(props) {

  return(
    <div>
      <Well>
        <Grid>
          <Row>
            <Col md={4}>
                <img id='user-info-img' src={props.profile.avatar_url} />
            </Col>
            <Col md={4}>
              <div id='user-info'>
                <p>{props.profile.bio}</p>
                <p>Currently in {props.profile.location}</p>
                <a href={props.profile.blog}>LinkedIn</a> | <a href={props.profile.html_url}>GitHub</a> | <a href='mailto:max@maxobaxo.com'>{props.profile.email}</a>

                <h4>Stats</h4>
                <p> {props.profile.followers} Followers | Following {props.profile.following} | Repo Count: {props.profile.public_repos}</p>
              </div>
            </Col>
            <Col md={4}>
              <img src='http://68.media.tumblr.com/tumblr_lxljikpowc1qm4rc3.jpg'/>
            </Col>
          </Row>
        </Grid>
      </Well>
    </div>
  )
}

UserInfo.propTypes = {
  profile: PropTypes.object
}

export default UserInfo;
