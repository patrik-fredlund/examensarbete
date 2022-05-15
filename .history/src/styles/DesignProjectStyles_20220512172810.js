import styled from 'styled-components';

/* Project cards */

export const DesignProjectsWrapper = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 1;
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: center;

  .icu {
    width: 200px;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    justify-content: space-around;
    flex-direction: column;
    color: green;
  }
`;
