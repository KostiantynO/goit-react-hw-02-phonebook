import { styled } from 'common';
import { ButtonStyled } from 'common/components/Button/Button.styled';
import { LabelStyled } from 'common/components/Label/Label.styled';

export const ContactItemStyled = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: ${({ theme }) => theme.spacing(2)};

  padding: ${({ theme }) => theme.spacing(2)};

  border-radius: ${({ theme }) => theme.spacing(1)};
  outline: 1px solid ${({ theme }) => theme.colors.black};

  width: 100%;
  /* @media screen and (min-width: 768px) {
    width: calc(50% - 1 * ${({ theme }) => theme.spacing(3)});
    gap: ${({ theme }) => theme.spacing(3)};
  }

  @media screen and (min-width: 1200px) {
    width: calc(33% - 2 * ${({ theme }) => theme.spacing(3)});
    gap: ${({ theme }) => theme.spacing(5)};
  } */

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${({ theme }) =>
      theme.zIndex('ContactItemStyled::after'.toLowerCase())};
    display: block;

    width: 100%;
    height: 5px;

    background-color: ${({ theme }) => theme.colors.darkGreen};

    ${({ theme }) => theme.transition('transform')};
    border-radius: ${({ theme }) => theme.spacing(5)};

    transform: ${({ completed }) => `scale(${completed ? 1 : 0})`};
  }

  span {
    text-decoration: ${({ completed }) => completed && '2px line-through'};
    word-break: break-word;
  }
`;

export const ContactLabel = styled(LabelStyled)`
  input[type='checkbox'] {
    width: clamp(24px, 2.1vw, 48px);
    height: clamp(24px, 2.1vw, 48px);
  }
`;

export const DeleteContactBtn = styled(ButtonStyled)`
  position: absolute;
  top: -${({ theme }) => theme.spacing(3)};
  right: -${({ theme }) => theme.spacing(2)};
  z-index: ${({ theme }) => theme.zIndex('DeleteTodoBtn'.toLowerCase())};

  padding: 4px;
`;
