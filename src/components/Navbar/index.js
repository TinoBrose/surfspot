import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import Logo from './Surftrip.png'


const Navbar = () => {
    return (
        <>
           <Nav>
               <NavLink to="/">
                    <img className='Logo' src={Logo} alt='Surftrip' />
               </NavLink>
               <Bars />
               <NavMenu>
                   <NavLink to="/" exact activeStyle>
                       Home
                   </NavLink>
                   <NavLink to="/about" activeStyle>
                       About
                   </NavLink>
               </NavMenu>
               <NavBtn>
                   <NavBtnLink to='/signin'>Sign In</NavBtnLink>
               </NavBtn>
            </Nav> 
        </>
    )
}

export default Navbar
