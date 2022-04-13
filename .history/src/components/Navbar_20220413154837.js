import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Logo } from './NavbarElements';

export const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <Link to='/'>
          <img className='logo' src={require('../Images/pf-logo.png')} alt='' />
        </Link>
      </Logo>

      <Link className='cell grid' to='Work'>
        Work
      </Link>
      <Link className='cell grid' to='About'>
        About
      </Link>
      <Link className='cell grid' to='Contact'>
        Contact
      </Link>
    </Nav>
  );
};
