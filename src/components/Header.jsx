import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return(
    <div>
      <Link to='/repos'>Repositories</Link> | <Link to='/profile'>Profile</Link>
    </div>
  )
}

export default Header;
