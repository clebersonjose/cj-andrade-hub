import styled from 'styled-components';
import Subtitle from '../src/components/Subtitle';
import Title from '../src/components/Title';

const ProjetosContent = styled.main`
  display: grid;
  grid-template-rows: max-content auto max-content;
  align-items: center;
  gap: 2rem;
  min-height: 100vh;
  width: 100%;

  ${Title},
  ${Subtitle} {
    text-align: center;
  }
`;

export default ProjetosContent;
