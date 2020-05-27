import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle, PrimaryButton, SecondaryButton, StyledLink } from './StyledComponents';
import Logo from '../img/logo-black.png'

export function Header() {

    return (
        <HeaderStyle>
            <img src={Logo} alt="African Marketplace Logo" className="logo"/>
            <h1>African Marketplace</h1>
            
            <Link to={'/login'}>
            <PrimaryButton>Login</PrimaryButton>
            </Link>

            <Link to={'/signup'}>
            <SecondaryButton>Sign Up</SecondaryButton>
            </Link>

            <nav className="nav">
                <StyledLink to={`/`}>Home</StyledLink>
                <StyledLink to={`/about`}>About</StyledLink>
                <StyledLink to={`/contact`}>Contact Us</StyledLink>
            </nav>
                
        </HeaderStyle>
    )
};

