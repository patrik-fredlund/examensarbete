import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  justify-content: space-between;
  background-color: blue;

  /* padding-right: 100px; */
  display: flex;

  .logo {
    margin-left: 10px;
    margin-top: 20px;
  }

  .navItem {
    font-weight: 500;
    font-size: 12px;
    text-decoration: none;
  }
`;

export const Logo = styled.nav`
  /* padding-right: 100px; */
`;

export const Menu = styled.div`
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #00ccff;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #00141a;
    color: #00ccff;
  }
`;
