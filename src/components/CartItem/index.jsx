import React from 'react';
import {
    CartItemContainer,
    ItemDetailsContainer,
    CartItemImage
  } from './style';

const CartItem = ({item: { name, price, imageUrl, quantity }}) => ( 
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt="item" />
        <ItemDetailsContainer>
            <span className="name">{ name }></span>
            <span className="price">{ quantity } x { price }</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);
 
export default CartItem;