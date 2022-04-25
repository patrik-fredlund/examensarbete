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
  margin-top: 100px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 20em;
  font-weight: 700;
  letter-spacing: 0.05em;
  line-height: 1.5em;
  //margin: 20px 20px 0 20px;

  ul {
    //padding: 0;
    //margin: 20px 0 0 0;
    display: flex;
    justify-content: space-between;
    //position: relative;
    list-style-type: none;
    /* background-color: yellow; */
  }

  li {
    display: flex;
    justify-content: space-between;
    border: 1px solid red;
    padding: 0 15px;
  }

  a {
    text-decoration: none;
    color: black;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    transition: all 0.2s ease-in-out;
    background: #deff24;
  }

  .show-selected_link {
    /* background-color: red; */
    /* background: #deff24; */
    background-color: #bcfd4c;
  }

  .ToggleProjectContainer {
    width: 1000px;
    border: 1px solid blue;
    display: flex;
    flex-direction: row;
    //justify-content: center;
    justify-content: center;
    text-align: center;
    margin-top: 150px;
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

export const AboutContainer = styled.div`
  //border: 1px solid red;

  text-align: center;
  margin-top: 100px;

  h1 {
    font-size: 40px;
    font-weight: 900;
  }
`;
