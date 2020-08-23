import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { toggoleCartHidden } from '../../redux/cart/cartAction';
import CartItem from '../CartItem';
import CustomButton from '../CustomButton';
import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
  } from './style';

const Cart = ({ cartItems, history, dispatch }) => ( 
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ? 
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggoleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,

})
 
export default withRouter(connect(mapStateToProps)(Cart));