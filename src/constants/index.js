import * as types from './ActionTypes';
import {initialState, authState, employeesState} from './InitialState';
import firebaseConfig from './firebaseConfig';

export default {
  initialState: initialState,
  firebaseConfig: firebaseConfig,
  employeesState: employeesState,
  authState: authState,
  types: types
}
