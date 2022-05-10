import styled from 'styled-components';

export const HeroWrapper = styled.div`
  //border: 1px solid pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroContainer = styled.div`
  //position: absolute;

  .heroStyle {
    border: 1px solid red;
    padding: 10px;
    font-size: 12px;
    font-family: sans-serif;
    max-width: 700px;
    min-width: 300px;
    flex-shrink: 2;

    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    //margin-left: 50%;

    //justify-content: flex-end;
  }

  h1 {
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 0.1rem;
  }

  .name {
    font-size: 6em;
    font-weight: 200;
    //margin-top: 10px;

    /* color: #16c1e3; */
  }

  .textBox {
    max-width: 700px;
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
    height: 50px;
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
`;
