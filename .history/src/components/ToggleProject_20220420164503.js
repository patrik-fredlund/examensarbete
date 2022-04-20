import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export const ToggleProject = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <Link to='#left'>
            <li
              id='left'
              className={toggler.left ? 'show-selected_link' : ''}
              onClick={selectLink}
            >
              one
            </li>
          </Link>
          <Link to='#center'>
            <li
              id='center'
              className={toggler.center ? 'show-selected_link' : ''}
              onClick={selectLink}
            >
              two
            </li>
          </Link>
          <Link to='#right'>
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
    </BrowserRouter>
  );
};
