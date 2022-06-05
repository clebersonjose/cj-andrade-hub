import styled from 'styled-components';
import Title from '../src/components/Title';
import { Default } from '../src/components/Button/styles';

export const ContatoContent = styled.div`
  display: grid;
  grid-template-rows: max-content auto max-content;
  min-height: 100vh;
  align-items: center;
`;

export const ContatoMain = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${Title} {
    text-align: center;
  }
`;

export const ContatoForm = styled.form`
  max-width: 58.8rem;
  width: 100%;
  display: grid;
  gap: 2rem;
  margin: 0 auto;

  ${Default} {
    width: max-content;
    justify-self: end;

    @media (max-width: ${({ theme }) => theme.size.mobile}) {
      justify-self: center;
    }
  }
`;
