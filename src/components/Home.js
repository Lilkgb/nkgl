import React, {useState} from 'react';
import {store} from '../index';
import {testFunction} from '../actions/index';
import * as firebase from 'firebase';

function Home(props){

  function testRedux(){
    store.dispatch(testFunction())
  }

  return(
    <div>
      <button onClick={testRedux}>Test Reducer Function. Open console to see console log.</button>
    </div>
  )
}

export default Home;
