import React from 'react'
import {Link} from 'react-router-dom';
import { HeaderStyle } from './StyledComponents';
import Logo from '../img/logo-black.png'

function Header() {
    return (
        <HeaderStyle>
            <h2>African Marketplace</h2>
            <img src={Logo} alt="African Marketplace Logo" className="logo"/>
            <nav className="nav">
                <Link to={`/`}>Home</Link>
                <Link to={`/about`}>About</Link>
                <Link to={`/order`}>Order Now</Link>
                <Link to={`/contact`}>Contact Us</Link>
            </nav>
        </HeaderStyle>
    )
}

export default Header;

