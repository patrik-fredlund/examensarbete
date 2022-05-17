import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from '../styles/SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarMenu>
        <SidebarLink to='/' onClick={toggle}>
          Home
        </SidebarLink>
        <SidebarLink to='/Work' onClick={toggle}>
          Work
        </SidebarLink>
        <SidebarLink to='/About' onClick={toggle}>
          About
        </SidebarLink>
        <SidebarLink to='/CV' onClick={toggle}>
          Contact
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
