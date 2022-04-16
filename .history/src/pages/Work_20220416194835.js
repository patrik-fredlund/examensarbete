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
      <Routes>
        <Route path='/Project1' element={<Project1 />} />
        <Route path='/Project2' element={<Project2 />} />
      </Routes>

      <Footer />
    </div>
  );
};
