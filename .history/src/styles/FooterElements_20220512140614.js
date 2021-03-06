import styled from 'styled-components';

export const FooterStyles = styled.nav`
  .footerContainer {
    padding: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: 14px;
    z-index: 2;
    margin-top: 6em;
    font-weight: 200;
  }

  .footerLinks {
    padding: 20px;
    text-align: center;
  }
  .footerLinks a {
    padding: 20px;
    text-decoration: none;
    color: black;
  }
  .footerLinks a:hover {
    transition: all 0.2s ease-in-out;
    /*   background: #00141a;
 */
    color: darkgrey;
    //font-weight: 600;
    background: #deff24;
  }

  .visit {
    font-weight: 600;
  }
`;
