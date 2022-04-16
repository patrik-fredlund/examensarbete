import React from 'react';
import Footer from '../components/Footer';
import { AboutContainer } from '../styles/ContentElements';
import '../styles/App.css';

export const Work = () => {
  return (
    <div>
      <div className='PageContainer'>
        <AboutContainer>
          <h1>Work</h1>
        </AboutContainer>
        <div>
          <video width='750' height='500' controls>
            <source src="'../Images/video.mp4 " type='video/mp4' />
          </video>
        </div>
        <Footer />
      </div>
    </div>
  );
};
