import React from 'react';
import Footer from '../components/Footer';
import { AboutContainer } from '../styles/AboutStyles';
import { Wrapper, HeaderContainer } from '../styles/GlobalStyles';

export const About = () => {
  return (
    <Wrapper>
      <h1 className='projectTitle'>UX cases </h1>
      <hr />
      <AboutContainer>
        <p>
          My name is Patrik Fredlund and I am an aspiring Frontend developer.
          Right now I'm learning the skills at a 2 year program at KYH in
          Stockholm, Sweden. My background is in Graphic Design where I have a
          bachelor with honor after 3 years study in Farnham, UK. Besides
          Graphic design and UX, my big passion in life is music and
          songwritting. My new favorite hobby though is frontend (sorry music)
          and my goal is to become an webdesigner. So hop along and join me on
          my journey from a songwriting graphic designer to a frontend
          developer. Lets Go!
        </p>
      </AboutContainer>
    </Wrapper>
  );
};
