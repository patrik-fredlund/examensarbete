import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  justify-content: space-between;
  background-color: #f2f3f5;

  /* padding-right: 100px; */
  display: flex;

  .logo {
    margin-left: 20px;
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
  width: 200px;
  display: flex;
  align-items: center;
  border: 1px solid red;
  justify-content: space-between;
`;

export const Menu = styled.div`
  /*   background-color: red;
 */
  display: flex;

  align-items: center;
  width: 300px;
  margin-right: 20px;
`;

export const NavLink = styled(Link)`
  /*   border: 1px solid black;
 */
  color: black;
  display: flex;
  height: 100%;
  width: 100px;
  text-decoration: none;
  justify-content: space-around;
  align-items: center;
  transition: all 0.6s ease-out;

  cursor: pointer;

  &.active {
    background-color: #bcfd4c;
    //background-color: #00FFC6;
    /*     color: #00ccff;
 */
  }

  &:hover {
    transition: all 0.6s ease-in-out;

    background: white;
    /* color: #00ccff; */
  }
`;