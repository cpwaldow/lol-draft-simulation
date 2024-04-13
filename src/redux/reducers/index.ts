import { combineReducers } from 'redux';
import championsReducer from './championsReducer';
import titleReducer from './titleReducer';

const rootReducer = combineReducers({ championsReducer, titleReducer });

export default rootReducer;
