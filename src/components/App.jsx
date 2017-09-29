import React from 'react';
import Header from './Header';
import UserInfo from './UserInfo';
import RepoList from './RepoList';
import { Switch, Route } from 'react-router-dom';

function App(props) {

  return(
    <div>
      <Header />
      <Switch>
        <Route exact path='/profile' component={UserInfo} />
        <Route exact path='/repos' component={RepoList}/>
      </Switch>
    </div>
  )
}

export default App;
