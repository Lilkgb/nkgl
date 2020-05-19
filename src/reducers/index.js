import {combineReducers} from 'redux';
import testReducer from './testReducer';
import authReducer from './authReducer';
import employeesInfoReducer from './employeesInfoReducer';

const rootReducer = combineReducers({
    testState: testReducer,
    employeesState: employeesInfoReducer,
    authState: authReducer
});

export default rootReducer;
