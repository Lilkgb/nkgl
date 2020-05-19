import React, {useState} from 'react';
import {store} from '../index';
import {testFunction} from '../actions/index';
import * as firebase from 'firebase';

function Home(props){

  function testRedux(){
    let hash = encodeURIComponent(btoa("hello"))
    console.log(hash)
    let check = atob(decodeURIComponent(hash))
    console.log(check)
  }

  return(
    <div>
      <button onClick={testRedux}>Test Reducer Function. Open console to see console log.</button>
    </div>
  )
}

export default Home;
