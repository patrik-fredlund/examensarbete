import React, { useState } from 'react';
import { BrowserRouter, Link, Routes } from 'react-router-dom';
import { FrontendProjects } from '../pages/FrontendProjects';
import '../styles/App.css';

export const ToggleProject = () => {
  const [toggler, setToggler] = useState({
    Work2: true,
    Project1: false,
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
    <nav>
      <div className='ToggleProjectContainer'>
        <h1>Check out my work below</h1>

        <ul>
          <Link to='Work2'>
            <li
              id='Work2'
              className={toggler.Work2 ? 'show-selected_link' : ''}
              onClick={selectLink}
            >
              UX Cases
            </li>
          </Link>
          <Link to='/FrontendProjects'>
            <li
              id='FrontendProjects'
              className={toggler.Project1 ? 'show-selected_link' : ''}
              onClick={selectLink}
            >
              Frontend Development
            </li>
          </Link>
          <Link to='/Project2'>
            <li
              id='Project2'
              className={toggler.Project2 ? 'show-selected_link' : ''}
              onClick={selectLink}
            >
              Graphic Design
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
