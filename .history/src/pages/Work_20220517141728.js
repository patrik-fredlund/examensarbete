import React from 'react';
import { ToggleProject } from '../components/ToggleProject';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FrontendProjects } from './FrontendProjects';

import { Work2 } from './Work2';
import { Design } from './Design';
import {
  Wrapper,
  ContentContainer,
  HeaderContainer,
} from '../styles/GlobalStyles';

//This is the work page which is linked in the navbar. It shows the 3 work categories.
export const Work = () => {
  return (
    <div>
      <Wrapper>
        <HeaderContainer>
          <h1>Work</h1>
        </HeaderContainer>
        <ContentContainer>
          <p className='textBox'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quas
            veniam quia maiores soluta perspiciatis explicabo. Voluptatem
            architecto amet quo quae quibusdam, quasi eius sequi, ratione rerum
            at tempora non?
          </p>
        </ContentContainer>
        <ToggleProject />
        <Routes>
          <Route path='/' element={<Work2 />} />
          <Route path='Work2' element={<Work2 />} />
          <Route path='FrontendProjects' element={<FrontendProjects />} />
          <Route path='Design' element={<Design />} />
        </Routes>
      </Wrapper>
    </div>
  );
};
