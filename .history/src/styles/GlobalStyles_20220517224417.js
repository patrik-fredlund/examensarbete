import styled from 'styled-components';

//This is the global styles stylesheet, with styles that appear on more than one page.

export const Wrapper = styled.div`
  min-height: calc(100vh - 97px);
  background-color: #fef0eb;
  display: flex;
  flex-direction: column;
  position: relative;

  .projectTitle {
    text-align: center;
    font-size: 80px;
    font-weight: 200;
    margin-top: 40px;
    margin-bottom: 30px;
  }

  .ingressContainer {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ingressText {
    max-width: 900px;
    text-align: center;
    line-height: 30px;
  }

  hr {
    width: 900px;
    margin: auto;
  }

  //---------Hero Section styles for landing page + Work page--------//

  //parent container of hero section + img
  .outerWrapper {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    .outerWrapper {
      display: flex;
      flex-direction: column;
      width: 100vw;
    }
  }

  //1st child container of hero section
  .gradientWrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  //2nd child container of hero section
  .backgroundImg {
    margin-right: 0;
    display: flex;
    width: auto;
    height: 100%;
    object-fit: cover;
    opacity: 50%;

    -webkit-transform: scaleX(-1);
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  .heroContainer {
    border: 10px solid magenta;
    display: flex;
    flex-direction: row-reverse;
  }

  // gradient background effect on hero section text
  .gradientBackgroundText {
    display: flex;
    justify-content: center;
    background: linear-gradient(-45deg, #e8fdf6, #b5f8df, #ced3df, #16c1e3);
    background-size: 400% 400%;
    animation: gradient 7s ease infinite;
    height: 50vh;
    width: 100%;
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
  }

  //gradient background effect on hero section image
  .gradientBackgroundImg {
    display: flex;
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
  }
`;
//-----container for header on About and Contact page----//
export const HeaderContainer = styled.div`
  //border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
  background-color: #eebfbb;

  h1 {
    font-size: 40px;
    font-weight: 900;
    text-align: left;
    //margin-right: 120px;
  }

  h3 {
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 15px;
    text-align: left;
  }

  p {
    max-width: 500px;
    text-align: left;
    line-height: 30px;
  }

  a {
    text-align: left;
  }

  .explainerText {
    font-size: 20px;
    line-height: 40px;
    font-weight: 300;
    margin-top: 50px;
  }
`;

//------------Landing page Toggle section----------//

export const ContentContainer = styled.div`
  background-color: #eebfbb;
  //background-color: white;

  //height: 23em;
  font-weight: 700;
  letter-spacing: 0.05em;
  line-height: 1.5em;

  .toggleWrapper {
    //border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 19em;
    padding: 10px;
  }

  @media screen and (max-width: 1150px) {
    .toggleWrapper {
      height: 23em;
    }
  }

  @media screen and (max-width: 480px) {
    .toggleWrapper {
      height: 25em;
    }
  }

  .toggleTitle {
    text-align: center;
    margin-top: 40px;
  }

  .toogleExplainer {
    text-align: center;
    font-weight: 300;
    margin-top: 20px;
  }

  //-----Toggle Buttons------//
  .projectButton {
    //border: 1px solid green;
    display: flex;
    justify-content: center;
    flex: 1;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    .projectButton {
      width: 300px;
      margin-bottom: 10px;
    }
  }

  ul {
    margin-top: 20px;
    margin-left: 200px;
    margin-right: 200px;

    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
  }

  @media screen and (max-width: 768px) {
    ul {
      display: flex;
      flex-direction: column;
      align-content: center;
    }
  }

  li {
    font-weight: 600;
    flex-shrink: 2;
    display: flex;
    justify-content: center;
    padding: 15px;
  }

  a {
    flex-wrap: wrap;
    width: 350px;
    text-decoration: none;
    color: black;
    transition: all 0.2s ease-in-out;
    background: #ffe66d;
  }

  a:hover {
    transition: all 0.2s ease-in-out;
    background: white;
  }

  .show-selected_link {
    background: #4ecdc4;
  }
`;

//-----Project cards--------//

export const ProjectsWrapper = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  margin-top: 50px;

  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  .projectContainer {
    border: 1px solid lightgrey;
    display: flex;
    width: 900px;
    height: 500px;
    padding: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: all 0.6s ease-in-out;
    margin-bottom: 50px;

    &:hover {
      transition: all 0.6s ease-in-out;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

      background: #e3fae4;
      padding: 15px;
      width: 910px;
      height: 500px;
    }
  }

  @media screen and (max-width: 900px) {
    .projectContainer {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      min-height: 500px;
      align-items: center;

      &:hover {
        transition: all 0.6s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        background: #e3fae4;
        padding: 15px;
        height: 100%;
        width: 100%;
      }
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px;
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    .card {
      display: flex;
      flex-direction: column;
      height: 100%;
      align-items: center;
    }
  }

  .projectInfo {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    min-height: 200px;
    background-image: linear-gradient(
      to right,
      hsl(111, 100%, 90%),
      hsl(179, 100%, 30%)
    );
    z-index: 1;

    &:hover {
    }
  }

  .projectInfo::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      hsl(111, 100%, 90%),
      hsl(179, 100%, 30%)
    );
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
  }

  .projectInfo:hover::before {
    opacity: 1;
  }

  @media screen and (max-width: 900px) {
    .projectInfo {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .freshkeeper {
    width: auto;
    height: 450px;
  }

  &:hover {
  }

  @media screen and (max-width: 900px) {
    .freshkeeper {
      width: 300px;
      height: 100%;
    }
  }
`;
