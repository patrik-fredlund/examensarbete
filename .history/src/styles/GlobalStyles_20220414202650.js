import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid red;

  justify-content: center;
  text-align: center;

  .introText {
    color: red;
  }
`;
