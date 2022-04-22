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
import '../styles/App.css';

export const Home = () => {
  return (
    <div>
      <Wrapper>
        <div className='gradientBackground'>
          <HeroContainer>
            <HeroSection />
            <img
              className='backgroundImg'
              src={require('../Images/putte2.jpg')}
              alt=''
            />
          </HeroContainer>
          ∑<ContentContainer></ContentContainer>
          <ToggleProject />
        </div>
        <Routes>
          <Route path='Work2' element={<Work2 />} />
          <Route path='Project1' element={<Project1 />} />
          <Route path='Project2' element={<Project2 />} />
        </Routes>
      </Wrapper>
    </div>
  );
};
