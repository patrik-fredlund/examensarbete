import styled from 'styled-components';

export const Wrapper = styled.div`
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

  .projectContainer {
    display: flex;
    //max-width: 600px;
    //max-width: 900px;
    width: 800px;
    height: 500px;
    //width: 100%;
    //width: 600px;
    //background-color: whitesmoke;
    border: 1px solid black;
    padding: 20px;
    margin: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .card {
    //background-color: green;
    border: 1px solid red;
    margin: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const AboutContainer = styled.div`
  //border: 1px solid red;
  margin-top: 70px;
  text-align: center;
  margin-top: 70px;

  h1 {
    font-size: 40px;
    font-weight: 900;
  }
`;
