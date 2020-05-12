import {combineReducers} from 'redux';
import testReducer from './testReducer';

const rootReducer = combineReducers({
    testState: testReducer
});

export default rootReducer;
