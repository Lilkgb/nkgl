import React from 'react';
import '../scss/App.scss';
import Error404 from './Error404';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import SignIn from './SignIn';
import Header from './Header';

function App(props) {

  let display;

  console.log(props)

  if(props.authUser){
    display = <div><Header />
    <Switch>
      <Route exact path ='/' component={Home}/>
      <Route component={Error404}/>
    </Switch></div>
  } else {
    display = <div><Switch>
    <Route exact path ='/' component={SignIn}/>
    <Route component={Error404}/>
  </Switch></div>
  }

  return (
    <div className="App">
      {display}
    </div>
  );
}

const mapStateToProps = state => ({
  authUser: state.authState
})

export default connect(mapStateToProps)(App);
