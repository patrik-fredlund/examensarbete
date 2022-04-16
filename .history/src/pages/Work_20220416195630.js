import React from 'react';
import Footer from '../components/Footer';
import { AboutContainer } from '../styles/ContentElements';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Project1 } from './Project1';
import { Project2 } from './Project2';

export const Work = () => {
  return (
    <div>
      <AboutContainer>
        <h1>Work</h1>
      </AboutContainer>
      <div className='ProjectsContainer'>
        <div className='projectCard'>
          <h1>name of project</h1>
          <p>short description of the eproject</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
