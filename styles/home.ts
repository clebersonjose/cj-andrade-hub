import styled from 'styled-components';

export const Page = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto max-content;
  gap: 2rem 0;
  min-height: 100vh;
  align-items: center;
  justify-content: center;

  > * {
    grid-column: span 2;
  }

  @media(max-width: ${({ theme }) => theme.size.tablet}) {
    grid-template-columns: repeat(3, 1fr);

    > * {
      grid-column: span 3;
    }
  }

  @media(max-width: ${({ theme }) => theme.size.mobile}) {
    grid-template-columns: unset;

    > * {
      grid-column: unset;
    }
  }
`;

export const HomeContent = styled.main`
  padding: 2rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-column: 1;

  @media(max-width: ${({ theme }) => theme.size.tablet}) {
    grid-column: 1/3;
  }

  @media(max-width: ${({ theme }) => theme.size.mobile}) {
    grid-column: unset;
  }
`;

export const HomeNavActions = styled.section`
  display: flex;
  gap: 2rem;
  width: 100%;
`;
