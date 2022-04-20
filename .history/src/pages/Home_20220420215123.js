import React from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { ToggleProject } from '../components/ToggleProject';
import { AboutContainer } from '../styles/ContentElements';
import { ContentContainer, Wrapper } from '../styles/GlobalStyles';
import { HeroContainer } from '../styles/HeroElements';
import { Project1 } from './Project1';
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
            branding. I recently reskilled to a frontend developer to learn to
            also design on the web, and In that process I fell in love in UX
            design. Reseach is the fun part.
          </p>
        </ContentContainer>
        <nav>
          <Link to='/Project1'>Project1</Link>
        </nav>
        <Routes>
          <Route path='Project1' element={<Project1 />} />
        </Routes>

        {/*  <ToggleProject /> */}
        {/*  <Work /> */}
      </Wrapper>
    </div>
  );
};
