import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  border: 1px solid red;
  width: 300px;
  justify-content: center;

  .introText {
    display: flex;
    justify-content: center;
    color: red;
  }
`;
