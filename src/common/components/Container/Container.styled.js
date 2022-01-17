import { styled } from 'common';

export const ContainerStyled = styled.div`
  contain: content;

  display: flex;
  flex-wrap: nowrap;

  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(0, 4)};
  max-width: ${({ theme }) => theme.spacing(100)};

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }

  @media screen and (min-width: 1600px) {
    max-width: 1600px;
  }
`;
