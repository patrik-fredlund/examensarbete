import React from 'react';
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
            <Navbar bg='light' expand='lg'>
              <Container>
                <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='me-auto'>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#link'>Link</Nav.Link>
                    <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                      <NavDropdown.Item href='#action/3.1'>
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href='#action/3.2'>
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href='#action/3.3'>
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href='#action/3.4'>
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
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
