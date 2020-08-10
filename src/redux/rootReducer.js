import { combineReducers } from 'redux';
import userReducer from './user/userReducer';

export default combineReducers({
    user: userReducer
})
//combined all of the states together
//user reducer
//cart reducer