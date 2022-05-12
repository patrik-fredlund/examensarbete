import styled from 'styled-components';

/* Project cards */

export const FrontensProjectsWrapper = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 1;
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: center;

  .projectImg {
    width: auto;
    height: 200px;
    //border: 10px solid red;
  }

  .diabloImg {
    //margin-top: 60px;
    height: 200px;
    width: auto;
  }

  .frontendProjectsContainer {
    border: 1px solid grey;
    display: flex;

    width: 900px;
    height: 500px;

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
      width: 910px;
      height: 500px;

      /* color: #00ccff; */
    }
  }

  .frontendCard {
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    //align-items: center;
    text-align: left;
    //background-color: green;
    margin: 20px;
    width: 100%;

    p {
      //color: red;
      text-align: left;
    }
  }

  .frontendProjectInfo {
    border: 1px solid pink;
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
