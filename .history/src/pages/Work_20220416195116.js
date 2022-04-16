import React from 'react';
import Footer from '../components/Footer';
import { AboutContainer } from '../styles/ContentElements';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Project1 } from './Project1';
import { Project2 } from './Project2';
import { NavLink } from '../components/NavbarElements';

export const Work = () => {
  return (
    <div>
      <AboutContainer>
        <h1>Work</h1>
      </AboutContainer>

      <Footer />
    </div>
  );
};
