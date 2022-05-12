import React from 'react';
import Footer from '../components/Footer';
import { AboutContainer } from '../styles/AboutStyles';
import { Wrapper, HeaderContainer } from '../styles/GlobalStyles';

export const About = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <h1 className='projectTitle'>What about me? </h1>
        <hr />
      </HeaderContainer>
      <AboutContainer>
        <p>
          I am a curious creative and driven problem-solver with a hunger to
          work with an inspiring team, with exciting projects from scratch. I'we
          just graduated at KYH where I studied Frontend Development, to learn
          to design on the web. Since erlier I have a BA(hons) degree in graphic
          design with a focus on typography, after 3 years of study at Farnham,
          England. My strengths are in problem solving and graphic design, and I
          believe the content, words and language are as important/interesting
          to work with, as the visuals. What you can expect from me is drive.
          Because I long to work in a creative environment with an inspiring
          team more than anything else. I’m also happy, loyal and humble. So you
          get an educated and modest teamplayer through thick and thin, 24/7.
        </p>
      </AboutContainer>
    </Wrapper>
  );
};
