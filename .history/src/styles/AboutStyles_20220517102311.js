import styled from 'styled-components';

export const AboutContainer = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;

  .paragraphWrapper {
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin: 20px;
    width: 100%;
  }

  .paragraphContainer {
    //border: 1px solid pink;
    display: flex;
    flex-direction: row;
    margin: 20px;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1500px;
  }

  .aboutParagraph {
    //border: 1px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    padding: 20px;
    max-width: 500px;

    //height: 300px;
    background-color: #ff7eb9;
    margin: 35px;
  }

  h1 {
    font-size: 40px;
    font-weight: 900;
  }

  h2 {
    margin-bottom: 20px;
  }

  h4 {
    font-weight: 200;
  }

  p {
    max-width: 700px;
    line-height: 30px;
    text-align: left;
  }
`;
