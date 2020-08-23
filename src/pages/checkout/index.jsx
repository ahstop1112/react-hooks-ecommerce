import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelector';
import CheckoutItem from '../../components/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeButton';
import { CheckoutPageContainer, CheckoutHeaderContainer, CheckoutHeaderBlock, Total} from './style';

const CheckoutPage = ({ cartItems, totalValue}) => {
    return ( 
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <CheckoutHeaderBlock>
                    <span>Product</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Description</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Quantity</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Price</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Remove</span>
                </CheckoutHeaderBlock>
            </CheckoutHeaderContainer>

            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }

            <Total>
                <span>TOTAL: {totalValue}</span>
            </Total>
            <div className="test-warning">
                * Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - expired: 01/20  - cvv:  
            </div>
            <StripeCheckoutButton price={totalValue} />
        </CheckoutPageContainer> 
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalValue: selectCartTotal
})
 
export default connect(mapStateToProps)(CheckoutPage);