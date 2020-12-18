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
          <div className="about-menu menu-item">
            <NavLink to="/about">
              <span>ABOUT</span>
            </NavLink>
          </div>
          <div className="menu-item">
            <NavLink to="/">
              <img className="Logo" src={Logo} alt="Surftrip" />
            </NavLink>
          </div>
          <div className="main-menu menu-item">
            <NavLink to="/" exact activeStyle>
              <span className="menu-item">LIST</span>
            </NavLink>
            <NavLink to="/maps" activeStyle>
              <span className="menu-item">MAPS</span>
            </NavLink>
          </div>

          <Bars />
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
