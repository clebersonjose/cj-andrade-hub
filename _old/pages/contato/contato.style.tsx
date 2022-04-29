import styled from 'styled-components';

export const Content = styled.section`
  width: 100%;
  min-height: 100vh;
  display: grid;
  gap: 2em;
  grid-template-rows: max-content auto max-content;
  align-items: center;
`;

export const Main = styled.main`
  padding: 0 2em;
`;

export const ActionsBar = styled.section`
  display: flex;
  gap: 2em;
  width: 100%;
  justify-content: flex-end;
`;
