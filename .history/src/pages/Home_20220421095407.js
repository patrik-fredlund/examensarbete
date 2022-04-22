import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { ToggleProject } from '../components/ToggleProject';
import { AboutContainer } from '../styles/ContentElements';
import { ContentContainer, Wrapper } from '../styles/GlobalStyles';
import { HeroContainer } from '../styles/HeroElements';
import { Project1 } from './Project1';
import { Project2 } from './Project2';
import { Work2 } from './Work2';
import '../styles/App.css';

export const Home = () => {
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
    <div>
      <nav>
        <ul>
          <Link to='/Work2'>
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
    </div>
  );
};
