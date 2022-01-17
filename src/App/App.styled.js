import { styled } from 'common';

export const AppStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(4px, 2.1vw, 16px);

  max-width: 900px;
  margin: 0 auto;
`;
