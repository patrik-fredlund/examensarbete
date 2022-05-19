import React from 'react';

//styles
import { AboutContainer } from '../styles/AboutStyles';
import { Wrapper, HeaderContainer } from '../styles/GlobalStyles';

//This is the About page. Work in progress. More content will be added.
{
  /* Todo----
        
         - Beskriv min bakgrund inom varje kategori
        - beskriv mina styrkor
        - words from references</h4>
        - Link to cv</
        */
}
export const About = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <h1 className='projectTitle'>What about me? </h1>
        <hr />
      </HeaderContainer>
      <AboutContainer>
        <p className='aboutIngress'>
          I am a curious creative and driven problem-solver with a hunger to
          work with an inspiring team, with exciting projects from scratch. I'we
          just graduated from KYH where I studied Frontend Development, to learn
          to design on the web. Since erlier I have a BA(hons) in graphic design
          with a focus on typography, from University College for the Creative
          Arts at Farnham, England. <br /> My strengths are in problem solving
          and graphic design, and I believe the content, words and language are
          as important/interesting to work with, as the visuals. What you can
          expect from me is drive. I would love to work in a creative
          environment with an inspiring team. <br /> I’m also happy, loyal and
          humble. So you will get an educated and modest team player through
          thick and thin, 24/7.
        </p>

        <div className='paragraphWrapper'>
          <div className='paragraphContainer'>
            <div className='aboutParagraph'>
              <h2>Advertising Festival in Cannes</h2>
              <p>
                I decided at an early age that I wanted to be an Art Director.
                Since my parents worked in the advertising field me and my
                sister followed them to Cannes, France every summer, to attend
                the Cannes Lions Advertising Festival. And since we where so
                young we could follow them for free and watch the commercials.
                This is when I at the age of 9 decided it I wanted to be a Art
                Director. Some summers I watched over 1000 advertising
                commericals. The car category was my favorite. On the roadtrip
                back to Sweden I spent my time comming up with commercials. I
                was hooked.
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
              <h2>Graphic Design</h2>
              <p>
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
              <h2>Graphic Design Uni in UK</h2>
              <p>
                {/*   I allways knew I wanted to study to become an good Art Direcor or Designer. So at the age of 24 I decided to get myself an degree in design.
                2006 I came home from Farnham; UK after 3 years of study where */}
                I'we got myself an BA(hons) degree in graphic design. Second
                year focused on print, packagiing and typography. The third year
                I'we choose typography as my major subject. So typography is a
                big intrest of mine and something that is close to my heart.
              </p>
            </div>
            <div className='aboutParagraph'>
              <h2>Frontend</h2>
              <p>
                This site was created as my final project on the 2 years
                education frontend Deelopment at KYH in Stockholm, Sweden. I
                built it myself as a presentation tool for when I'll search for
                jobbs. I started to reskill myself from a graphic designer to a
                webdesigner to get back into the creative field. The last couple
                of years I'we been working with in other fields, but I felt I
                wanted to get back to a more creative work, becouse that's where
                I have my strong points and what I love to do. I had no
                experience with code before I started this course, exept a
                beginners course at Jensens School to learn basic html,
                javascript and css, which I attended acouple of months before I
                started at KYH.
              </p>
            </div>
            <div className='aboutParagraph'>
              <h2>UX</h2>
              <p>
                At KYH frontend Development education we also had alot of UX
                courses. So in that process I feel in love in UX design.
                Especially the research part. It reminds me of graphic
                communication which is close to my heart, so I felt straight at
                home during these course. That's when I decided I wanted to work
                with UX design after my studies. I love to dig in and search for
                that perfect solution. And in brainstorm session and workshops
                is where my creative side feels right at home.
              </p>
            </div>

            <div className='aboutParagraph'>
              <h2>Music</h2>
              <p>
                From a young age I'we made and played music. I picked up the
                guitar at the age of 10 thanks to Angus Young which was my big
                idol. In high school I started my first band, and since then
                music been a big part of my life. When I turned 30 I decided I
                had to try to make it in the musc industry and started a band
                called Putte & Höket. We released an album and a couple of
                singles and toured as a supporting act to Stiftelsen and
                Hoffmaestro at a couple of occations. I'we dedicated my life for
                10 years but at the age of 40 I came to the conclustion that
                it's hard to make a living of it in sweden, so I decided to just
                have it as a hobby. I still write music to myself and other
                artists, and in the near future some songs will be released
                which I'we created. So music will allways be a part of my life.
              </p>
            </div>
          </div>
        </div>
      </AboutContainer>
    </Wrapper>
  );
};
