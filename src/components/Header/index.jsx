import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/utils';
import CartIcon from '../CartIcon/';
import Cart from '../Cart';
import { selectCurrentUser, selectCartHidden } from '../../redux/user/userSelector';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './style';

const Header = ({ currentUser, hidden }) => ( 
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                Shop
            </OptionLink>
            <OptionLink className="option" to="/shop">
                Contact
            </OptionLink>
            {
                currentUser ? (
                    <OptionLink as="div" className="option" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                ): (
                    <OptionLink className="option" to="/signin">SIGN IN</OptionLink>
                )
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <Cart />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
  
export default connect(mapStateToProps)(Header);