import React from 'react';
import { CartItemContainer, ItemDetailsContainer, Name } from './style';

const CartItem = ({item: { name, price, imageUrl, quantity }}) => ( 
    <CartItemContainer>
        <img src={imageUrl} alt="item" />
        <ItemDetailsContainer>
            <Name>{ name }></Name>
            <span className="price">{ quantity } x { price }</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);
 
export default CartItem;