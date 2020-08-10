import React from 'react';
import CustomButton from '../CustomButton';
import './style.scss';

const CartDropdown = ({id, name, price, imageUrl}) => {
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items" />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}
 
export default CartDropdown;