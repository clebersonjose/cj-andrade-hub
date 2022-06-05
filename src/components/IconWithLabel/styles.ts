import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const IconWithLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: max-content;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  height: 3rem;
  width: 3rem;
`;

export const IconLabel = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.2rem;
`;
