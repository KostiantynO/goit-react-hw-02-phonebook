import { styled } from 'common';
import { CustomTitle } from './CustomTitle';

export const SectionTitleStyled = styled(CustomTitle)`
  margin-bottom: clamp(28px, 2.1vw, 36px);
  font-size: clamp(2rem, 4vw, 3rem);
  transform: translateX(50%);
  color: ${({ theme }) => theme.colors.lightTeal};

  ${({ theme }) => theme.transition('transform')}

  > span {
    display: inline-block;
    transform: translateX(-50%);
    ${({ theme }) => theme.transition('transform')}
  }
`;
