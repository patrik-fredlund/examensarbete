import React from 'react';
import Footer from '../components/Footer';
import { FiArrowRight } from 'react-icons/fi';
import { AboutContainer, Wrapper } from '../styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Project2 } from './Project2';
import { FreshkeeperProject } from './FreshkeeperProject.js';
import {
  ContentContainer,
  ProjectsWrapper,
  HeaderContainer,
} from '../styles/GlobalStyles';
import { HeroContainer } from '../styles/HeroElements';

import { useState, useEffect } from 'react';

export const FrontendProjects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/patrik-fredlund/repos')
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Wrapper>
        <h1>Projects</h1>
        <ProjectsWrapper>
          <div className='projectContainer'>
            <div className='projectInfo'>
              <div className='card'>
                <h1>Freshkeeper</h1>
                <p>The keep track on your food App </p>
                <a href='./FreshkeeperProject'>
                  Check it out!
                  <FiArrowRight />
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
