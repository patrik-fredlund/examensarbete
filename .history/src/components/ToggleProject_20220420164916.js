import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import '../src/styles/App.css';

const [toggler, setToggler] = useState({
  left: true,
  center: false,
  right: false,
});

const selectLink = (e) => {
  switch (e.target.id) {
    case 'left':
      setToggler({
        left: true,
        center: false,
        right: false,
      });
      break;
    case 'center':
      setToggler({
        left: false,
        center: true,
        right: false,
      });
      break;
    case 'right':
      setToggler({
        left: false,
        center: false,
        right: true,
      });
      break;
    default:
      break;
  }
};

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
