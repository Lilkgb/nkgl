import React from 'react';
import Header from './Header';
import {store} from '../index';
import {testFunction} from '../actions/index';

function Home(props){

  function testRedux(){
    store.dispatch(testFunction())
  }

  return(
    <div>
      <Header />
      <h1>Welcome to the home component</h1>
      <button onClick={testRedux}>Test Reducer Function. Open console to see console log.</button>
    </div>
  )
}

export default Home;
