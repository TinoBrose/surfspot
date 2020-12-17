import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import Logo from "./Surftrip.png";
import { BiMap, BiListUl } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img className="Logo" src={Logo} alt="Surftrip" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" exact activeStyle>
            <BiListUl size={24} className="tabicon" />
            Spot List
          </NavLink>
          <NavLink to="/maps" activeStyle>
            <BiMap size={24} className="tabicon" />
            Maps
          </NavLink>
          <div className="vl"></div>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
        </NavMenu>
          
      </Nav>
    </>
  );
};

export default Navbar;
