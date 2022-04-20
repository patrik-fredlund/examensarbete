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
      <Routes>
        <Route path='/Project1' element={<Project1 />} />
      </Routes>
      {/*   <div>
        <Link to='/Project1'> Project1 </Link>
      </div> */}
      <NavLink className='navItem' to='Project1'>
        Project1
      </NavLink>
      <NavLink className='navItem' to='Project2'>
        Project2
      </NavLink>

      <Footer />
    </div>
  );
};