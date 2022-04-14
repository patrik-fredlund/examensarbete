import React from 'react';
import { AboutContainer } from '../styles/ContentElements';
import { HeroContainer } from '../styles/HeroElements';

export const Home = () => {
  return (
    (
      <AboutContainer>
        <h1>Hi! I'm Patrik.</h1>
      </AboutContainer>
    ),
    (
      <HeroContainer>
        <h1>Work</h1>
      </HeroContainer>
    )
  );
};
