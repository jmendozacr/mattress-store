import React from 'react';
import Logo from './../../images/logo.png';
import { ReactComponent as CartLogo } from './../../images/cart.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar justify-content-between">
            <div className="container">
                <NavLink exact to="/" className="navbar-brand">
                    <img className="logo" src={Logo} alt="saatva" />
                </NavLink>
                <div className="cart-container">
                    <NavLink to="/cart">
                        <CartLogo/>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Header;