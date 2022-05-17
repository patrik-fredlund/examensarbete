import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//styles
import '../styles/App.css';
import { ContentContainer } from '../styles/GlobalStyles';

//This component are the buttons on the landing page that toggles the 3 work categories
export const ToggleProject = () => {
  const [toggler, setToggler] = useState({
    Work2: true,
    FrontendProjects: false,
    Design: false,
  });

  const location = window.location.pathname;

  const selectLink = (e) => {
    switch (e.target.id) {
      case 'Work2':
        setToggler({
          Work2: true,
          FrontendProjects: false,
          Design: false,
        });
        break;
      case 'FrontendProjects':
        setToggler({
          Work2: false,
          FrontendProjects: true,
          Design: false,
        });
        break;
      case 'Design':
        setToggler({
          Work2: false,
          FrontendProjects: false,
          Design: true,
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
            <h1 className='toggleTitle'>Check out my work below. </h1>
            <p className='toogleExplainer'>
              Have a look at my UX cases, and since I'm also into Frontend and
              Graphic Design, feel free to check that out as well.
            </p>

            <ul>
              <div className='projectButton'>
                <Link to={location === 'Work2' ? '/Work2' : '/'}>
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
                <Link
                  to={
                    location === '/Work2'
                      ? 'Work2/FrontendProjects'
                      : 'FrontendProjects'
                  }
                >
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
                <Link to={location === '/' ? 'Design' : 'Work2/Design'}>
                  <li
                    id='Design'
                    className={toggler.Design ? 'show-selected_link' : ''}
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
