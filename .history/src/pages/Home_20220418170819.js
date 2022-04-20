import React from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { AboutContainer } from '../styles/ContentElements';
import { ContentContainer, Wrapper } from '../styles/GlobalStyles';
import { HeroContainer } from '../styles/HeroElements';
import { Work } from './Work';

export const Home = () => {
  return (
    <div>
      <Wrapper>
        <HeroContainer>
          <HeroSection />
        </HeroContainer>
        <ContentContainer>
          <p className='textBox'>
            My name is Patrik, but you can call me Putte. I am a songwriting
            graphic designer turned frontend developer. I love my wife, my
            guitar, typography, beautiful words and chicken tikka masala. In
            that exact order.
          </p>
        </ContentContainer>

        {/*  <Work /> */}
      </Wrapper>
    </div>
  );
};
