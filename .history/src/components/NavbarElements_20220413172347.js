import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  justify-content: space-between;
  background-color: #f2f3f5;

  /* padding-right: 100px; */
  display: flex;

  .logo {
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .navItem {
    font-weight: 600;
    font-size: 12px;
    text-decoration: none;
  }
`;

export const Logo = styled.nav`
  /* padding-right: 100px; */
`;

export const Menu = styled.div`
  /*   background-color: red;
 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

export const NavLink = styled(Link)`
  border: 1px solid black;

  color: black;
  display: flex;
  height: 100%;
  width: 100px;
  text-decoration: none;
  padding: 0 1rem;
  align-items: center;

  cursor: pointer;

  &.active {
    background-color: #bcfd4c;
    /*     color: #00ccff;
 */
  }

  &:hover {
    transition: all 0.4s ease-in-out;
    background: white;
    /* color: #00ccff; */
  }
`;
