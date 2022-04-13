import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Cell } from './NavbarElements';

export const Navbar = () => {
  return (
    <Nav>
      <Cell>
        <Link to='/'>Home</Link>
      </Cell>
      <Cell>
        <Link to='Work'>Work</Link>
      </Cell>
      <Cell>
        <Link to='About'>About</Link>
      </Cell>{' '}
      <Cell>
        <Link to='Contact'>Contact</Link>
      </Cell>
    </Nav>
  );
};
