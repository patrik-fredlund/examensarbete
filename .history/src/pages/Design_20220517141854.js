import React from 'react';

//syles
import { ProjectsWrapper } from '../styles/GlobalStyles';
import { Wrapper } from '../styles/GlobalStyles';

//This page is a work in progress. Next step is to fill the page with graphic design work as content.

export const Design = () => {
  return (
    <div>
      <Wrapper>
        <h1 className='projectTitle'>Graphic Design </h1>
        <hr />
        <div className='ingressContainer'>
          <p className='ingressText'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            totam odio doloribus tempora iure id laboriosam reiciendis
            temporibus. Quae nobis porro esse recusandae impedit veniam nostrum
            accusamus quas repellendus laboriosam.
          </p>
        </div>
        {/*        <DesignProjectsWrapper>
          <img
            className='icu'
            src={require('../Images/ICU4L_symbol_sv.png')}
            alt='image of the freshkepper app'
          />
          <br />
          <h1>I coach you for life</h1>
        </DesignProjectsWrapper> */}
        <ProjectsWrapper>
          <div className='projectContainer'>
            <div className='projectInfo'>
              <div className='card'>
                <h1>Design project 1</h1>
                <p>Coming soon </p>
              </div>
            </div>
          </div>

          <div className='projectContainer'>
            <div className='card'>
              <h1>Design project 2</h1>
              <p>Coming soon </p>
            </div>
          </div>

          <div className='projectContainer'>
            <div className='card'>
              <h1>Design project 3</h1>
              <p>Coming soon </p>
            </div>
          </div>
        </ProjectsWrapper>
      </Wrapper>
    </div>
  );
};
