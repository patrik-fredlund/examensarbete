import React from 'react';
import Footer from '../components/Footer';
import { AboutContainer } from '../styles/ContentElements';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Project1 } from './Project1';
import { Project2 } from './Project2';
import { ProjectCards } from '../styles/GlobalStyles';

export const Work = () => {
  return (
    <div>
      <AboutContainer>
        <h1>Work</h1>
      </AboutContainer>
      <ProjectCards>
        <div className='ProjectsContainer'>
          <div className='Card'>
            <h1>name of project</h1>
            <p>short description of the eproject</p>
          </div>
        </div>
      </ProjectCards>

      <ProjectCards>
        <div className='ProjectsContainer'>
          <div className='Card'>
            <h1>name of project</h1>
            <p>short description of the eproject</p>
          </div>
        </div>
      </ProjectCards>
      <ProjectCards>
        <div className='ProjectsContainer'>
          <div className='Card'>
            <h1>name of project</h1>
            <p>short description of the eproject</p>
          </div>
        </div>
      </ProjectCards>
      {/*     <div>
        <Footer />
      </div> */}
    </div>
  );
};
