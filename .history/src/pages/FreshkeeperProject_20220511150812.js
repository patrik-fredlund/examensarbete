import React from 'react';
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
        <h1 className='projectTitle'>Step 1</h1>
        <hr />
        <p className='subHeader'>Explore Ideas</p>
        <p>Buy food waste from restaurants and shops.</p>
        <p>Buy food waste from private individuals.</p>
        <p>Swap raw materials with each other.</p>
        <p>F?? en p??minnelse om att din k??pta r??vara snart g??r ut.</p>
        <p className='subHeader'>Define Idea</p>
        <p>
          We want to make it easier for the user to eat their purchased food
          before it expires, and in this way save money and at the same time
          protect the environment. A service that helps you keep track of when
          your raw materials run out. Register the ingredients in the app and
          put a best-before date on it. Get a reminder when the date starts to
          approach.
        </p>

        <div className='discoverySection'>
          <h1>Discovery</h1>
          {/*   <h3>Research goals</h3>
          <ul>Explore ideas</ul> */}
          <p className='subHeader'>Research goals</p>
          <p>What are Millennials' spending/savings habits like.</p>
          <p> What are Millennials' spending/savings habits like. </p>
          <p> What are Millennials' spending/savings habits like. </p>
          <p> What are Millennials' spending/savings habits like. </p>
          <p>
            Develop a solution proposal in the form of a clickable prototype.
            The proposal must be rooted in business goals and user needs of the
            main target group. The prototype will primarily be used on mobile
            phones The prototype should cover the main flow from start to
            finish. Develop a solution proposal in the form of a clickable
            prototype. The proposal must be rooted in business goals and user
            needs of the main target group. The prototype will primarily be used
            on mobile phones The prototype should cover the main flow from start
            to finish.
          </p>
        </div>
      </UxProject>
    </Wrapper>
  );
};
