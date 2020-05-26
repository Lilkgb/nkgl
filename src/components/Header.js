import React, {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as firebase from 'firebase';
import '../scss/Header.scss';

function Header(){

  let display;
  const[active, setActive] = useState("activeHome");
  const[size, setSize] = useState(null)

  function signOut(){
    firebase.auth().signOut();
  }

  function useWindowSize() {
    const isClient = typeof window === 'object';
  
    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }
  
    const [windowSize, setWindowSize] = useState(getSize);
  
    useEffect(() => {
      if (!isClient) {
        return false;
      }
      
      function handleResize() {
        setWindowSize(getSize());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowSize;
  }

  const windowSize = useWindowSize();
  if(windowSize){
    if(windowSize.width >=1001){
      display = <div className="header">
        {display}
        <NavLink exact to='/' activeClassName="active"><h3>Home</h3></NavLink>
        <NavLink to='/employees' activeClassName="active"><h3>Employees</h3></NavLink>
        <button onClick={signOut}>Log Out</button>
      </div>;
    } else if(windowSize.width < 1001){
      display = <h1>Small</h1>;
    } 
  } else {
    display = <h1>Getting Screen Size.</h1>
  }

  return(
    <div>
      {display}
    </div>
  )
}

export default Header
