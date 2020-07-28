import { combineReducers } from 'redux';
import CurrentPageReducer from './current-page-reducer';

const allReducers = combineReducers({
    currentPage: CurrentPageReducer
});

export default allReducers;
