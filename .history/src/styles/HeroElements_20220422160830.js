import styled from 'styled-components';

export const HeroContainer = styled.div`
  //position: absolute;

  //border: 1px solid green;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  text-align: center;
  margin-top: 100px;
  z-index: 8;

  h1 {
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 0.1rem;
  }

  .name {
    font-size: 6em;
    font-weight: 200;
    margin-top: 10px;

    /* color: #16c1e3; */
  }

  .textBox {
    max-width: 900px;
    z-index: 1;
    flex-direction: column;
    align-items: center;
    font-weight: 200;
    font-size: 16px;
    line-height: 30px;
    margin-top: 10px;
  }

  .greeting {
    //border: 1px solid red;
    /* position: absolute;
    vertical-align: baseline;
     text-align: left; */
    /*     margin-right: 100px;
    text-align: end;
    font-size: 16px;
    width: 400px; */
  }

  .introText {
    text-align: center;
    width: 500px;
    color: red;
  }

  .wrapper {
    position: relative;
  }

  .backgroundImg {
    position: absolute;
  }
`;

export const HeroStyle = styled.div`
  font-size: 12px;
  font-family: sans-serif;
`;
