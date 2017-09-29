import React from 'react';
import Header from './Header';
import Contact from './Contact';
import MasterMax from './MasterMax';
import { Switch, Route } from 'react-router-dom';
import { Grid, Col, Row } from 'react-bootstrap';

function App(props) {

  return(
    <div className="container">
      <Header />
      <Switch>
        <Route exact path='/' component={ MasterMax } />
        <Route path='/contact' component={ Contact } />
      </Switch>
    </div>
  )
}

export default App;
