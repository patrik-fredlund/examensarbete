/* --------------------------------------------------------- */
//NavbarElements - styling till samtliga element i navbaren.
/* --------------------------------------------------------- */

import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

//Hela Navbaren
export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding-right: 100px;
  
;
// Container med "logo" Patrik Fredlund och /Portfolio
  }
  & .logoContainer {
    margin-left: 70px;
    margin-top:35px
    


  }

  & .portfolio {
    display: flex;
    font-weight: 100;
    font-style: italic;
  
`;

//Navigeringsmenyn till höger
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
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
    border-radius: 50px;
    color: #00ccff;
  }
`;
