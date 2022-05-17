import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';

export const NavContainer = styled.div`
  z-index: 9;
  background-color: #daedbd;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Nav = styled.nav`
  justify-content: space-between;
  display: flex;

  //-----P symbol in top left corner-------//
  .logo {
    margin-left: 25px;
    margin-top: 18px;
    margin-bottom: 15px;
    height: 35px;
  }

  //-----Work link-------//
  .navItem1 {
    font-weight: 600;
    font-size: 12px;
    text-decoration: none;

    &:hover {
      transition: all 0.6s ease-in-out;
      background: #ffe66d;
    }
  }
  //-----About link-------//
  .navItem2 {
    font-weight: 600;
    font-size: 12px;
    text-decoration: none;

    &:hover {
      transition: all 0.6s ease-in-out;
      background: #4ecdc4;
    }
  }
  //-----Contact link-------//
  .navItem3 {
    font-weight: 600;
    font-size: 12px;
    text-decoration: none;
    margin-right: 20px;
    &:hover {
      transition: all 0.6s ease-in-out;
      background: #f7fff7;
    }
  }
`;

export const Logo = styled.nav`
  display: flex;
  align-items: center;

  .logoName {
    font-size: 16px;
    margin-left: 20px;
    font-weight: 500;
    margin-bottom: 4px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  margin-right: 20px;
`;

export const NavLink = styled(Link)`
  color: black;
  display: flex;
  height: 100%;
  width: 150px;
  text-decoration: none;
  justify-content: space-around;
  align-items: center;
  transition: all 0.6s ease-out;

  cursor: pointer;

  &.active {
    background-color: #bcfd4c;
  }

  &:hover {
    transition: all 0.6s ease-in-out;
    background: #deff24;
  }
`;

//-----Hamburger Menu-------//
export const Bars = styled(GoThreeBars)`
  display: none;
  color: black;

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

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
