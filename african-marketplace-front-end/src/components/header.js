import React from 'react';
import { HeaderStyle, PrimaryButton, SecondaryButton, StyledLink } from './StyledComponents';
import Logo from '../img/logo-black.png'

export function Header() {

    return (
        <HeaderStyle>
            <img src={Logo} alt="African Marketplace Logo" className="logo"/>
            <h1>African Marketplace</h1>
            <PrimaryButton>Login</PrimaryButton>
            <SecondaryButton>Sign Up</SecondaryButton>
            <nav className="nav">
                <StyledLink hoverClassName='hover' to={`/`}>Home</StyledLink>
                <StyledLink to={`/about`}>About</StyledLink>
                <StyledLink to={`/contact`}>Contact Us</StyledLink>
            </nav>
                
        </HeaderStyle>
    )
};

