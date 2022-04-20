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
            I am a songwriting graphic designer with the hots for typoraphy and
            branding. I recently reskilled to a frontend developer and In that
            process I fell in love in UX design.
          </p>
        </ContentContainer>

        {/*  <Work /> */}
      </Wrapper>
    </div>
  );
};
