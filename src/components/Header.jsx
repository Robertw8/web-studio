import React from "react";
import Nav from "./Nav";
import NavContacts from "./NavContacts";
export function Header() {
  return (
    <>
      <nav className="nav">
        <Nav />
      </nav>
      <NavContacts />
      <button className="mainBtn mobileMenuBtn">Menu</button>
    </>
  );
}

export default Header;
