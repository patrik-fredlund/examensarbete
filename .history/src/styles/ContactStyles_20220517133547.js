import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  line-height: 2em;
  margin-right: 10px;
  margin-left: 10px;

  h3:nth-child(1) {
    font-size: 30px;
    line-height: 40px;
    font-weight: 200;
    text-align: center;
    margin-bottom: 20px;
    margin-top: -20px;
  }

  h3 {
    //font-size: 20px;
    line-height: 30px;
    font-weight: 300;
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
