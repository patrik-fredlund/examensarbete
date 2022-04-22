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
      case 'left':
        setToggler({
          Work2: true,
          Project1: false,
          Project2: false,
        });
        break;
      case 'center':
        setToggler({
          Work2: false,
          Project1: true,
          Project2: false,
        });
        break;
      case 'right':
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
        <Link to='/Work2'>
          <li
            id='left'
            className={toggler.left ? 'show-selected_link' : ''}
            onClick={selectLink}
          >
            one
          </li>
        </Link>
        <Link to='/Project1'>
          <li
            id='center'
            className={toggler.center ? 'show-selected_link' : ''}
            onClick={selectLink}
          >
            two
          </li>
        </Link>
        <Link to='/Project2'>
          <li
            id='right'
            className={toggler.right ? 'show-selected_link' : ''}
            onClick={selectLink}
          >
            Three
          </li>
        </Link>
      </ul>
    </nav>
  );
};
