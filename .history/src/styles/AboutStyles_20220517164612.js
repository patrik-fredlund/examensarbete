import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;

  .aboutIngress {
    font-size: 16px;
    line-height: 40px;
    font-weight: 200;
    max-width: 900px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .paragraphWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px;
    width: 100%;
  }

  .paragraphContainer {
    display: flex;
    flex-direction: row;
    margin: 20px;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1500px;
  }

  .aboutParagraph {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 100px;
    padding: 20px;
    max-width: 500px;

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
