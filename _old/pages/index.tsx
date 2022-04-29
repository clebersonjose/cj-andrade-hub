import styled from 'styled-components';
import Text from '../src/components/Text';
import ArticleHeader from '../src/layouts/ArticleHeader';
import DomainLink from '../src/infra/components/DomainLink';
import DomainHead from '../src/infra/components/DomainHead';
import { PrimaryButton, SecondaryButton } from '../src/components/Button';
import Footer from '../src/layouts/Footer';
import BannerMessagesFeed from '../src/layouts/BannerMessagesFeed';

const Content = styled.section`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: max-content auto max-content;
  align-items: center;
  gap: 2em;
`;

const Main = styled.main`
  display: grid;
  padding: 2em;
  height: max-content;
  align-items: center;
  max-width: 100%;
  gap: 2em;

  @media (min-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const NavActions = styled.nav`
  display: flex;
  gap: 2em;

  @media (max-width: 260px) {
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
        <BannerMessagesFeed />

        <Main>
          <section>
            <ArticleHeader
              titleChildren="Cléberson J. Andrade"
              subtitleChildren="Programador no Grupo Cruzeiro do Sul Educacional"
            />

            <Text>
              Programador Web a 4 anos, atualmente atuando no Grupo Cruzeiro do
              Sul Educacional, trabalhando no momento em projetos ReactJS,
              NodeJS (c/ Express) e WordPress (PHP).
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
