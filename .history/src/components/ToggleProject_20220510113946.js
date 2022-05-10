import React, { useState } from 'react';
import { BrowserRouter, Link, Routes } from 'react-router-dom';
import { FrontendProjects } from '../pages/FrontendProjects';
import '../styles/App.css';
import { ContentContainer } from '../styles/GlobalStyles';

export const ToggleProject = () => {
  const [toggler, setToggler] = useState({
    Work2: true,
    FrontendProjects: false,
    Project2: false,
  });

  const selectLink = (e) => {
    switch (e.target.id) {
      case 'Work2':
        setToggler({
          Work2: true,
          FrontendProjects: false,
          Project2: false,
        });
        break;
      case 'FrontendProjects':
        setToggler({
          Work2: false,
          FrontendProjects: true,
          Project2: false,
        });
        break;
      case 'Project2':
        setToggler({
          Work2: false,
          FrontendProjects: false,
          Project2: true,
        });
        break;
      default:
        break;
    }
  };

  return (
    <ContentContainer>
      <div className='toggleWrapper'>
        <div className='toggleContainer'>
          <nav>
            <h1>Check out my work below! </h1>

            <ul>
              <div className='projectButton'>
                <Link to='Work2'>
                  <li
                    id='Work2'
                    className={toggler.Work2 ? 'show-selected_link' : ''}
                    onClick={selectLink}
                  >
                    UX Cases
                  </li>
                </Link>
              </div>
              <div className='projectButton'>
                <Link to='/FrontendProjects'>
                  <li
                    id='FrontendProjects'
                    className={
                      toggler.FrontendProjects ? 'show-selected_link' : ''
                    }
                    onClick={selectLink}
                  >
                    Frontend development
                  </li>
                </Link>
              </div>
              <div className='projectButton'>
                <Link to='/Project2'>
                  <li
                    id='Project2'
                    className={toggler.Project2 ? 'show-selected_link' : ''}
                    onClick={selectLink}
                  >
                    Graphic Design
                  </li>
                </Link>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </ContentContainer>
  );
};
