import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  NavContainer,
  Nav,
  NavMenu,
  Logo,
  NavLink,
  Bars,
} from './NavbarElements';

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
          <NavLink className='navItem' to='Work'>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            Work
          </NavLink>
          <NavLink className='navItem' to='About'>
            About
          </NavLink>
          <NavLink className='navItem' to='Contact'>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </NavContainer>
  );
};
