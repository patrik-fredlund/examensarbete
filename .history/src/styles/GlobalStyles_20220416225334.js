import styled from 'styled-components';

export const Wrapper = styled.div`
  //border: 1px solid green;

  min-height: calc(100vh - 170px);
`;

export const ContentContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.05em;
  line-height: 1.5em;
  margin: 20px 20px 0 20px;
  flex-grow: 1;

  .textBox {
    max-width: 900px;
    z-index: 9;
    flex-direction: column;
    align-items: center;
  }
`;

/* Project cards */

export const ProjectsWrapper = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: row;
  width: 100%;

  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: center;

  .ProjectContainer {
    display: flex;
    //max-width: 600px;
    width: 500px;
    height: 300px;
    //width: 100%;
    //width: 600px;
    background-color: pink;
    border: 1px solid green;
    padding: 20px;
    margin: 20px;
  }

  .card {
    border: 1px solid green;
    margin: 20px;
  }
`;
