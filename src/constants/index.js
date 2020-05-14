import * as types from './ActionTypes';
import {initialState, authState} from './InitialState';
import firebaseConfig from './firebaseConfig';

export default {
  initialState: initialState,
  firebaseConfig: firebaseConfig,
  authState: authState,
  types: types
}
