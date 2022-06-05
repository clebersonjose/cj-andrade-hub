import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const CardsMessagesFeed = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: grid;
  gap: 2rem;
`;

export const CardMessageBox = styled.div`
  padding: 1rem;

  background-color: ${({ theme, type }: { theme: any, type: String }) => {
    if (type === 'success') return theme.successColor;
    if (type === 'error') return theme.errorColor;
    return theme.warningColor;
  }};

  border-radius: .8rem;
  max-width: 38.6rem;

  @media (max-width: ${({ theme }) => theme.size.tablet}) {
    max-width: 28.5rem;
  }

  @media (max-width: ${({ theme }) => theme.size.mobile}) {
    max-width: 23.4rem;
  }
`;

export const CardMessageContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

export const CardMessageIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.lightColor};
  height: 3rem;
  width: 3rem;
`;

export const CardMessageText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.lightColor};
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.2rem;
  width: 100%;
  align-self: center;
`;

export const CardMessageIconX = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.lightColor};
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
`;
