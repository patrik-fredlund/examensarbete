import React from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { AboutContainer } from '../styles/ContentElements';
import { HeroContainer } from '../styles/HeroElements';

export const Home = () => {
  return (
    <div>
      <HeroContainer>
        <HeroSection />
      </HeroContainer>
      <div className='introText'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quas
          veniam quia maiores soluta perspiciatis explicabo. Voluptatem
          architecto amet quo quae quibusdam, quasi eius sequi, ratione rerum at
          tempora non?
        </p>
      </div>
    </div>
  );
};
