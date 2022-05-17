import React from 'react';

//styles
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from '../styles/SidebarStyles';

//This is the sidebar component that appears in mobileview.
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
        <SidebarLink to='/Contact' onClick={toggle}>
          Contact
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
