import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  text-align: center;
  margin-top: 70px;

  .introText {
    color: red;
  }
`;
