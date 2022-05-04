import React from 'react';
import { HeaderContainer, Wrapper } from '../styles/GlobalStyles';
import { UxProject } from '../styles/UxProjectStyles';

export const FreshkeeperProject = () => {
  return (
    <Wrapper>
      <HeaderContainer>
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
      </HeaderContainer>
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
          </div>
        </div>
      </UxProject>
    </Wrapper>
  );
};
