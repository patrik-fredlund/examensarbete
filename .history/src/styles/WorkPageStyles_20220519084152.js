import styled from 'styled-components';

export const WorkContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;

  padding-top: 100px;
  //background-color: #eebfbb;

  //background-color: #eebfbb;
  //background-color: white;
  background-color: #eebfbb;

  //height: 23em;
  font-weight: 700;
  letter-spacing: 0.05em;
  line-height: 1.5em;

  .workTitle {
    text-align: center;
    font-size: 79px;
    font-weight: 200;
    margin-top: 100px;
    //margin-bottom: 30px;
  }

  /*   hr {
    border: 1px solid lightgray;
  } */

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
