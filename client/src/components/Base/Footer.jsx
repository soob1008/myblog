import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <h2>Su-Been</h2>
            {/* <span className="email">1008sb354@gmail.com</span> */}
            <ul>
                <li>
                    <a target="_blank" href='https://soob108.notion.site/Front-End-Developer-d807636973ed4b409684c47389d52bc7'>Resume</a>
                </li>
                <li>
                    <a target="_blank" href='https://github.com/soob1008'>Github</a>
                </li>
                
            </ul>
            <p className="copyright">© Subeen All Rights Reserved</p>
        </div>
    );
};

export default Footer;
