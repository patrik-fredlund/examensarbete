import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Menu, Logo, NavLink } from './NavbarElements';

export const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <NavLink to='/'>
          <img className='logo' src={require('../Images/pf-logo.png')} alt='' />
        </NavLink>
      </Logo>
      <Menu>
        <NavLink className='navItem' to='Work'>
          Work
        </NavLink>
        <NavLink className='navItem' to='About'>
          About
        </NavLink>
        <NavLink className='navItem' to='Contact'>
          Contact
        </NavLink>
      </Menu>
    </Nav>
  );
};
