import React from 'react';
import Header from './Header';
import {store} from '../index';
import {testFunction} from '../actions/index';
import * as firebase from 'firebase';
import SignIn from './SignIn';

function Home(props){

  function testRedux(){
    store.dispatch(testFunction())
  }

  return(
    <div id="firebaseui-auth-container">
      <Header />
      <SignIn />
      <h1>Welcome to the home component</h1>
      <button onClick={testRedux}>Test Reducer Function. Open console to see console log.</button>
    </div>
  )
}

export default Home;
