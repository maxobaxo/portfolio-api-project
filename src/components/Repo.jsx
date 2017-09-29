import React from 'react';
import PropTypes from 'prop-types';

function Repo(props) {

  return(
    <div>
      <ul>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <li>Language: {props.language}</li>
        <li>Created: {props.created}</li>
        <li>Updated: {props.updated}</li>
      </ul>
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
