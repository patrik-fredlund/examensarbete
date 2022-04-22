import React, { useState } from 'react';
import { BrowserRouter, Link, Routes } from 'react-router-dom';
import { Project1 } from '../pages/Project1';
import '../styles/App.css';
import { ContentContainer } from '../styles/GlobalStyles';

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
          Project1: false,
          Project2: false,
        });
        break;
      case 'Project1':
        setToggler({
          Work2: false,
          Project1: true,
          Project2: false,
        });
        break;
      case 'Project2':
        setToggler({
          Work2: false,
          Project1: false,
          Project2: true,
        });
        break;
      default:
        break;
    }
  };

  return (
    <nav>
      <ContentContainer>
        <div>
          <h1>Check out my work below</h1>
        </div>
      </ContentContainer>

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
        <Link to='/Project1'>
          <li
            id='Project1'
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
    </nav>
  );
};
