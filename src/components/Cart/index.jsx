import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { toggoleCartHidden } from '../../redux/cart/cartAction';
import CartItem from '../CartItem';
import CustomButton from '../CustomButton';
import './style.scss';

const Cart = ({ cartItems, history, dispatch }) => ( 
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? 
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                : <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggoleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,

})
 
export default withRouter(connect(mapStateToProps)(Cart));