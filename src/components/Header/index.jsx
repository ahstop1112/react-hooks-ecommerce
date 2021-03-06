import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/utils';
import CartIcon from '../CartIcon/';
import Cart from '../Cart';
import { selectCurrentUser, selectCartHidden } from '../../redux/user/userSelector';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './style.scss';

const Header = ({ currentUser, hidden }) => ( 
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/shop">
                Contact
            </Link>
            {
                currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                ): (
                    <Link className="option" to="/signin">SIGN IN</Link>
                )
            }
            <CartIcon />
        </div>
        {hidden ? null : <Cart />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
  
export default connect(mapStateToProps)(Header);