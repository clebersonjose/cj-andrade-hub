import { NextPage } from 'next';
import Footer from '../../src/layouts/Footer';
import Header from '../../src/layouts/Header';
import TitleWithSubtitle from '../../src/layouts/TitleWithSubtitle';
import ProjetosContent from '../../styles/projetos';

const Projetos: NextPage = () => (
  <ProjetosContent>
    <Header />

    <main>
      <TitleWithSubtitle
        title="Projetos"
        subtitle="Sem projetos no momentos"
      />
    </main>

    <Footer />
  </ProjetosContent>
);

export default Projetos;
