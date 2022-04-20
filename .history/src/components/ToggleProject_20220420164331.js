import React from 'react';

export const ToggleProject = () => {
  return (
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
  );
};
