import styled from 'styled-components';

//--------Här är css:en för hero section på landing page--------//
export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
    font-weight: 300;
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
  @media screen and (max-width: 500px) {
    .greeting {
      font-size: 30px;
      margin-top: 100px;
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
