import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as firebase from 'firebase';
import '../scss/Header.scss';

function Header(){

  const[active, setActive] = useState("activeHome");

  function signOut(){
    firebase.auth().signOut();
}



  return(
    <div className="header">
      <NavLink exact to='/' activeClassName="active"><h3>Home</h3></NavLink>
      <NavLink to='/employees' activeClassName="active"><h3>Employees</h3></NavLink>
      <button onClick={signOut}>Log Out</button>
    </div>
  )
}

export default Header
