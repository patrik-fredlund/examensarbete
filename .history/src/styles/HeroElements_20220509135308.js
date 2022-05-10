import styled from 'styled-components';

export const HeroWrapper = styled.div`
  border: 10px solid red;
  display: flex;
  //flex-direction: row;
  //flex-direction: flex-start;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 20px;

  /*   .gradientBackground {
    //flex-shrink: 1;
    display: flex;
    flex-direction: row-reverse;

    //justify-content: center;
    border: 10px solid green;
    background: linear-gradient(-45deg, #e8fdf6, #b5f8df, #ced3df, #16c1e3);
    background-size: 400% 400%;
    animation: gradient 7s ease infinite;
    height: 50vh;
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  } */

  .backgroundImg {
    border: 10px solid green;
    //object-fit: contain;
    //position: absolute;
    display: flex;

    height: 100%;
    opacity: 70%;

    -webkit-transform: scaleX(-1);
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  /*   .heroWrap {
    //border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } */
`;

export const HeroContainer = styled.div`
  //position: absolute;

  //border: 10px solid green;
  display: flex;
  flex-shrink: 2;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  text-align: center;
  margin-top: 50px;
  z-index: 8;
  margin-left: 25%;
  //margin-right: 10%;
  margin-right: -5vw;
  /* min-width: 700px; */
  flex-shrink: 2;

  .heroStyle {
    //border: 1px solid yellow;
    padding: 10px;
    font-size: 12px;
    font-family: sans-serif;
    max-width: 700px;
    min-width: 300px;
    flex-shrink: 2;
    display: flex;

    //margin-left: 20%;

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
