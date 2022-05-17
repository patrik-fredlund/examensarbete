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
        <h4>Beskriv min bakgrund inom varje kategori</h4>
        <h4>beskriv mina styrkor</h4>
        <h4>words from references</h4>
        <h4>Link to cv</h4>
        <div className='paragraphWrapper'>
          <div className='paragraphContainer'>
            <div className='aboutParagraph'>
              <h2>Advertising Film Festival in Cannes</h2>
              <p>
                I decided at an early age that I wanted to be an Art Director.
                Since my parents worked in the advertising field me and my
                sister followed them to Cannes, France every summer, to attend
                the Cannes Lions Advertising Film Festival. And since we where
                so young we could follow them for free and watch the
                commercials. This is when I at the age of 9 decided it I wanted
                to be a Art Director. Some summers I watched over 1000
                advertising commericals. The car category was my favorite. On
                the roadtrip back to Sweden I spent my time comming up with
                commercials. I was hooked.
              </p>
            </div>
            <div className='aboutParagraph'>
              <h2>Advertising High school</h2>
              <p>
                So when it was time to choose high school the choice was easy
                and I attendend the only advertising school in the area,
                Mediagymnasiet in Nacka Strand, Advertising & Information. After
                those three years I attended RMI Berghs, Stockholm Diplom –
                Preparatory course for visual communication.
              </p>
            </div>
            <div className='aboutParagraph'>
              <h2>graphic design</h2>
              <p>
                {/*   Since an early age I'we been intrested in Graphic design and
                advertising. */}{' '}
                From high school and further I did my Internships as a studio
                assistant at advertising and designs agencies in Stockholm
                (HLR&DDB, Stenström&Co, Fältman&Malmén, Lars Hall AB.) where I
                helped with preparation for customer presentations, with
                moodboards etc. At the age of 18 I attended the Advertising Film
                Festival in Cannes, as a Young Creative. So now I'm back where
                it all began for me.
              </p>
            </div>

            <div className='aboutParagraph'>
              <h2>Graphic design Uni in Uk</h2>
              <p>
                2006 I came home from Farnham; UK after 3 years of study where
                I'we got myself an BA(hons) degree in graphic design. Second
                year focused on print, packagiing and typography. The third year
                I'we choose typoraphy as my main subject. So typography is a big
                intrest of mine and something I value alot.
              </p>
            </div>
            <div className='aboutParagraph'>
              <h2>UX</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                cumque nihil sint saepe natus voluptatibus voluptate totam
                magni, pariatur est labore quis nostrum vel iusto quae dolores
                quaerat dolorum. Neque!
              </p>
            </div>

            <div className='aboutParagraph'>
              <h2>Frontend</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                cumque nihil sint saepe natus voluptatibus voluptate totam
                magni, pariatur est labore quis nostrum vel iusto quae dolores
                quaerat dolorum. Neque!
              </p>
            </div>
            <div className='aboutParagraph'>
              <h2>Music</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                cumque nihil sint saepe natus voluptatibus voluptate totam
                magni, pariatur est labore quis nostrum vel iusto quae dolores
                quaerat dolorum. Neque!
              </p>
            </div>
          </div>
        </div>
      </AboutContainer>
    </Wrapper>
  );
};
