import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  width: 2.5rem;
  height: 2.5rem;
`;

export const Default = styled.button`
  padding: 1rem 2rem;
  border-radius: .8rem;
  border: none;
  background-color: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.lightColor};
  font-family: ${({ theme }) => theme.fontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &.loading {
    ${Icon} {
      animation: ${rotate} 2s linear infinite;
    }
  }

  &:disabled {
    opacity: .5;
  }
`;

export const Outline = styled(Default)`
  background-color: transparent;
  color: ${({ theme }) => theme.darkColor};
  border: ${({ theme }) => theme.darkColor} solid 1px;
`;

export const Text = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.darkColor};
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
