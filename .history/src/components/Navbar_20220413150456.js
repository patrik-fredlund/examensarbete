import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Link } from './NavbarElements';

export const Navbar = () => {
  return (
    <Nav>
      <Link className='link' to='/'>
        Home
      </Link>
      <Link className='link' to='Work'>
        Work
      </Link>
      <Link className='link' to='About'>
        About
      </Link>
      <Link className='link' to='Contact'>
        Contact
      </Link>
    </Nav>
  );
};
