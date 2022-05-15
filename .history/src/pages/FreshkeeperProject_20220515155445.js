import React from 'react';
import { AboutContainer } from '../styles/AboutStyles';
import {
  HeaderContainer,
  Wrapper,
  HeaderWrapper,
} from '../styles/GlobalStyles';
import { UxProject } from '../styles/UxProjectStyles';

export const FreshkeeperProject = () => {
  return (
    <Wrapper>
      <UxProject>
        {/*       <div className='innerContainer'> */}
        <div className='headerWrapper'>
          <div className='headerProjectContainer'>
            <a href='./Work2'>Back</a>

            <h1 className='headerTitle'>Freshkeeper</h1>
            <p className='explainerText'>
              Freshkeeper is an App that helps you keep track on your food items
              and their expiration date. This was a schools assignement with
              focus on the ux process, from research and discovery to definition
              and final prototype.
            </p>

            {/* </div> */}
          </div>
        </div>
      </UxProject>

      <UxProject>
        <div className='uxProjectWrapper'>
          <div className='uxProjectContainer'>
            <h1>Project brief</h1>
            <h3>Sustainable food consumption</h3>
            <p>
              More and more people are beginning to realize the importance of
              developing more sustainable services and functions that do not
              deplete ecosystem resources. Identify a problem with food
              consumption that you want to explore further and that you would
              like to solve in some way.
            </p>
            <h3>Assignment description</h3>
            <p>
              Develop a solution proposal in the form of a clickable prototype.
              The proposal must be rooted in business goals and user needs of
              the main target group. The prototype will primarily be used on
              mobile phones The prototype should cover the main flow from start
              to finish.
            </p>
          </div>
        </div>
        <h1 className='projectTitle'>Discover</h1>
        <hr />
        <p className='subHeader'>Part 1</p>
        <p className='ingressParagraph'>
          First part of the dicovery was to choose a problem to solve with food
          consumption. We decided to focus on food waste because according to
          the National Food Administration:
        </p>
        <div className='uxProjectWrapperYellow'>
          <div className='uxProjectContainer'>
            <p className='posItText'>
              Approximately 19 kilos of edible food are thrown in the rubbish
              and 26 kilos of food and drink are poured into the bin. The
              figures apply per person and year.{' '}
              <span className='bold'>
                Much of the food is thrown away because it is not eaten in time.
              </span>
            </p>
          </div>
        </div>
        <p className='MiddleIngressParagraph'>
          So after exploring different ideas of how we could help the user waste
          less food we decided to create an app that gives the user an reminder
          when thier purchased food will soon expire. So in other words:
        </p>
        <div className='uxProjectWrapperBlue'>
          <div className='uxProjectContainer'>
            <p className='posItText'>
              We want to make it easier for the user to eat their purchased food
              before it expires, and in this way{' '}
              <span className='bold'>save money</span> and at the same time
              <span className='bold'> protect the environment.</span>
            </p>
          </div>
        </div>
        <p className='subHeader'>
          The main two features of this app would be:
          {/*        <ul>
            <li>
              Register the food in the app and put a best-before date on it.
            </li>
            <li>Get a reminder when the date starts to approach.</li>
          </ul>{' '} */}
        </p>
        <div className='postItWrapper'>
          <div className='postItContainer'>
            <div className='postItNotes'>
              <h2 className='postItTitle'> Register</h2>
              <p className='postItText'>
                Register the food in the app and put a best-before date on it.
              </p>
            </div>
            <div className='postItNotes'>
              <h2 className='postItTitle'>Reminder </h2>
              <p className='postItText'>
                Get a reminder when the date starts to approach.
              </p>
            </div>
          </div>
        </div>
        <p className='MiddleIngressParagraph'>
          That's the basic idea of the app and the two main features. with this
          in mind the next step of the discovery was to do a competitor
          analysis.
        </p>
        <div className='competitorsContainer'>
          <h2 className='projectSubTitle'>competitor analysis</h2>
          <p className='MiddleIngressParagraph'>
            After searching the web for similar apps I found that{' '}
            <span className='bold'>Fridge buddy,</span>
            <span className='bold'> Beep</span> and
            <span className='bold'> Fridgely </span> are the main competitors.{' '}
            <br />
            To learn from them I decided to go directly to their users by
            reading the customer reviews of those apps. In that way I could get
            insight in the users <span className='bold'>pains</span> and{' '}
            <span className='bold'>gains</span> when using that app, and use
            that to my advantage. I would also get valuble knowledge of the user
            needs when using an app like this.
            <img
              className='reviews'
              src={require('../Images/reviews.jpg')}
              alt='image of the freshkepper app'
            />
            <p className='imgText'>
              {' '}
              sample from the user reviews. useful insights highlighted in red
            </p>
          </p>
        </div>

        <div className='uxProjectWrapper'>
          <div className='uxProjectContainer'>
            <h1>Pains</h1>
            <ul>
              <li>
                Register the food in the app and put a best-before date on it.
              </li>
              <li>Get a reminder when the date starts to approach.</li>
            </ul>
          </div>
        </div>
      </UxProject>
    </Wrapper>
  );
};
