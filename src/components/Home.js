import React, {useState} from 'react';
import Header from './Header';
import {store} from '../index';
import {testFunction} from '../actions/index';
import * as firebase from 'firebase';
import SignIn from './SignIn';

function Home(props){
  let employees = {"jwoiennwe0923n":{name: "ryan mClEan", dob: "5/31/95"}, "oiwe09vj3": {name: "mAsOod", dob: "5/4/22"}, "wjeifoaj":{name: "jeff"}, "jwoeifjabwe": {name: "sarah Do"}};

  const captialize = words => words.split(' ').map( w =>  w.substring(0,1).toUpperCase()+ w.substring(1)).join(' ')

  const [info, setDisplay] = useState(employees);
  const [name, setName] = useState("");

  function testRedux(){
    store.dispatch(testFunction())
  }

  return(
    <div>
      <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder = "Find Employee"
        />
      <h1>{Object.keys(info).map((employee) => {
        let individual = info[employee];
        let lowercaseName = individual.name.toLowerCase();
        if(lowercaseName.includes(name.toLowerCase())){
        return <div key={employee}><h1>{captialize(lowercaseName)}</h1></div>
        }
      })}</h1>
      <button onClick={testRedux}>Test Reducer Function. Open console to see console log.</button>
    </div>
  )
}

export default Home;
