import React from 'react';
import Footer from '../components/Footer';
import { AboutContainer, Wrapper } from '../styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FrontendProjects } from './FrontendProjects';
import { Project2 } from './Project2';
import {
  ContentContainer,
  ProjectsWrapper,
  HeaderContainer,
} from '../styles/GlobalStyles';
import { HeroContainer } from '../styles/HeroElements';
import { ToggleProject } from '../components/ToggleProject';

export const Work = () => {
  return (
    <div>
      <Wrapper>
        <HeaderContainer>
          <h1>Work</h1>
        </HeaderContainer>
        <ContentContainer>
          <p className='textBox'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quas
            veniam quia maiores soluta perspiciatis explicabo. Voluptatem
            architecto amet quo quae quibusdam, quasi eius sequi, ratione rerum
            at tempora non?
          </p>
        </ContentContainer>
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
