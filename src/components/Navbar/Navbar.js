import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import Logo from "../../logo.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about">
            <span className="menu-item">ABOUT</span>
          </NavLink>
          <NavLink to="/">
            <img className="Logo" src={Logo} alt="Surftrip" />
          </NavLink>
          <NavLink to="/" exact activeStyle>
            <span className="menu-item">LIST</span>
          </NavLink>
          <NavLink to="/maps" activeStyle>
            <span className="menu-item">MAPS</span>
          </NavLink>
          <Bars />
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
