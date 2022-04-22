import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { ToggleProject } from '../components/ToggleProject';
import { AboutContainer } from '../styles/ContentElements';
import { ContentContainer, Wrapper } from '../styles/GlobalStyles';
import { HeroContainer } from '../styles/HeroElements';
import { Project1 } from './Project1';
import { Project2 } from './Project2';
import { Work2 } from './Work2';

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
        <ToggleProject />
        {/*    <nav>
          <Link to='/Work2'>UX Cases</Link>
          <Link to='/Project1'>Project1</Link>
          <Link to='/Project2'>Project2</Link>
        </nav> */}

        <Routes>
          <Route path='Home/Work2' element={<Work2 />} />
          <Route path='Project1' element={<Project1 />} />
          <Route path='Project2' element={<Project2 />} />
        </Routes>

        {/*  <Work /> */}
      </Wrapper>
    </div>
  );
};
