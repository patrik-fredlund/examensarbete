import React from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { AboutContainer } from '../styles/ContentElements';
import { HeroContainer } from '../styles/HeroElements';

export const Home = () => {
  return (
    <HeroContainer>
      <HeroSection />
    </HeroContainer>
  );
};
