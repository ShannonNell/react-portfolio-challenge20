import React from 'react';
import GitHubIcon from '../../assets/icon_gitHub.png';
import LinkedInIcon from '../../assets/icon_LinkedIn.png';
import snellIcon from '../../assets/icon_snell.png';


function Footer() {
    return (
        <footer className="page-footer" id="footer">
            <p>2021 Shannon</p>
            <a id="footerLink" href="https://github.com/ShannonNell">
                <img alt="GitHub icon" src={GitHubIcon} width="30px"></img>
            </a>
            <a id="footerLink" href="https://www.linkedin.com/in/shannonnell/">
                <img alt="LinkedIn icon" src={LinkedInIcon} width="30px"></img>
            </a>
            <a id="footerLink" href="https://www.snellcreatives.ca/">
                <img alt="snell creatives icon" src={snellIcon} width="30px"></img>
            </a>
        </footer>
    )
};

export default Footer;