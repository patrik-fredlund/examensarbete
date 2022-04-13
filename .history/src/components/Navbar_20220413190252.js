import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Menu, Logo, NavLink, Bars } from './NavbarElements';

export const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo>
        <Link to='/'>
          <img
            className='logo'
            src={require('../Images/pf_logo_short.png')}
            alt=''
          />
        </Link>
        <h1 className='logoName'>Patrik Fredlund</h1>
      </Logo>
      <Bars onClick={toggle} />{' '}
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
