import React, {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as firebase from 'firebase';
import '../scss/Header.scss';

function Header(){

  let display;
  let headerDisplay;
  const[active, setActive] = useState("activeHome");
  const[showHide, setShowHide] = useState(false)

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

  if(showHide === false){
    headerDisplay = {header: "hide", menu: "hide"};
  } else if(showHide){
    headerDisplay = {header: "open", menu: "show"};
  }

  function toggleNav(){
    if(showHide){
      setShowHide(false)
    } else {
      setShowHide(true)
    }
  }

  const windowSize = useWindowSize();
  if(windowSize){
    if(windowSize.width >=1001){
      display = <div className="header">
        <NavLink exact to='/' activeClassName="active"><h3>Home</h3></NavLink>
        <NavLink to='/employees' activeClassName="active"><h3>Employees</h3></NavLink>
        <NavLink to='/vanlist' activeClassName="active"><h3>Van List</h3></NavLink>
        <button onClick={signOut}>Log Out</button>
      </div>;
    } else if(windowSize.width < 1001){
      display = <div className="headerMbl">
        <div className="showHide">
          <div onClick={toggleNav} id="nav-icon2" className={headerDisplay.header}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={headerDisplay.menu}>
          <NavLink exact to='/' onClick={() => setShowHide(false)}><h3>Home</h3></NavLink>
          <NavLink to='/employees' onClick={() => setShowHide(false)}><h3>Employees</h3></NavLink>
          <button onClick={signOut}>Log Out</button>
        </div>
    </div>;
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
