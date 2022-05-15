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
    padding-bottom: 40px;
    padding-top: 40px;
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
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 20px;
    margin-top: 20px;
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
`;
