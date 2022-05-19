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

    &:hover {
      /* transition: all 0.6s ease-in-out;
      background: #deff24; */
    }
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