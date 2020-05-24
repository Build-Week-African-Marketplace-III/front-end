import React from 'react'
import { Link } from 'react-router-dom';
import { HeaderStyle } from './StyledComponents';
import Logo from '../img/logo-black.png'

function Header() {
    return (
        <HeaderStyle>
            <img src={Logo} alt="African Marketplace Logo" className="logo"/>
            <div>African Marketplace</div>
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
