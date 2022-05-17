import React from 'react';
import { ContactContainer } from '../styles/ContactStyles';
import { Wrapper, HeaderContainer } from '../styles/GlobalStyles';

export const Contact = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <h1 className='projectTitle'>Hit me up!</h1>
        <hr />
      </HeaderContainer>
      <ContactContainer>
        <h3>Let's discuss an opportunity to work together or just say hi!</h3>
        <h3>You can reach me at:</h3>
        <a href='mailto:patrikfredlunds@gmail.com' className='email'>
          patrikfredlunds@gmail.com
        </a>
      </ContactContainer>
    </Wrapper>
  );
};
