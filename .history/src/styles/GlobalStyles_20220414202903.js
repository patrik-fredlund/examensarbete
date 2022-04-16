import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;

  .introText {
    color: red;
  }

  .textBox {
    max-width: 700px;
  }
`;
