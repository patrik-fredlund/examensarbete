import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Cell } from './NavbarElements';

export const Navbar = () => {
  return (
    <Nav>
      <Link className='cell, grid' to='/'>
        Home
      </Link>
      <Link className='cell, grid' to='Work'>
        Work
      </Link>
      <Link className='cell, grid' to='About'>
        About
      </Link>
      <Link className='cell, grid' to='Contact'>
        Contact
      </Link>
    </Nav>
  );
};
