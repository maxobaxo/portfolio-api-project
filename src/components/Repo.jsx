import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Panel } from 'react-bootstrap';

function Repo(props) {

  return(
    <div>
      <Accordion>
        <Panel header={props.name} eventKey="1">
          <p>{props.description}</p>
          <li>Language: {props.language}</li>
          <li>Created: {props.created}</li>
          <li>Updated: {props.updated}</li>
        </Panel>
      </Accordion>
    </div>
  )
}

Repo.propTypes = {
  name: PropTypes.string,
  language: PropTypes.string,
  created: PropTypes.string,
  updated: PropTypes.string,
  description: PropTypes.string
}

export default Repo;
