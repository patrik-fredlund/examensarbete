import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { ToggleProject } from '../components/ToggleProject';
import { AboutContainer } from '../styles/ContentElements';
import { ContentContainer, Wrapper } from '../styles/GlobalStyles';
import { HeroContainer, HeroWrapper } from '../styles/HeroStyles';

import { FrontendProjects, Project1 } from './FrontendProjects';
import { Design } from './Design';
import { Work2 } from './Work2';
import '../styles/App.css';

export const Home = () => {
  return (
    <div>
      <Wrapper>
        <div className='outerWrapper'>
          <div className='gradientWrapper'>
            <div className='gradientBackgroundText'>
              <HeroSection />
            </div>
          </div>

          <div className='imgContainer'>
            <div className='gradientBackgroundImg'>
              <img
                className='backgroundImg'
                src={require('../Images/putte2.jpg')}
                alt=''
              />
            </div>
          </div>
        </div>
        <ToggleProject />
        <Routes>
          <Route path='/' element={<Work2 />} />
          <Route path='Work2' element={<Work2 />} />
          <Route path='FrontendProjects' element={<FrontendProjects />} />
          <Route path='Design' element={<Design />} />
        </Routes>
      </Wrapper>
    </div>
  );
};
