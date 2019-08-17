import { combineReducers } from 'redux';
import homeReducer from './home';
import headerReducer from './header'

const combineRed = combineReducers({
    homeReducer,
    headerReducer
});

export default combineRed