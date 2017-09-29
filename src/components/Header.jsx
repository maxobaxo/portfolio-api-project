import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

function Header() {

  return(
    <div>
      <Jumbotron>
        <h1>[ Max Scher: Web Development Portfolio ]</h1>
        <Link to='/contact'>Contact</Link> | <Link to='/'>Profile</Link>
      </Jumbotron>
    </div>
  )
}

export default Header;
