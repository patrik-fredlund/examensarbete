import React, { useState } from 'react';
import { BrowserRouter, Link, Routes } from 'react-router-dom';
import { Project1 } from '../pages/Project1';
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
      <ul>
        <Link to='Work2'>
          <li
            id='Work2'
            className={toggler.Work2 ? 'show-selected_link' : ''}
            onClick={selectLink}
          >
            one
          </li>
        </Link>
        <Link to='/Project1'>
          <li
            id='Project1'
            className={toggler.Project1 ? 'show-selected_link' : ''}
            onClick={selectLink}
          >
            two
          </li>
        </Link>
        <Link to='/Project2'>
          <li
            id='Project2'
            className={toggler.Project2 ? 'show-selected_link' : ''}
            onClick={selectLink}
          >
            Three
          </li>
        </Link>
      </ul>
    </nav>
  );
};
