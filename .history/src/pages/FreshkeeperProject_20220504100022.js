import React from 'react';
import { HeaderContainer, Wrapper } from '../styles/GlobalStyles';

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
          </div>
        </div>
      </UxProject>
    </Wrapper>
  );
};
