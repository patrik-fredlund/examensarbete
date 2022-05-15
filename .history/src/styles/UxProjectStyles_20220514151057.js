import styled from 'styled-components';

export const UxProject = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 100px;

  .uxProjectWrapper {
    //border: 1px solid red;
    background-color: #ff7eb9;
    padding: 20px;
    padding-bottom: 40px;
    margin: 10px;
    margin-top: -30px;
    margin-bottom: 50px;
  }
  .uxProjectWrapperYellow {
    //border: 1px solid red;
    background-color: #feff9c;
    padding: 20px;
    padding-bottom: 20px;
    padding-top: 20px;
    margin: 20px;
    margin-top: 10px;
    margin-bottom: 50px;
    //font-weight: 500;
    line-height: 35px;
  }
  .uxProjectWrapperBlue {
    //border: 1px solid red;
    background-color: #7afcff;
    padding: 20px;
    padding-bottom: 20px;
    padding-top: 20px;
    margin: 20px;
    margin-top: 10px;
    margin-bottom: 50px;
    //font-weight: 500;
    line-height: 35px;
  }

  .uxProjectContainer {
    //border: 1px solid green;
    margin: 10px;
    margin-left: 6 0px;
  }

  a {
    display: flex;
    margin-top: 50px;

    text-align: left;
  }

  .headerTitle {
    margin-top: 20px;
    font-size: 40px;
    font-weight: 900;
    text-align: left;
  }

  h1 {
    margin-top: 20px;
    font-size: 40px;
    font-weight: 900;
    text-align: left;
  }

  .textBox {
    //border: 1px solid green;
  }

  .explainerText {
    //border: 1px solid red;
    font-size: 20px;
    line-height: 40px;
    font-weight: 300;
    margin-top: 50px;
  }

  h3 {
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 15px;
    text-align: left;
  }

  .ingressParagraph {
    font-size: 20px;
    font-weight: 300;
    line-height: 40px;
    margin-bottom: 40px;
    margin-top: 20px;
  }

  .MiddleIngressParagraph {
    font-size: 20px;
    font-weight: 300;
    line-height: 40px;
    margin-bottom: 40px;
    //margin-top: 20px;
  }

  .posItText {
    //::markerfont-size: 24px;
    font-size: 20px;
    line-height: 40px;
    font-weight: 300;
  }

  .bold {
    font-weight: 500;
  }

  p {
    max-width: 900px;
    text-align: left;
    line-height: 30px;
  }

  .discoverySection {
    //border: 1px solid red;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /*  & h1 {
    font-size: 100px;
  } */

  .subHeader {
    font-size: 20px;
    font-weight: 300;
    margin-top: 30px;
  }

  .postItContainer {
    //border: 1px solid pink;
    display: flex;
    flex-direction: row;
    margin: 20px;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1500px;
  }

  .postItNotes {
    //border: 1px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    padding: 20px;
    max-width: 500px;
    height: 300px;
    background-color: #ff7eb9;
    margin: 35px;
  }
`;
