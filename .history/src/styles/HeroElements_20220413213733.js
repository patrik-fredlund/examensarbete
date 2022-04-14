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
    border: 1px solid red;
    position: absolute;
    grid-area: 1/1/1/1;
    grid-row-start: 1;
    grid-column-start: 1;
    grid-row-end: 1;
    grid-column-end: 1;

    /*  text-align: left; */
    overflow: var(--slides-overflow);
    overflow-x: ;
    overflow-y: ;
  }
`;

export const HeroStyle = styled.div`
  font-family: sans-serif;
  text-align: left;
`;
