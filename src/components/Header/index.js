import React, { useState } from 'react';
import logoImage from '../../assets/snell_logo.png';
import Nav from '../../components/Nav';
import About from '../About';
import Portfolio from '../Portfolio';
// import Contact from '../Contact';
// import Resume from '../Resume';

function Header() {    
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch(currentPage) {
            case "about": 
            return <About></About>
            case "portfolio": 
            return <Portfolio></Portfolio>
            // case "contact": 
            // return <Contact></Contact>
            // case "resume":
            // return <Resume></Resume>
            default: 
            return <About></About>
        }
    };
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
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>
                {
                    renderPage()
                }
            </div>
        </header>
    )
};

export default Header;