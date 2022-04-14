import styled from 'styled-components';
import { Link as LinkS } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;

  background: white;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

//krysset som stänger sidebaren
export const CloseIcon = styled(FaTimes)`
  color: black;
`;

//Hamburger-symbolen
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
//Länkarna till sidorna.
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: black;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    margin-right: 30px;
  }

  &:hover {
    //background: #deff24;
    background: #00ffc6;

    transition: 0.2s ease-in-out;
  }
`;

// /*

//   &.active {
//     background-color: #bcfd4c;
//     //background-color: #00FFC6;
//     /*     color: #00ccff;
//  */
//   }

//   &:hover {
//     transition: all 0.6s ease-in-out;

//     //background: white;
//     background: #deff24;
//     /* color: #00ccff; */
//   }
// `;
