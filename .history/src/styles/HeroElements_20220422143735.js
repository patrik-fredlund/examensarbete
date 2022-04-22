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

  html body [data-ca3_iconfont='ETmodules']::before {
    font-family: 'ETmodules';
  }
  [data-ca3_icon]::before {
    font-weight: normal;
    content: attr(data-ca3_icon);
  }

  .ca3-scroll-down-link {
    cursor: pointer;
    height: 60px;
    width: 80px;
    margin: 0px 0 0 -40px;
    line-height: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    color: #fff;
    text-align: center;
    font-size: 70px;
    z-index: 100;
    text-decoration: none;
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);

    -webkit-animation: ca3_fade_move_down 2s ease-in-out infinite;
    -moz-animation: ca3_fade_move_down 2s ease-in-out infinite;
    animation: ca3_fade_move_down 2s ease-in-out infinite;
  }

  /*animated scroll arrow animation*/
  @-webkit-keyframes ca3_fade_move_down {
    0% {
      -webkit-transform: translate(0, -20px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: translate(0, 20px);
      opacity: 0;
    }
  }
  @-moz-keyframes ca3_fade_move_down {
    0% {
      -moz-transform: translate(0, -20px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -moz-transform: translate(0, 20px);
      opacity: 0;
    }
  }
  @keyframes ca3_fade_move_down {
    0% {
      transform: translate(0, -20px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(0, 20px);
      opacity: 0;
    }
  }
`;

export const HeroStyle = styled.div`
  font-size: 12px;
  font-family: sans-serif;
`;
