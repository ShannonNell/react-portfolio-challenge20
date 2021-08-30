import React from 'react';

function Nav() {
    const tabs = ['about', 'portfolio', 'contact', 'resume'];

    function tabSelected(tab) {
        console.log(`${tab} clicked`);
    };

    return (
        <ul className="flex-row">
            {tabs.map((tab) => (
                <li
                    className="mx-1"
                    key={tab}
                >
                    <span onClick={() => tabSelected(tab)} >
                        {tab}
                    </span>
                </li>
            ))}
        </ul>
    )
};

export default Nav;