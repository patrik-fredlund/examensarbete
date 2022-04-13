import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  justify-content: space-between;
  //  background-color: #9e9e9e;
  //background-color: whitesmoke;
  //background-color: white;

  /* padding-right: 100px; */
  display: flex;

  .logo {
    margin-left: 25px;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .navItem {
    font-weight: 600;
    font-size: 12px;
    text-decoration: none;
  }
`;

export const Logo = styled.nav`
  display: flex;
  align-items: center;

  .logoName {
    font-size: 16px;
    margin-left: 20px;
    font-weight: 500;
    margin-bottom: 2px;
  }
`;

export const Menu = styled.div`
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

//Hamburger Menu
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
