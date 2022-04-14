import styled from 'styled-components';

export const Logo = styled.nav`
  .footer {
    margin-top: 6rem;
    padding: 1rem;
    bottom: 0;
    left: 0;
    display: flex;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 480px) {
    .footer {
      margin-top: 0.1rem;
      margin-right: 10px;
    }
  }

  .footerContainer {
    position: absolute;
    margin-left: 80px;
    padding-bottom: 10px;
    min-width: none;
  }

  @media screen and (max-width: 480px) {
    .footerContainer {
      display: flex;
      flex-direction: column;
    }
  }

  .footerLink {
    display: inline;
    text-decoration: none;
    padding-top: 15px;
    padding: 0 10px 0 10px;
  }
  .footerLink:hover {
    transition: all 0.2s ease-in-out;
    background: #00141a;
    border-radius: 50px;
    color: white;
  }

  @media screen and (max-width: 480px) {
    .footerLink {
      display: flex;
      padding: 5px 0 0 0;
    }
  }

  .visit {
    font-weight: 100;
    font-size: 0.8rem;
    padding-right: 10px;
    color: white;
  }

  @media screen and (max-width: 480px) {
    .visit {
      padding-right: 0;
    }
  }
`;
