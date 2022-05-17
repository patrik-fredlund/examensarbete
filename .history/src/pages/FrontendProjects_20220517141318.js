import { useState, useEffect } from 'react';

import {
  ProjectContainer,
  ProjectWrapper,
  ProjectsStyle,
  StyledCardContainer,
} from '../styles/FrontendStyles';
import { FrontensProjectsWrapper } from '../styles/FrontendStyles';
import { Wrapper } from '../styles/GlobalStyles';

//This is the frontend projects page. It's my backend contribution for this project, where I fetch the github API to show my guthub project.
export const FrontendProjects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/patrik-fredlund/repos')
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
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
              <div className='frontendCard'>
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
                <a
                  className='githubLink'
                  href='https://github.com/patrik-fredlund/diablo_guitar_site'
                >
                  Link To Github Repo
                </a>
              </div>
              <img
                className='diabloImg'
                src={require('../Images/eldiablo.png')}
                alt='images of diablo site'
              />
            </div>
          </div>

          <div className='frontendProjectsContainer'>
            <div className='frontendProjectInfo'>
              <div className='frontendCard'>
                <h1>Unscripted</h1>

                <h4>Teamproject in school </h4>
                <p>
                  Unscripted is a movie app where you can find information about
                  movies and tv-series, save movies to watchlist and get
                  individual statistics based on the movies that you’ve seen.
                  Built with React and Firebase.
                </p>

                <a href='https://unscripted-app.surge.sh/'>check it out</a>
                <a
                  className='githubLink'
                  href='https://github.com/alexanderys/fe20tp2_bev_2'
                >
                  Link To Github Repo
                </a>
              </div>
              <img
                className='unscriptedImg'
                src={require('../Images/unscriptedImg.png')}
                alt='images of unscripted site'
              />
            </div>
          </div>

          <div className='frontendProjectsContainer'>
            <div className='frontendProjectInfo'>
              <div className='frontendCard'>
                <h1>Quire - A Noteapp</h1>

                <h4>Teamproject in school </h4>
                <p>
                  The brief was to create a basic note-taking app without using
                  any major JS framework. It listed a set of specified features,
                  such as being able to favorite notes, simpler styling and
                  saving notes in local storage.
                </p>

                <a href='https://penapp.netlify.app/'>check it out</a>
                <a
                  className='githubLink'
                  href='https://github.com/patrik-fredlund/TeamPrpject1_Quire'
                >
                  Link To Github Repo
                </a>
              </div>
              <img
                className='unscriptedImg'
                src={require('../Images/quire.png')}
                alt='images of unscripted site'
              />
            </div>
          </div>
        </FrontensProjectsWrapper>
      </Wrapper>
      {/* Här är mitt backend bidrag, där jag fetchar listan över alla mina github repos från githubs API */}
      <h1 className='projectTitle'>All Github Projects </h1>
      <hr />
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
      </ProjectWrapper>
    </>
  );
};
