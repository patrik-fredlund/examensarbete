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
      ∑
      <HeaderContainer>
        <div className='innerContainer'>
          <a href='./Work2'>Back</a>
          <h1>Freshkeeper</h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              sapiente sunt veniam, optio dolorum ex esse excepturi obcaecati
              dolor tempora vero, quidem rerum nam atque culpa veritatis ad in
              amet?
            </p>
          </div>
        </div>
      </HeaderContainer>
      {/*  </HeaderWrapper> */}
      <UxProject>
        <div className='uxProjectWrapper'>
          <div className='uxProjectContainer'>
            <h1>Project brief</h1>
            <h3>Sustainable food production / food consumption</h3>
            <p>
              More and more people are beginning to realize the importance of
              developing more sustainable services and functions that do not
              deplete ecosystem resources. But how do we do that? Identify a
              problem that you want to explore further and that you would like
              to solve in some way. Sustainable food production / food
              consumption
            </p>
            <h3>Assignment description</h3>
            <p>
              Develop a solution proposal in the form of a clickable prototype.
              The proposal must be rooted in business goals and user needs of
              the main target group. The prototype will primarily be used on
              mobile phones The prototype should cover the main flow from start
              to finish. You must carry out a use test of the prototype and then
              be able to explain orally what feedback you have received.
            </p>
          </div>
        </div>
      </UxProject>
    </Wrapper>
  );
};
