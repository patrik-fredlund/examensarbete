import styled from 'styled-components';

export const ContactContainer = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  line-height: 2em;
  //margin-right: 10px;

  /*   h3 {
    //font-size: 20px;
    line-height: 30px;
    font-weight: 300;
    text-align: center;
  } */
  h3 :nth-child(1) {
    //font-size: 20px;
    line-height: 30px;
    font-weight: 600;
    text-align: center;
  }

  a {
    //border: 1px solid red;
    //margin-top: 10px;
    text-decoration: none;
    color: black;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    color: #4ecdc4;
    transition: all 0.2s ease-in-out;

    //background: white;
    //background: #ffe66d;
  }
`;
