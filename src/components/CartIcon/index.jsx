import React from 'react';
import { connect } from 'react-redux';
import { toggoleCartHidden } from '../../redux/cart/cartAction';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cartSelector';
import './style.scss';

const CartIcon = ({ toggoleCartHidden, itemCount }) => {
    return ( 
        <div className="cart-icon" onClick={toggoleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    );
}

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