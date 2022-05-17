import React from 'react';

//navigation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import { ToggleProject } from '../components/ToggleProject';
import { FrontendProjects } from './FrontendProjects';

//styles
import {
  Wrapper,
  ContentContainer,
  HeaderContainer,
} from '../styles/GlobalStyles';

import { Design } from './Design';
import { Work2 } from './Work2';

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
          {/* <Route path='/' element={<Work />} /> */}
          {/* <Route path='Work' element={<Work2 />} /> */}
          <Route path='FrontendProjects' element={<FrontendProjects />} />
          <Route path='Design' element={<Design />} />
        </Routes>
      </Wrapper>
    </div>
  );
};
