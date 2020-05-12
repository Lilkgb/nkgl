import constants from './../constants';
// import * as firebase from 'firebase';
const {types, firebaseConfig} = constants;

// firebase.initializeApp(firebaseConfig);

export const testFunction = () => ({
  type: types.TEST_FUNCTION
})