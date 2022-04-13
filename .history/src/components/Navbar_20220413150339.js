import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './NavbarElements';

export const Navbar = () => {
  return (
    <Nav>
      <Link to='/'>Home</Link>
      <Link to='Work'>Work</Link>
      <Link to='About'>About</Link>
      <Link to='Contact'>Contact</Link>
    </Nav>
  );
};
