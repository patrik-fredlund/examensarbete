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

  .projectTitle {
    text-align: center;
    font-size: 80px;
    font-weight: 200;
    margin-top: 40px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 480px) {
    .projectTitle {
      font-size: 40px;
    }
  }

  .projectSubTitle {
    text-align: center;
    font-size: 40px;
    font-weight: 200;
    margin-top: 20px;
    margin-bottom: 30px;
    line-height: 50px;
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

  @media screen and (max-width: 480px) {
    .explainerText {
      margin-left: 10px;
    }
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

  @media screen and (max-width: 480px) {
    .ingressParagraph {
      margin-left: 10px;
      margin-right: 10px;
    }
  }

  .MiddleIngressParagraph {
    font-size: 20px;
    font-weight: 300;
    line-height: 40px;
    margin-bottom: 40px;

    //margin-top: 20px;
  }

  @media screen and (max-width: 480px) {
    .MiddleIngressParagraph {
      padding: 0 15px 0 15px;
    }
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
    font-weight: 600;
    text-align: center;
  }

  //-------post it notes--------//

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
    margin-top: 10px;
    padding: 30px;
    max-width: 400px;
    height: 300px;
    background-color: #ff7eb9;
    margin: 35px;
  }

  /* h1 {
    font-size: 40px;
    font-weight: 900;
  } */

  .postItTitle {
    margin-bottom: 20px;
  }

  h4 {
    font-weight: 200;
  }

  .postItText {
    max-width: 400px;
    line-height: 30px;
    text-align: left;
    text-align: center;
  }

  .reviews {
    border: 1px solid red;
    //background-color: #ff65a3;
    margin-top: 20px;
    width: 100%;
    padding: 20px;
    text-align: center;
  }

  .canvas {
    border: 1px solid red;
    //background-color: #ff65a3;
    margin-top: 20px;
    width: 70%;
    padding: 20px;
    text-align: center;
  }

  .userflowImg {
    border: 1px solid red;
    //background-color: #ff65a3;
    margin-top: 20px;
    width: 100%;
    padding: 20px;
    text-align: center;
  }

  .functionsImg {
    border: 1px solid red;
    //background-color: #ff65a3;
    margin-top: 20px;
    width: 90%;
    padding: 20px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    .functionsImg {
      width: 100%;
      padding: 0;
    }
  }

  .imgText {
    font-size: 16px;
    text-align: center;
    margin-bottom: 30px;
  }

  .painsList {
    padding: 20px;
    text-align: left;
    //margin-top: 20px;
  }
  .painsList li {
    margin-top: 10px;
  }

  .painGainWrapper {
    //border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }

  @media screen and (max-width: 480px) {
    .painGainWrapper {
      padding: 0 15px 0 15px;
    }
  }

  .painGainContainer {
    //border: 1px solid red;
    background-color: #ff7eb9;
    padding: 40px;
    padding-bottom: 40px;
    margin: 10px;
    margin-top: -30px;
    margin-bottom: 50px;
    min-width: 500px;
  }

  .insightsWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }
  .insightsContainer {
    //border: 10px solid red;
    background-color: #ff7eb9;
    padding: 40px;
    padding-bottom: 40px;
    margin: 10px;
    margin-top: -30px;
    margin-bottom: 50px;
    max-width: 400px;

    & h1 {
      /* font-weight: 600; */
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 480px) {
    .insightsContainer {
      width: 100%;
    }
  }

  .competitorsContainer {
    //border: 1px solid red;
    display: flex;
    //flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    margin-top: 40px;
    align-items: center;
  }

  .screeenShotsWrapper {
    //border: 1px solid red;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1600px;
    justify-content: center;
  }
  .iphone {
    //border: 1px solid red;
    display: flex;
    max-width: 300px;
    //::cue-regionmin-width: 300px;
    padding: 30px;
  }
`;
