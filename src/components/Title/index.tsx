import styled from 'styled-components';

const Title = styled.h1`
  font-size: 4.8rem;
  line-height: 1.25em;
  color: ${({ theme }) => theme.darkColor};
  font-family: ${({ theme }) => theme.fontFamily};

  @media (max-width: ${({ theme }) => theme.size.tablet}) {
    font-size: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.size.mobile}) {
    font-size: 3.6rem;
  }
`;

export default Title;
