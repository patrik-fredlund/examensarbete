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

  .ca3-scroll-down-arrow {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2hldnJvbl90aGluX2Rvd24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiBmaWxsPSJ3aGl0ZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTE3LjQxOCw2LjEwOWMwLjI3Mi0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwYzAuMjcsMC4yNjgsMC4yNzEsMC43MDEsMCwwLjk2OWwtNy45MDgsNy44M2MtMC4yNywwLjI2OC0wLjcwNywwLjI2OC0wLjk3OSwwbC03LjkwOC03LjgzYy0wLjI3LTAuMjY4LTAuMjctMC43MDEsMC0wLjk2OWMwLjI3MS0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwTDEwLDEzLjI1TDE3LjQxOCw2LjEwOXoiLz48L3N2Zz4=);
    background-size: contain;
    background-repeat: no-repeat;
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

  .arrowContainer {
    margin-top: 200px;
  }
`;

export const HeroStyle = styled.div`
  font-size: 12px;
  font-family: sans-serif;
`;
