import React from 'react';
import { connect } from 'react-redux';
import { toggoleCartHidden } from '../../redux/cart/cartAction';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './style.scss';

const CartIcon = ({ toggoleCartHidden }) => {
    return ( 
        <div className="cart-icon" onClick={toggoleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toggoleCartHidden: () => dispatch(toggoleCartHidden())
});

export default connect(
  null, 
  mapDispatchToProps
)(CartIcon);