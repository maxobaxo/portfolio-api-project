import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return(
    <div>
      <h1>[ Max Scher: Web Development Portfolio ]</h1>
      <Link to='/contact'>Contact</Link> | <Link to='/'>Profile</Link>
    </div>
  )
}

export default Header;
