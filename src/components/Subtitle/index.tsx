import styled from 'styled-components';

const Subtitle = styled.h2`
  font-size: 2.4rem;
  line-height: 1.25em;
  font-weight: 500;
  color: ${({ theme }) => theme.darkColor};
  font-family: ${({ theme }) => theme.fontFamily};

  @media (max-width: ${({ theme }) => theme.size.tablet}) {
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.size.mobile}) {
    font-size: 1.8rem;
  }
`;

export default Subtitle;
