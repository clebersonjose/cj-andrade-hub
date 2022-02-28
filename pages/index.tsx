import styled from 'styled-components';
import Text from '../src/components/Text';
import ArticleHeader from '../src/layouts/ArticleHeader';
import DomainLink from '../src/infra/components/DomainLink';
import DomainHead from '../src/infra/components/DomainHead';
import { PrimaryButton, SecondaryButton } from '../src/components/Button';
import Footer from '../src/layouts/Footer';

const Content = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto max-content;
  align-items: center;
  gap: 20px;
  padding-top: 50px;
`;

const Main = styled.main`
  display: grid;
  padding: 20px;
  height: max-content;
  align-items: center;
  max-width: 100vw;
  gap: 20px;

  @media(min-width: 750px) {
    grid-template-columns: repeat(2, 1fr);  
  }
`;

const NavActions = styled.nav`
  display: flex;
  gap: 20px;

  @media(max-width: 260px) {
    flex-direction: column;
  }
`;

export default function Home() {
  return (
    <>
      <DomainHead>
        <title>Cléberson J. Andrade</title>
      </DomainHead>
      <Content>
        <Main>
          <section>
            <ArticleHeader
              titleChildren="Cléberson J. Andrade"
              subtitleChildren="Programador no Grupo Cruzeiro do Sul Educacional"
            />

            <Text>
              Lorem ipsum dolor sit amei, consectetur adipiscing elit. Pellentesque
              pulvinar tortor convallis dolor ultricies, nec mattis lorem mattis.
              In eu facilisis mauris.
            </Text>

            <NavActions>
              <DomainLink href="/projetos">
                <SecondaryButton>Projetos</SecondaryButton>
              </DomainLink>

              <DomainLink href="/contato">
                <PrimaryButton>Contato</PrimaryButton>
              </DomainLink>
            </NavActions>
          </section>
        </Main>

        <Footer />
      </Content>
    </>
  );
}
