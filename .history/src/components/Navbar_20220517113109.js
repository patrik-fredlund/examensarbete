import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, Nav, NavMenu, Logo, Bars } from '../styles/NavbarStyles';

export const Navbar = ({ toggle }) => {
  return (
    <NavContainer>
      <Nav>
        <Logo>
          <Link to='/'>
            <img
              className='logo'
              src={require('../Images/PF_logo_rak1.png')}
              alt=''
            />
          </Link>
          <h1 className='logoName'>Patrik Fredlund</h1>
        </Logo>
        <Bars onClick={toggle} />{' '}
        <NavMenu>
          <NavLink className='navItem1' to='Work'>
            Work
          </NavLink>
          <NavLink className='navItem2' to='About'>
            About
          </NavLink>
          <NavLink className='navItem3' to='Contact'>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </NavContainer>
  );
};
