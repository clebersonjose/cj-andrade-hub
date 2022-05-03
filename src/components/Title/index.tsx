import styled from 'styled-components';

const Title = styled.h1`
  font-size: 4.8rem;
  line-height: 1.25em;
  color: #000;
  font-family: 'Quicksand', sans-serif;

  @media (max-width: 780px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3.6rem;
  }
`;

export default Title;
