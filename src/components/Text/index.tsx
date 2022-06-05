import styled from 'styled-components';

const Text = styled.p`
  font-size: 1.8rem;
  line-height: 1.25em;
  color: ${({ theme }) => theme.darkColor};
  font-family: ${({ theme }) => theme.fontFamily};

  @media (max-width: ${({ theme }) => theme.size.tablet}) {
    font-size: 1.6rem;
  }

  @media (max-width: ${({ theme }) => theme.size.mobile}) {
    font-size: 1.4rem;
  }
`;

export default Text;
