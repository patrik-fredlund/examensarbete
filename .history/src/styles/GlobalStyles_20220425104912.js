import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: calc(100vh - 170px);

  .gradientBackground {
    display: flex;
    flex-direction: row-reverse;
    //justify-content: center;
    //border: 1px solid red;
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
    //object-fit: contain;
    //position: absolute;

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

export const HeaderContainer = styled.div`
  //border: 1px solid green;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  text-align: center;
  margin-top: 150px;
  z-index: 8;

  h1 {
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 0.1rem;
  }
`;

export const ContentContainer = styled.div`
  border: 1px solid red;
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
    border: 1px solid green;
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
    border: 1px solid red;
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
    border: 1px solid red;
    //width: 100%;
    /* background-color: red; */
    /* background: #deff24; */
    background-color: #bcfd4c;
    /*   display: flex;
    flex: 1; */
    //justify-content: center;
  }
`;
