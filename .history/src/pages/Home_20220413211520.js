import React from 'react';
import HeroSection from '../components/HeroSection';
import { AboutContainer } from '../styles/ContentElements';
import { HeroContainer } from '../styles/HeroElements';

export const Home = () => {
  return (
    (<HeroSection />),
    (
      <HeroContainer>
        <h1>Hi! I'm Patrik.</h1>
      </HeroContainer>
    )
  );
};
