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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            totam odio doloribus tempora iure id laboriosam reiciendis
            temporibus. Quae nobis porro esse recusandae impedit veniam nostrum
            accusamus quas repellendus laboriosam.
          </p>
        </div>
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
