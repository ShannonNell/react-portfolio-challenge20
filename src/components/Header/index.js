import React from 'react';
import logoImage from '../../assets/snell_logo.png';
import Nav from '../../components/Nav';

function Header() {    
    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    <span role="img" aria-label="snell">
                        <img src={logoImage} className="my-1" style={{ width: "50px" }} alt="snell logo" />
                    </span>
                    Shannon Nell
                </a>
            </h2>
            <Nav></Nav>
        </header>
    )
};

export default Header;