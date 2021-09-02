import React, { useState } from 'react';
import Nav from '../../components/Nav';
import About from '../About';
import Projects from '../Portfolio';
import ContactForm from '../Contact';
import Resume from '../Resume';

function Header() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        // switch statement that will render appropriate selection
        switch (currentPage) {
            case "about":
                return <About></About>
            case "portfolio":
                return <Projects></Projects>
            case "contact":
                return <ContactForm></ContactForm>
            case "resume":
                return <Resume></Resume>
            default:
                return <About></About>
        }
    };
    return (
        <header className="flex-row px-1">
            <div className="flex-row">
                <h1 className="flex-row">
                    <a href="/">
                        Shannon Nell
                    </a>
                </h1>
                <div className="flex-row">
                    <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
                </div>
            </div>
            <div className="flex-row mq-pages">
                {
                    renderPage()
                }
            </div>
        </header>
    )
};

export default Header;