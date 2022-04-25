import React from 'react';
import Footer from '../components/Footer';
import { AboutContainer } from '../styles/GlobalStyles';
import { Wrapper, HeaderContainer } from '../styles/GlobalStyles';

export const About = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <h1>Patrik's Creative Outlet</h1>
      </HeaderContainer>
      <AboutContainer>
        <h3>Let's discuss an opportunity to work together or just say hi!</h3>
        <h3>You can reach me at:</h3>
        <a href='mailto:patrikfredlunds@gmail.com' className='email'>
          patrikfredlunds@gmail.com
        </a>
      </AboutContainer>
    </Wrapper>
  );
};
