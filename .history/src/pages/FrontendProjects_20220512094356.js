import { useState, useEffect } from 'react';

import {
  ProjectContainer,
  ProjectWrapper,
  ProjectsStyle,
  StyledCardContainer,
  ProjectItemCard,
  ProjectPickWrapper,
} from '../styles/FrontendStyles';
import { FrontensProjectsWrapper } from '../styles/FrontendStyles';
import { Wrapper } from '../styles/GlobalStyles';

export const FrontendProjects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/patrik-fredlund/repos')
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <Wrapper>
        <h1 className='projectTitle'>Frontend Projects </h1>
        <hr />

        <FrontensProjectsWrapper>
          <div className='frontendProjectsContainer'>
            <div className='frontendProjectInfo'>
              <div className='FrontendCard'>
                <h1>El Diablo Guitars</h1>

                <h4>My first project </h4>
                <p>
                  A site for the fabricated guitar brand "El Diablo Guitarras"
                  This is the first individual project assignment on the Front
                  End Developer course at KYH, in Stockholm. On this project I
                  used HTML, CSS and a little bit of JS.
                </p>

                <a href='https://patrik-fredlund.github.io/diablo_guitar_site/'>
                  check it out
                </a>
              </div>
              <img
                className='diabloImg'
                /*    className='projectImg'
                src='https://user-images.githubusercontent.com/70227819/125456836-670ce51a-8841-4629-acd9-1d0d9744caa6.png'
                alt='images of diablo site' */
                src={require('../Images/eldiablo.png')}
                alt='images of diablo site'
              />
              <a
                className='githubLink'
                href='https://github.com/patrik-fredlund/diablo_guitar_site'
              >
                Link To Github Repo
              </a>
            </div>
          </div>

          <div className='projectContainer'>
            <div className='projectInfo'>
              <div className='card'>
                <h1>Unscripted</h1>

                <h4>Teamproject in school </h4>
                <p>
                  Unscripted is a movie app where you can find information about
                  movies and tv-series, save movies to watchlist and get
                  individual statistics based on the movies that you’ve seen.
                  Built with React and Firebase.
                </p>

                <a href='https://unscripted-app.surge.sh/'>check it out</a>
              </div>
              <img
                className='projectImg'
                src='https://user-images.githubusercontent.com/70227819/125456978-24dca1f4-b868-4bf6-aa85-15f7074bfcde.png'
                alt='images of diablo site'
              />
              <a
                className='githubLink'
                href='https://github.com/alexanderys/fe20tp2_bev_2'
              >
                Link To Github Repo
              </a>
            </div>
          </div>

          {/*         <ProjectItemCard>
          <a href='https://penapp.netlify.app/'>
            <h2>Quire - A Noteapp</h2>
            <h4>Teamproject In School </h4>
            <p>
              The brief was to create a basic note-taking app without using any
              major JS framework. It listed a set of specified features, such as
              being able to favorite notes, simpler styling and saving notes in
              local storage.
            </p>
            <img
              className='projectImg'
              src='https://user-images.githubusercontent.com/70227819/125462421-d1fbb5cc-5a1f-4644-b6cd-b24237bcd033.png'
              alt='images of diablo site'
            />
          </a>
          <a
            className='githubLink'
            href='https://github.com/patrik-fredlund/TeamPrpject1_Quire'
          >
            Link To Github Repo
          </a>
        </ProjectItemCard> */}
          {/*  </ProjectPickWrapper> */}
        </FrontensProjectsWrapper>
      </Wrapper>

      {/*      <h2 className='someWork'>All Github Projects</h2>
      <ProjectWrapper>
        <ProjectContainer>
          <ProjectsStyle>
            {repos.map((repo) => (
              <StyledCardContainer key={repo.id}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <a href={repo.html_url}>Github</a>
              </StyledCardContainer>
            ))}
          </ProjectsStyle>
        </ProjectContainer>
      </ProjectWrapper> */}
    </>
  );
};
