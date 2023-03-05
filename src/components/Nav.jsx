import React from 'react';

function Nav() {
    return (
    <nav className="Nav">
        <ul className="navMenu d-flex">
            <li className="navItem">
                <a href="/" className="navLogo">
                    <span className="c-iris">web</span>
                    <span>studio</span>
                </a>
            </li>
            <li className="navItem"><a href="/">Studio</a></li>
            <li className="navItem"><a href="/">Portfolio</a></li>
            <li className="navItem"><a href="/">Contacts</a></li>
        </ul>
    </nav>)
        
}

export default Nav;