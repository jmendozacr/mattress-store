import React from 'react';
import Logo from './../../images/logo.png';
import { ReactComponent as CartLogo } from './../../images/cart.svg';
import { NavLink } from 'react-router-dom';
import { useMattressesContext } from '../../context/mattressesContext';

const Header = () => {
    const { cart } = useMattressesContext();

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
                    {
                        cart.length > 0 ? <div className="count">{cart.length}</div> : <></>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Header;