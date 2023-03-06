import React from "react";

function Nav() {
  return (
    <>
      <ul className="navMenu d-flex">
        <li className="navItem navLogo">
          <a href="/" className="logo">
            <span className="c-iris">web</span>
            <span>studio</span>
          </a>
        </li>
        <li className="navItem">
          <a href="/">Studio</a>
        </li>
        <li className="navItem">
          <a href="/">Portfolio</a>
        </li>
        <li className="navItem">
          <a href="/">Contacts</a>
        </li>
      </ul>
    </>
  );
}

export default Nav;
