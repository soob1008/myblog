import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <h2>Su-Been</h2>
            {/* <span className="email">1008sb354@gmail.com</span> */}
            <ul>
                <li>
                    <Link to="/">Github</Link>
                </li>
                <li>
                    <Link to="/">Resume</Link>
                </li>
            </ul>
            <p className="copyright">© Subeen All Rights Reserved</p>
        </div>
    );
};

export default Footer;
