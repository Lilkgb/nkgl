import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  return(
    <div className="header">
      <Link to='/'>Home</Link>
      <h2>Welcome New User</h2>
    </div>
  )
}

export default Header
