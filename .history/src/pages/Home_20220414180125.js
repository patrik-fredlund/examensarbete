import React from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { AboutContainer } from '../styles/ContentElements';
import { HeroContainer } from '../styles/HeroElements';

export const Home = () => {
  return (
    (
      <HeroContainer>
        <HeroSection />
      </HeroContainer>
    ),
    (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo
        sed laudantium adipisci vel corporis, deleniti voluptatibus iure dicta
        odit asperiores, repellat pariatur repellendus recusandae. Quis libero
        vel explicabo reprehenderit!
      </div>
    )
  );
};
