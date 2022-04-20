import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: calc(100vh - 170px);
`;

export const HeaderContainer = styled.div`
  //border: 1px solid green;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  text-align: center;
  margin-top: 200px;
  z-index: 8;

  h1 {
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 0.1rem;
  }
`;

export const ContentContainer = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.05em;
  line-height: 1.5em;
  margin: 20px 20px 0 20px;

  .textBox {
    max-width: 900px;
    z-index: 9;
    flex-direction: column;
    align-items: center;
  }
`;

/* Project cards */

export const ProjectsWrapper = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: row;
  width: 100%;

  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: center;

  .projectContainer {
    //border: 1px solid black;
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

      //background: white;
      background: #e3fae4;

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
    border: 1px solid pink;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #e4f1eb;
    transition: all 0.4s ease-in-out;

    &:hover {
      transition: all 0.4s ease-in-out;

      //background: white;
      background: #4c4c4c;

      //background: #cbf2cd;
      //background: #cce1cd;
      /* color: #00ccff; */
    }
  }

  .freshkeeper {
    //border: 1px solid red;
    width: auto;
    height: 450px;
    //box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
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
