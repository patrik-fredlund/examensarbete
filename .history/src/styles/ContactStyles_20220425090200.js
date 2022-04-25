import styled from 'styled-components';

export const ContactContainer = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  line-height: 2em;

  h3 {
    font-weight: 500;
    text-align: center;
  }

  a {
    //margin-top: 10px;
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: yellow;
    transition: 2.2.s ease-in-out;
  }
`;
