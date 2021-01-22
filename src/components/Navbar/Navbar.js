import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from "./NavbarElements";
import Logo from "../../logo.png";
import { BiMap, BiListUl } from "react-icons/bi";

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
            <NavLink to="/" exact >
              <BiListUl size={24} className="tabicon" />
              <span className="menu-item"> LIST</span>
            </NavLink>
            <NavLink to="/maps" >
              <BiMap size={24} className="tabicon" />
              <span className="menu-item"> MAPS</span>
            </NavLink>
          </div>

          <Bars />
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
