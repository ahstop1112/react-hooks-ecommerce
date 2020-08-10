import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})
//combined all of the states together
//user reducer
//cart reducer