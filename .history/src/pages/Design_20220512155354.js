import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Footer from '../components/Footer';
import { AboutContainer, ProjectsWrapper } from '../styles/GlobalStyles';
import { Wrapper, HeaderContainer } from '../styles/GlobalStyles';

export const Design = () => {
  return (
    <div>
      <Wrapper>
        <h1 className='projectTitle'>Graphic Design </h1>
        <hr />
        <div className='ingressContainer'>
          <p className='ingressText'>
            During my studies in frontend development I discovered my love for
            UX design, and especielly the research part. It reminds me about
            graphic design, but instead of communicating to the target audience
            in print, it's online. Below you can have a look at some of my UX
            cases.
          </p>
        </div>
        <ProjectsWrapper>
          <div className='projectContainer'>
            <div className='projectInfo'></div>
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
      </Wrapper>
    </div>
  );
};
