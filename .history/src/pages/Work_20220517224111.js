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
        <h1 className='projectTitle'>My Work </h1>
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

        <ToggleProject />

        <Routes>
          {/* <Route path='/' element={<Work />} /> */}
          <Route path='/' element={<Work2 />} />
          <Route path='FrontendProjects' element={<FrontendProjects />} />
          <Route path='Design' element={<Design />} />
        </Routes>
      </Wrapper>
    </div>
  );
};
