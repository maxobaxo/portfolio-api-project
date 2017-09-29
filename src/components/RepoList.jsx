import React from 'react';
import Repo from './Repo';
import PropTypes from 'prop-types';

function RepoList(props) {

  return(
    <div>
      {props.repoList.map((repo, index) =>
        <Repo
          name={repo.name}
          language={repo.language}
          created={repo.created_at}
          updated={repo.updated_at}
          description={repo.description}
          key={index}
        />
      )}
    </div>
  )
}

RepoList.propTypes = {
  repoList: PropTypes.array
}

export default RepoList;
