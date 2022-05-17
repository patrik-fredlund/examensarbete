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
          <h1 className='projectTitle'>My Work </h1>
          <hr />
          <div className='ingressContainer'>
            {/*     <p className='ingressText'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              impedit illo itaque voluptas libero veritatis ea laborum ad
              suscipit debitis, molestias tempore doloribus quam porro sapiente
              ipsam quidem dignissimos modi?
            </p> */}
          </div>
        </HeaderContainer>

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
