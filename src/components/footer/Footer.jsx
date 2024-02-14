import React from 'react';
import { NavLink } from 'react-router-dom';
import '../footer/footer-style.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="name-copyright">
                <p>
                    Eric Sällström © <span className="hideOnMobile">| All Rights Reserved</span>
                </p>
            </div>
            <div className="social-links">
                <NavLink
                    to="https://www.linkedin.com/in/eric-s%C3%A4llstr%C3%B6m-aa58a9231/"
                    target="_blank"
                >
                    <img
                        src="/icons/linkedin-icon.png"
                        alt="LinkedIn logo"
                        className="social-link"
                    />
                </NavLink>
                <NavLink to="https://github.com/ericsallstrom" target="_blank">
                    <img src="/icons/github-icon.png" alt="GitHub logo" className="social-link" />
                </NavLink>
            </div>
            <div className="web-guidelines">
                <NavLink
                    to="https://www.digg.se/webbriktlinjer/alla-webbriktlinjer"
                    target="_blank"
                    className="web-guidelines-link"
                >
                    Web Guidelines
                </NavLink>
            </div>
        </div>
    );
};

export default Footer;
