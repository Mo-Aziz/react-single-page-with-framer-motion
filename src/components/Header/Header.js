import React from 'react';
import {Navbar,Logo,NavItems,NavbarLink} from "./Header.styles";

const Header = () => {
    return (
       <Navbar>
           <Logo to="/">Animals</Logo>
           <NavItems>

               <NavbarLink to="/">Home</NavbarLink>
               <NavbarLink to="/about">About</NavbarLink>
               <NavbarLink to="/services">Services</NavbarLink>
           </NavItems>
       </Navbar>
    )
}

export default Header
