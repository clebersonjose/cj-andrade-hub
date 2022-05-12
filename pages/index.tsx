import type { NextPage } from 'next';
import Anchor from '../src/components/Anchor';
import Button from '../src/components/Button';
import Text from '../src/components/Text';
import Footer from '../src/layouts/Footer';
import TitleWithSubtitle from '../src/layouts/TitleWithSubtitle';
import { HomeContent, HomeNavActions, Page } from '../styles/home';

const Home: NextPage = () => (
  <Page>
    <HomeContent>
      <TitleWithSubtitle
        title="Cléberson J. Andrade"
        subtitle="Programador no Grupo Cruzeiro do Sul Educacional"
      />

      <Text>
        Programador Web a 4 anos, atualmente atuando no Grupo Cruzeiro do
        Sul Educacional, trabalhando no momento em projetos ReactJS,
        NodeJS (c/ Express) e WordPress (PHP).
      </Text>

      <HomeNavActions>
        <Anchor href="/projetos">
          <Button type="Outline">Projetos</Button>
        </Anchor>

        <Button>Contato</Button>
      </HomeNavActions>
    </HomeContent>

    <Footer />
  </Page>
);

export default Home;
