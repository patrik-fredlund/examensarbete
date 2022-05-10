import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: calc(100vh - 170px);

  //parent container
  .outerWrapper {
    border: 5px solid grey;
    //margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    //justify-content: space-around;
    //flex-wrap: wrap;
    //width: 100vw;
  }

  @media screen and (max-width: 980px) {
    .outerWrapper {
      border: 5px solid pink;

      display: flex;
      //flex-wrap: wrap;
      flex-direction: column;
      width: 100vw;
    }
  }
  //1st child container
  .gradientWrapper {
    border: 10px solid red;
    //max-width: 500px;
    display: flex;
    //width: 100vw;
    margin: 20px;
  }
  //2nd child container
  .imgContainer {
    border: 10px solid green;
  }

  .heroWrapper {
    //border: 10px solid green;
    //flex-direction: row;
    //display: flex;
    //margin-left: 70px;
  }

  .heroContainer {
    //border: 10px solid magenta;
    display: flex;
    flex-direction: row-reverse;
    //flex-wrap: wrap;
  }

  .gradientBackgroundText {
    display: flex;
    //flex-direction: row-reverse;
    //flex-wrap: wrap;
    //justify-content: center;
    //border: 10px solid green;
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
  .gradientBackgroundImg {
    display: flex;
    //flex-direction: row-reverse;
    //flex-wrap: wrap;
    //justify-content: center;
    //border: 10px solid green;
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

  .backgroundImg {
    //border: 5px solid green;
    margin-right: 0;
    display: flex;
    //flex-direction: flex-start;
    //flex-wrap: wrap;
    //object-fit: contain;
    //position: absolute;
    //z-index: 99;
    height: 100%;
    opacity: 70%;

    -webkit-transform: scaleX(-1);
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  /*   @media screen and (max-width: 980px) {
    .backgroundImg {
      display:flex ;
     width: auto ;
     height: 100px ;
    } */

  /*   .heroWrap {
    //border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } */
`;

export const HeaderWrapper = styled.div`
  //border: 10px solid red;
  //max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const HeaderContainer = styled.div`
  //border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: center;
  margin-top: 200px;

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

  .headerWrapper {
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    //width: auto;
    align-items: center;
    margin: 10px;
    //margin-left: 15vw;
  }

  .headerProjectContainer {
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    align-items: left;
    //justify-content: space-between;
    //margin-right: 400px;
    width: 500px;

    //margin: 10px;
    //flex-wrap: wrap;
  }

  .innerContainer {
    border: 1px solid pink;
    max-width: 1200px;
    flex-wrap: wrap;
    display: flex;
    //justify-content: space-around;
    align-items: center;
    margin: 10px;
  }
`;

export const ContentContainer = styled.div`
  //border: 1px solid red;
  //background-color: lightpink;
  //background-color: #f7b1ab;
  background-color: #eebfbb;
  //display: flex;
  //flex-direction: row;

  height: 20em;
  font-weight: 700;
  letter-spacing: 0.05em;
  line-height: 1.5em;

  //margin: 20px 20px 0 20px;

  .toggleWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    //border: 1px solid red;
    padding: 10px;
  }

  .toggleContainer {
    /*     display: flex;
    justify-content: space-between;
    flex-direction: row;
    //flex-direction: row;
    border: 1px solid blue;
    margin-top: 20px;
    flex: 1; */
  }

  .projectButton {
    //border: 1px solid green;
    display: flex;
    justify-content: center;
    flex: 1;

    flex-shrink: 2;
    //padding: 40px;
    //height: 40px;
    //margin-top: 20px;
  }

  /*   .ToggleProjectContainer {
    border: 1px solid blue;
    //width: 100px;
    padding: 2em;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    flex-wrap: wrap;
    //justify-content: center;
    justify-content: center;
    text-align: center;
    //margin-top: 50px;
  } */

  ul {
    margin-top: 100px;
    //border: 1px solid red;
    //padding: 50px;
    //padding: 0;
    //margin: 20px 0 0 0;
    //flex-shrink: 2;
    display: flex;
    flex-wrap: wrap;
    //flex-shrink: 2;

    //flex-wrap: wrap;

    //flex-wrap: wrap;
    //position: relative;
    list-style-type: none;
    //background-color: #7dbbc3;
  }

  li {
    //border: 1px solid red;
    font-weight: 600;
    flex-shrink: 2;
    display: flex;
    justify-content: center;
    padding: 20px;
  }

  a {
    //border: 1px solid red;
    flex-wrap: wrap;
    width: 400px;
    text-decoration: none;
    color: black;
    transition: all 0.2s ease-in-out;
    /*  display: flex;
    flex-shrink: 2;
    flex-wrap: wrap;
    justify-content: center; */
    //background: #ffe66d;
    background: white;
  }

  a:hover {
    transition: all 0.2s ease-in-out;
    background: #deff24;
  }

  .show-selected_link {
    //border: 1px solid red;
    //width: 100%;
    /* background-color: red; */
    /* background: #deff24; */
    background-color: #bcfd4c;
    /*   display: flex;
    flex: 1; */
    //justify-content: center;
  }
`;

/* Project cards */

export const ProjectsWrapper = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: row;
  width: 100%;
  z-index: 1;
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: center;

  .projectContainer {
    //border: 1px solid grey;
    display: flex;
    //max-width: 600px;
    //max-width: 900px;
    width: 800px;
    height: 500px;
    //width: 100%;
    //width: 600px;
    //background-color: whitesmoke;
    padding: 20px;
    margin: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: all 0.6s ease-in-out;

    &:hover {
      transition: all 0.6s ease-in-out;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      //background: white;
      //background: #e3fae4;
      background: #e3fae4;
      padding: 15px;
      //margin-top: 10px;
      width: 810px;
      height: 500px;

      /* color: #00ccff; */
    }
  }

  .card {
    //border: 1px solid green;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    //background-color: green;
    margin: 20px;
    width: 100%;
  }

  .projectInfo {
    //border: 1px solid pink;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #e4f1eb;
    //transition: all 0.4s ease-in-out;
    position: relative;
    min-height: 200px;
    background-image: linear-gradient(
      to right,
      hsl(111, 100%, 90%),
      hsl(179, 100%, 30%)
    );
    z-index: 1;

    &:hover {
      //transition: all 0.4s ease-in-out;

      //background: white;
      //background: #4c4c4c;
      //background: #ecfff7;

      //background: #cbf2cd;
      //background: #cce1cd;
      /* color: #00ccff; */
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

  .freshkeeper {
    //border: 1px solid red;
    width: auto;
    height: 450px;
    //box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  }

  &:hover {
  }
`;
