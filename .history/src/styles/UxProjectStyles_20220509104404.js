import styled from 'styled-components';

export const UxProject = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 100px;

  a {
    display: flex;
    margin-top: 50px;

    text-align: left;
  }

  h1 {
    margin-top: 20px;
    font-size: 40px;
    font-weight: 900;
    text-align: left;
  }

  .explainerText {
    border: 1px solid red;
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

  p {
    max-width: 900px;
    text-align: left;
    line-height: 30px;
  }

  .uxProjectWrapper {
    border: 1px solid red;
    margin: 10px;
  }

  .uxProjectContainer {
    border: 1px solid green;
    margin: 10px;
    margin-left: 6 0px;
  }
`;
