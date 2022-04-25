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
    transition: all 0.6s ease-in-out;
  }

  a:hover {
    color: yellow;
    transition: all 0.6s ease-in-out;

    //background: white;
    background: #ffe66d;
  }
`;
