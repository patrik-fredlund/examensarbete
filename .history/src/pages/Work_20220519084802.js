import React from 'react';

//navigation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import { ToggleProjectWorkPage } from '../components/ToggleProjectWorkPage';
import { FrontendProjects } from './FrontendProjects';

//styles
import { Wrapper, HeaderContainer } from '../styles/GlobalStyles';

import { Design } from './Design';
import { Work2 } from './Work2';
import { WorkContentContainer } from '../styles/WorkPageStyles';

//This is the work page which is linked in the navbar. It shows the 3 work categories.
export const Work = () => {
  return (
    <div>
      <Wrapper>
        <WorkContentContainer>
          <h1 className='workTitle'>My Work </h1>
          {/*      <hr /> */}
        </WorkContentContainer>
        <h1 className='toggleTitle'>Check out my work below. </h1>
        <p className='toogleExplainer'>
          Have a look at my UX cases, and since I'm also into Frontend and
          Graphic Design, feel free to check that out as well.
        </p>

        <ToggleProjectWorkPage />

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
