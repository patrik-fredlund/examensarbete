import React from 'react';
import Footer from '../components/Footer';
import { AboutContainer } from '../styles/ContentElements';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Project1 } from './Project1';
import { Project2 } from './Project2';
import { ProjectsWrapper } from '../styles/GlobalStyles';

export const Work = () => {
  return (
    <div>
      <AboutContainer>
        <h1>Work</h1>
      </AboutContainer>
      <ProjectsWrapper>
        <div className='projectContainer'>
          <div className='card'>
            <h1>First Project</h1>
            <p>short description of the eproject</p>
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
    </div>
  );
};
