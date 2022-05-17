import styled from 'styled-components';

//--------Här är css:en för hero section på landing page och work page--------//
export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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
    opacity: 70%;

    -webkit-transform: scaleX(-1);
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  .heroContainer {
    border: 10px solid magenta;
    display: flex;
    flex-direction: row-reverse;
    //flex-wrap: wrap;
  }

  .gradientBackgroundText {
    display: flex;
    //flex-direction: row-reverse;
    //flex-wrap: wrap;
    justify-content: center;
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
`;

export const HeroContainer = styled.div`
  .heroStyle {
    padding: 10px;
    font-size: 12px;
    font-family: sans-serif;
    flex-shrink: 2;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 0.1rem;
    text-align: center;
  }

  .name {
    font-size: 6em;
    font-weight: 200;
  }

  @media screen and (max-width: 1100px) {
    .name {
      font-size: 3em;
    }
  }

  .textBox {
    max-width: 700px;
    z-index: 1;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-weight: 200;
    font-size: 16px;
    line-height: 30px;
    margin-top: 10px;
    margin: 0 10px 0 10px;
  }

  .greeting {
    height: 50px;
  }
  @media screen and (max-width: 1100px) {
    .greeting {
      font-size: 30px;
    }
  }

  .introText {
    text-align: center;
    width: 500px;
    color: red;
  }

  @media screen and (max-width: 768px) {
    .textBox {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
`;
