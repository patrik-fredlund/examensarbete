import React from 'react';
import Footer from '../components/Footer';
import { ContactContainer } from '../styles/ContactStyles';
import { AboutContainer } from '../styles/ContentElements';
import { Wrapper, HeaderContainer } from '../styles/GlobalStyles';

export const Contact = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <h1>Contact </h1>
      </HeaderContainer>
      <ContactContainer>
        <h1>For any inquires feel free to contact me at:</h1>
      </ContactContainer>
    </Wrapper>
  );
};
