import constants from './../constants';
import * as firebase from 'firebase';
import {store} from './../index';
const {types, firebaseConfig} = constants;

firebase.initializeApp(firebaseConfig);

export const testFunction = () => ({
  type: types.TEST_FUNCTION
})

firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    store.dispatch(authUserTrue());
    firebase.database().ref('employees').on('value', function(snapshot) {
      store.dispatch(getAllEmployees(snapshot.val()))
    })
  } else {
    store.dispatch(authUserFalse());
    store.dispatch(dumpAllEmployees)
  }
})

export const authUserTrue = () => ({
  type: types.AUTH_USER_TRUE
})

export const authUserFalse = () => ({
  type: types.AUTH_USER_FALSE
})

export const getAllEmployees = (information) => ({
  type: types.GET_ALL_EMPLOYEES,
  information
})

export const dumpAllEmployees = () => ({
  type: types.DUMP_ALL_EMPLOYEES
})