import {combineReducers} from 'redux';
import testReducer from './testReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    testState: testReducer,
    authState: authReducer
});

export default rootReducer;
