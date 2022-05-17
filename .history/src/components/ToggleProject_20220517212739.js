import React, { useLayoutEffect, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

//styles
import '../styles/App.css';
import { ContentContainer } from '../styles/GlobalStyles';

//This component are the buttons on the landing page that toggles the 3 work categories
export const ToggleProject = () => {
  const location = window.location.pathname;
  const location2 = useLocation();
  const [myReset, setMyReset] = useState(location2?.state);
  const [toggler, setToggler] = useState({
    Work: location.includes('/') ? true : false,
    Work2: location.includes('Work2'),
    FrontendProjects: false,
    Design: false,
  });
  console.log(reset);

  const selectLink = (e) => {
    switch (e.target.id) {
      case 'Work2':
        setToggler({
          Work: false,
          Work2: true,
          FrontendProjects: false,
          Design: false,
        });
      case 'Work':
        setToggler({
          Work: true,
          Work2: false,
          FrontendProjects: false,
          Design: false,
        });
        break;
      case 'FrontendProjects':
        setToggler({
          Work: false,
          Work2: false,
          FrontendProjects: true,
          Design: false,
        });
        break;
      case 'Design':
        setToggler({
          Work: false,
          Work2: false,
          FrontendProjects: false,
          Design: true,
        });
        break;
      default:
        break;
    }
  };

  useLayoutEffect(() => {
    setToggler({
      Work: location.includes('/') ? true : false,
      Work2: location.includes('Work2'),
      FrontendProjects: false,
      Design: false,
    });
  }, []);
  useEffect(() => {
    setMyReset(location2.state);
  }, [reset]);
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
                <Link to={location.includes('/Work') ? '/Work' : '/'}>
                  <li
                    id='Work2'
                    className={toggler.Work ? 'show-selected_link' : ''}
                    onClick={selectLink}
                  >
                    UX Cases
                  </li>
                </Link>
              </div>
              <div className='projectButton'>
                <Link
                  to={
                    location.includes('/Work')
                      ? 'FrontendProjects'
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
                <Link to={location.includes('/Work') ? 'Design' : 'Design'}>
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
