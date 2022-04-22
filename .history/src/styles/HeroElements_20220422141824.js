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

  .arrow-container {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    position: absolute;
    bottom: 25px;
    left: 0;
    right: 0;
  }

  .arrow-1 {
    width: 100px;
    height: 100px;
    background: #00bcd4;
    opacity: 0.5;
    border-radius: 50%;
    position: absolute;
  }

  .arrow-2 {
    width: 60px;
    height: 60px;
    background: #00bcd4;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1;
    display: table;
  }

  .arrow-2:before {
    width: 52px;
    height: 52px;
    content: '';
    border: 2px solid #006064;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
  }

  .arrow-2 i.fa {
    font-size: 30px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    color: #006064;
  }

  /* Custom Animate.css */

  .animated.hinge {
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
  }

  @-webkit-keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.4, 0.4, 0.4);
      transform: scale3d(0.4, 0.4, 0.4);
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.4, 0.4, 0.4);
      transform: scale3d(0.4, 0.4, 0.4);
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 0;
    }
  }

  .zoomIn {
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn;
  }
`;

export const HeroStyle = styled.div`
  font-size: 12px;
  font-family: sans-serif;
`;
