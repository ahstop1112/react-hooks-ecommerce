import React from 'react';
import { connect } from 'react-redux';
import { toggoleCartHidden } from '../../redux/cart/cartAction';
import { selectCartItemsCount } from '../../redux/cart/cartSelector';
import { CartIconContainer, 
         ShoppingIconContainer, 
         ItemCountContainer } from './style';

const CartIcon = ({ toggoleCartHidden, itemCount }) =>  ( 
    <CartIconContainer onClick={toggoleCartHidden}>
        <ShoppingIconContainer className="shopping-icon" />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
);

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggoleCartHidden: () => dispatch(toggoleCartHidden())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CartIcon);