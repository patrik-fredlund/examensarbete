import React from 'react';
import Footer from '../components/Footer';
import { ContactContainer } from '../styles/ContactStyles';
import { AboutContainer } from '../styles/ContentElements';
import { Wrapper, HeaderContainer } from '../styles/GlobalStyles';

export const Contact = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <h1>Hit me up! </h1>
      </HeaderContainer>
      <ContactContainer>
        <h3>Let's discuss an opportunity to work together or just say hi!</h3>
      </ContactContainer>
    </Wrapper>
  );
};
