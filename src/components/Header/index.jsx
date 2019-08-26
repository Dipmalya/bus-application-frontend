import React from 'react';
import '../../assests/css/header.css';
const logo = require('../../assests/images/iskcon-logo.ico')

const Header = () => (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <a className="navbar-brand brand" href="http://www.iskcon.org">
            <img src={logo} alt="Brand Logo" className="brand-logo" />
            ISKCON
        </a>
    </nav>
)

export default Header;