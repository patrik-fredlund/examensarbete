import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  //  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.05em;
  line-height: 1.5em;
  margin-top: 20px;

  .textBox {
    max-width: 900px;
  }
`;
