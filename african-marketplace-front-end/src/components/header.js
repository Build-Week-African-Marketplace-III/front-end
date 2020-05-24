import React from 'react'
import {Link} from 'react-router-dom';
import { Header } from 'styled-components';

function header() {
    return (
        <Header>
            <h1>African Marketplace</h1>
            <nav>
                <Link to={`/`}>Home</Link>
                <Link to={`/about`}>About</Link>
                <Link to={`/order`}>Order Now</Link>
                <Link to={`/contact`}>Contact Us</Link>
            </nav>
        </Header>
    )
}

export default header
