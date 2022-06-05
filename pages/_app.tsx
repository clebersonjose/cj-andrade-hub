import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { MessageProvider } from '../src/contexts/messages';
import Default from '../src/themes/default';

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
  <MessageProvider>
    <ThemeProvider theme={Default}>
      <GlobalStyle />

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  </MessageProvider>
);

export default MyApp;
