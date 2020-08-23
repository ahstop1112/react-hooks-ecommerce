import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { toggoleCartHidden } from '../../redux/cart/cartAction';
import CartItem from '../CartItem';
import { CartDropdownContainer, CartDropdownButton, CartItemsContainer, EmptyMessageContainer } from './style';

const Cart = ({ cartItems, history, dispatch }) => ( 
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                )}
        </CartItemsContainer>
        <CartDropdownButton onClick={() => {
            history.push('/checkout');
            dispatch(toggoleCartHidden());
        }}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,

})
 
export default withRouter(connect(mapStateToProps)(Cart));