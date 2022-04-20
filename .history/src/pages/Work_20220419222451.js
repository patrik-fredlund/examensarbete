import React from 'react';
import Footer from '../components/Footer';
import { AboutContainer, Wrapper } from '../styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Project1 } from './Project1';
import { Project2 } from './Project2';
import {
  ContentContainer,
  ProjectsWrapper,
  HeaderContainer,
} from '../styles/GlobalStyles';
import { HeroContainer } from '../styles/HeroElements';

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
        <ProjectsWrapper>
          <div className='projectContainer'>
            <div className='card'>
              <h1>First Project</h1>
              <p>short description of the eproject</p>
              <img src='../Images/Freshkeeper_1.png' alt='' />
            </div>
          </div>

          <div className='projectContainer'>
            <div className='card'>
              <h1>Second name of project</h1>
              <p>short description of the eproject</p>
            </div>
          </div>

          <div className='projectContainer'>
            <div className='card'>
              <h1>Last name of project</h1>
              <p>short description of the eproject</p>
            </div>
          </div>
        </ProjectsWrapper>
      </Wrapper>
    </div>
  );
};
