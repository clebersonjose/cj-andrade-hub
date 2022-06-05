import { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../../src/layouts/Footer';
import Header from '../../src/layouts/Header';
import TitleWithSubtitle from '../../src/layouts/TitleWithSubtitle';
import ProjetosContent from '../../styles/projetos';

const Projetos: NextPage = () => (
  <>
    <Head>
      <title>Projetos | CJ Andrade</title>
    </Head>
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
  </>
);

export default Projetos;
