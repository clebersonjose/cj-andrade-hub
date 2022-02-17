import type { NextPage } from 'next';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Text from '../src/components/Text';
import ArticleHeader from '../src/layouts/ArticleHeader';
import DomainLink from '../src/infra/components/DomainLink';
import DomainHead from '../src/infra/components/DomainHead';
import { PrimaryButton, SecondaryButton } from '../src/components/Button';

const Content = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-rows: max-content auto max-content;
  align-items: center;
`;

const Main = styled.main`
  display: grid;
  padding: 20px;
  grid-template-columns: repeat(2, 1fr);
  height: max-content;
  align-items: center;
  max-width: 100vw;
  gap: 20px;
`;

const NavActions = styled.div`
  display: flex;
  gap: 20px;
`;

const Footer = styled.footer`
  display: flex;
  padding: 10px 20px;
  gap: 20px;
  background-color: #EDEDED;
  justify-content: center;
`;

const Icon = styled(FontAwesomeIcon)`
  line-height: 30px;
  font-size: 30px;
  color: #000;
`;

const Home: NextPage = () => {
  return (
    <>
    <DomainHead>
        <title>Cléberson J. Andrade</title>
    </DomainHead>
    <Content>
      <header></header>
      <Main>
        <section>
          <ArticleHeader
            titleChildren="Cléberson J. Andrade"
            subtitleChildren="Programador no Grupo Cruzeiro do Sul Educacional"
          />

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar tortor convallis dolor ultricies, nec mattis lorem mattis. In eu facilisis mauris.
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

      <Footer>
        <a href="https://github.com/clebersonjose" target='_blank' rel="noreferrer">
          <Icon icon={faGithubSquare} />
        </a>

        <a href="https://www.linkedin.com/in/clebersonandrade/" target='_blank' rel="noreferrer">
          <Icon icon={faLinkedin} />
        </a>

        <a href="https://www.instagram.com/cleber.png/" target='_black' rel="noreferrer">
          <Icon icon={faInstagramSquare} />
        </a>
      </Footer>
    </Content>
    </>
  )
}

export default Home
