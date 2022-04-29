import styled from 'styled-components';
import Subtitle from '../../src/components/Subtitle';
import Title from '../../src/components/Title';
import DomainHead from '../../src/infra/components/DomainHead';
import Footer from '../../src/layouts/Footer';
import Header from '../../src/layouts/Header';

const Content = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-rows: max-content auto max-content;
  align-items: center;
`;

const Main = styled.main`
  text-align: center;
`;

export default function Projetos() {
  return (
    <>
      <DomainHead>
        <title>Projetos</title>
      </DomainHead>

      <Content>
        <Header />

        <Main>
          <Title>Projetos</Title>
          <Subtitle>Sem projetos no momento</Subtitle>
        </Main>

        <Footer />
      </Content>
    </>
  );
}
