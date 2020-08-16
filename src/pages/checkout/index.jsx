import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelector';
import CheckoutItem from '../../components/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeButton';

import './style.scss';

const CheckoutPage = ({ cartItems, totalValue}) => {
    return ( 
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }

            <div className="total">
                <span>TOTAL: {totalValue}</span>
            </div>
            <div className="test-warning">
                * Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - expired: 01/20  - cvv:  
            </div>
            <StripeCheckoutButton price={totalValue} />
        </div> 
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalValue: selectCartTotal
})
 
export default connect(mapStateToProps)(CheckoutPage);