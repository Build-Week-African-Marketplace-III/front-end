import React from 'react'
<<<<<<< HEAD
<<<<<<< HEAD
import {Link} from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
>>>>>>> 8f7bd814c67c2b8abd44c1582f563594e019701e
=======
import {Link} from 'react-router-dom';
>>>>>>> 0737079098963a20e404bcbeab6b7aec42cfbdbc
import { HeaderStyle } from './StyledComponents';
import Logo from '../img/logo-black.png'

function Header() {
    return (
        <HeaderStyle>
<<<<<<< HEAD
<<<<<<< HEAD

            <h1>African Marketplace</h1>
            <img src={Logo} alt="African Marketplace Logo" className="logo"/>
            <div>African Marketplace</div>
            <nav className="nav">
=======
            <img src={Logo} alt="African Marketplace Logo" className="logo"/>
            <div>African Marketplace</div>
            {/* <nav className="nav">
>>>>>>> 8f7bd814c67c2b8abd44c1582f563594e019701e
=======

            <h1>African Marketplace</h1>
            <nav>
            <img src={Logo} alt="African Marketplace Logo" className="logo"/>
            <div>African Marketplace</div>
            {/* <nav className="nav">
>>>>>>> 0737079098963a20e404bcbeab6b7aec42cfbdbc
                <Link to={`/`}>Home</Link>
                <Link to={`/about`}>About</Link>
                <Link to={`/order`}>Order Now</Link>
                <Link to={`/contact`}>Contact Us</Link>
<<<<<<< HEAD
<<<<<<< HEAD
            </nav>
=======
            </nav> */}
>>>>>>> 8f7bd814c67c2b8abd44c1582f563594e019701e
=======
            </nav>
            </nav> */}
>>>>>>> 0737079098963a20e404bcbeab6b7aec42cfbdbc
        </HeaderStyle>
    )
}

<<<<<<< HEAD
<<<<<<< HEAD
export default Header
=======
export default Header;
>>>>>>> 8f7bd814c67c2b8abd44c1582f563594e019701e
=======
export default Header;

>>>>>>> 0737079098963a20e404bcbeab6b7aec42cfbdbc
