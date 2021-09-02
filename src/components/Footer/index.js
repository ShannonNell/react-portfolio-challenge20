import React from 'react';
import GitHubIcon from '../../assets/icon_gitHub.png';
import LinkedInIcon from '../../assets/icon_LinkedIn.png';
import snellIcon from '../../assets/icon_snell.png';


function Footer() {
    return (
        <footer id="footer">
            <div className="footer-flex">
                <div className="footer-content">
                    <a id="footerLink" href="https://github.com/ShannonNell" target="_blank">
                        <img alt="GitHub icon" src={GitHubIcon} width="30px"></img>
                    </a>
                    <a id="footerLink" href="https://www.linkedin.com/in/shannonnell/" target="_blank">
                        <img alt="LinkedIn icon" src={LinkedInIcon} width="30px"></img>
                    </a>
                    <a id="footerLink" href="https://www.snellcreatives.ca/" target="_blank">
                        <img alt="snell creatives icon" src={snellIcon} width="30px"></img>
                    </a>
                </div>
                <div className="footer-copyright">
                    <p className="footer-copyright"> &copy; 2021 Shannon</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;