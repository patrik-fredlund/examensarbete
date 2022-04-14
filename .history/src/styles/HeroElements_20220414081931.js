import styled from 'styled-components';

export const HeroContainer = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  text-align: center;
  margin-top: 70px;

  h1 {
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 0.1rem;
  }

  .greeting {
    border: 1px solid red;
    /* position: absolute;
    vertical-align: baseline;
     text-align: left; */
    margin-left: 100px;
    text-align: end;
    font-size: 16px;
  }
`;

export const HeroStyle = styled.div`
  font-size: 12px;
  font-family: sans-serif;
  text-align: end;
`;
