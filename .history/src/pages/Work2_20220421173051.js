import React from 'react';
import Footer from '../components/Footer';
import { FaBeer } from 'react-icons/fa';
import { AboutContainer, Wrapper } from '../styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Project1 } from './Project1';
import { Project2 } from './Project2';
import { FreshkeeperProject } from './FreshkeeperProject.js';
import {
  ContentContainer,
  ProjectsWrapper,
  HeaderContainer,
} from '../styles/GlobalStyles';
import { HeroContainer } from '../styles/HeroElements';

export const Work2 = () => {
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
            <div className='projectInfo'>
              <div className='card'>
                <h1>Freshkeeper</h1>
                <p>The keep track on your food App </p>
                <a href='./FreshkeeperProject'>
                  Check it out!
                  <AiOutlineArrowRight />
                </a>
              </div>
              <img
                className='freshkeeper'
                src={require('../Images/Freshkeeper_1.png')}
                alt=''
              />
            </div>
          </div>

          <div className='projectContainer'>
            <div className='card'>
              <h1>Aline Website</h1>
              <p>Coming soon</p>
            </div>
          </div>

          <div className='projectContainer'>
            <div className='card'>
              <h1>LexPress Website</h1>
              <p>Coming soon</p>
            </div>
          </div>
        </ProjectsWrapper>
      </Wrapper>
    </div>
  );
};
