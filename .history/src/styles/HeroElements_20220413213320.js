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
  }

  .greeting {
    color: red;
  }
`;

export const HeroStyle = styled.div`
  font-family: sans-serif;
  text-align: left;
`;
