import React from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';

function Header(){

  function signOut(){
    firebase.auth().signOut();
}

  return(
    <div className="header">
      <Link to='/'>Home</Link>
      <Link to='/employees'>Employees</Link>
      <button onClick={signOut}>Log Out</button>
    </div>
  )
}

export default Header
