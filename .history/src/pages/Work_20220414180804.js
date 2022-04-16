import React from 'react';
import Footer from '../components/Footer';
import { AboutContainer } from '../styles/ContentElements';

export const Work = () => {
  return (
    <div>
      <AboutContainer>
        <h1>Work</h1>
      </AboutContainer>

      <video width='750' height='500' controls>
        <source src="'../Images/video.mp4 " type='video/mp4' />
      </video>

      <Footer />
    </div>
  );
};
