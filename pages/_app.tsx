import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px
  }

  body, * {
    margin: 0;
    padding: 0;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />

    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);

export default MyApp;
