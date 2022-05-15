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
    margin: 20px;
  }

  .aboutParagraph {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
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
