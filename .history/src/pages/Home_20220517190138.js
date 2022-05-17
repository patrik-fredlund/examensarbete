import React from 'react';

//navigation
import { Route, Routes } from 'react-router';

//components
import HeroSection from '../components/HeroSection';
import { ToggleProject } from '../components/ToggleProject';

//Styles
import { Wrapper } from '../styles/GlobalStyles';
import '../styles/App.css';

//Pages
import { FrontendProjects } from './FrontendProjects';
import { Design } from './Design';
import { Work2 } from './Work2';
import ScrollToTop from '../components/ScrollToTop';

//This is the landing page
export const Home = () => {
  return (
    <ScrollToTop>
      <div>
        <Wrapper>
          <div className='outerWrapper'>
            <div className='gradientWrapper'>
              <div className='gradientBackgroundText'>
                <HeroSection />
              </div>
            </div>

            <div className='imgContainer'>
              <div className='gradientBackgroundImg'>
                <img
                  className='backgroundImg'
                  src={require('../Images/putte2.jpg')}
                  alt=''
                />
              </div>
            </div>
          </div>
          <ToggleProject />

          <Routes>
            <Route path='/' element={<Work2 />} />
            <Route path='Work2' element={<Work2 />} />
            <Route path='FrontendProjects' element={<FrontendProjects />} />
            <Route path='Design' element={<Design />} />
          </Routes>
        </Wrapper>
      </div>
    </ScrollToTop>
  );
};
