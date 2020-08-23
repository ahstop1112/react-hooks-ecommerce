import React from 'react';
import { connect } from 'react-redux';
import { toggoleCartHidden } from '../../redux/cart/cartAction';
import { selectCartItemsCount } from '../../redux/cart/cartSelector';
import {
    CartContainer,
    ShoppingIcon,
    ItemCountContainer
  } from './style';

const CartIcon = ({ toggoleCartHidden, itemCount }) =>  ( 
    <CartContainer onClick={toggoleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
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