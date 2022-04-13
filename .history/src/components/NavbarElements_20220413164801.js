import styled from 'styled-components';

export const Nav = styled.nav`
  justify-content: space-between;

  /* padding-right: 100px; */
  display: flex;

  .logo {
    margin-left: 10px;
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
`;
