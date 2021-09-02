import React from 'react';
import resumePDF from '../../assets/2021_NellCodingResume.pdf';

function Resume () {
    return (
        <article className="resume-content">
            <p>Download my
                <a href={resumePDF} download>resume</a>
            </p>
            <h3>
                Employment Skills
            </h3>
            <ul>
                <li>
                    Design: Adobe Suite, Microsoft Office, Plotagraph, 3DS Max, and Final Cut Pro
                </li>
                <li>
                    Coding: HTML, CSS, Git, JavaScript, Web API’s, Third Party API’s, Server-Side API’s, Node.js, Object-Oriented Programming, Express.js, Structured Query Language, Object Relational Mapping
                </li>
            </ul>
            
            {/* Education */}
            <h3>
                Education
            </h3>

            <h4> Coding Bootcamp Certificate (online)</h4>
            <ul>
                <li>
                    Expected completion September 2021
                </li>
                <li>
                    University of Toronto - Toronto, ON
                </li>
            </ul>
            <h4> Graduate Certificate in 3D Animation and Character Design</h4>
            <ul>
                <li>
                    May 2018
                </li>
                <li>
                    Fanshawe College - London, ON
                </li>
            </ul>
            <h4> Diploma in Professional Photography </h4>
            <ul>
                <li>
                    November 2015
                </li>
                <li>
                    Photography Institute - Canada
                </li>
            </ul>
            <h4> BA in Media, Information and Technoculture </h4>
            <ul>
                <li>
                    May 2014
                </li>
                <li>
                    Western University - London, ON
                </li>
            </ul>
            <h4> Diploma in Television Broadcasting </h4>
            <ul>
                <li>
                    May 2014
                </li>
                <li>
                    Fanshawe College - London, ON
                </li>
            </ul>

            
            {/* EXPERIENCE */}
            <h3>
                Experience
            </h3>
            <article>
                <h4> Sales Associate - Disney Store</h4>
                <div className="resLocDate">
                    <p>November 2018 - present</p>
                    <h5>London, ON</h5>
                </div>
                <ul>
                    <li>
                        Assist and engage with guests in finding solutions that best meet their needs
                    </li>
                    <li>
                        Perform POS duties in an efficient and timely manner while maintaining a high level of Guest Service
                    </li>
                    <li>
                        Provide a safe and magical workplace that is fun and productive for all participants – cast members and guests alike
                    </li>
                    <li>
                        Seasonal lead on the management team
                    </li>
                </ul>
            </article>
            <article>
                <h4> Swim Coach - London Aquatic Club</h4>
                <div className="resLocDate">
                    <p>September 2014 - present</p>
                    <h5>London, ON</h5>
                </div>
                <ul>
                    <li>
                        Provide a safe and enjoyable environment for young swimmers
                    </li>
                    <li>
                        Instruct swimmers on good sportsmanship, competitive spirit, and teamwork skills
                    </li>
                </ul>
            </article>
            <article>
                <h4> Photography & Design - Snell Creatives</h4>
                <div className="resLocDate">
                    <p>March 2015 - present</p>
                    <h5>London, ON</h5>
                </div>
                <ul>
                    <li>
                        Working with clients in a variety of photography formats: animal, couples, family, maternity, newborn, portraits, sport, and wedding sessions
                    </li>
                    <li>
                        Digital design, videos, and animation
                    </li>
                </ul>
            </article>
            <article>
                <h4> Set Production Assistant - Directors Guild of Canada</h4>
                <div className="resLocDate">
                    <p>2016 - 2017</p>
                    <h5>Toronto, ON</h5>
                </div>
                <ul>
                    <li>
                        Tasks including: maintaining the set box, distributing and collecting paperwork
                    </li>
                    <li>
                        Communicating to various departments and cast what is happening on set, what the shots are, and what will be happening in said shots
                    </li>
                    <li>
                        Always maintaining a positive attitude despite the location, weather, and long hours
                    </li>
                </ul>
            </article>
            
            
            
        </article>
    )
};

export default Resume;