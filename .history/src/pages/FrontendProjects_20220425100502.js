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
import {
  ProjectContainer,
  ProjectsStyle,
  ProjectWrapper,
} from '../styles/FrontendStyles';

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
      <ProjectWrapper>
        <ProjectContainer>
          <h1>Projects</h1>

          <ProjectsStyle>
            {repos
              .map((repo) => (
                <StyledCardContainer key={repo.id}>
                  <h2>{repo.name}</h2>
                  <p>{repo.description}</p>
                  <a href={repo.html_url}>Github</a>
                </StyledCardContainer>
              ))
              .filter(
                (todo) =>
                  todo.props.children[0].props.children ===
                    'diablo_guitar_site' ||
                  todo.key.includes(353453308) ||
                  todo.key.includes(354054894)
              )}
          </ProjectsStyle>
        </ProjectContainer>
      </ProjectWrapper>

      {/* <Wrapper>
        <h1>Projects</h1>
        <ProjectsWrapper>
          <div className='projectContainer'>
            <div className='projectInfo'>
              <div className='card'>
                

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
      </Wrapper> */}
    </div>
  );
};
