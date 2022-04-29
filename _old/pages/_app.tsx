/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { BannerMessagesContextProvider } from '../src/contexts/BannerMessages';
import CjAndradeTheme from '../src/ui/CjAndradeTheme';
import GlobalStyle from '../src/ui/GlobalStyle';

export default function MyApp({ Component, pageProps: pageprop }: AppProps) {
  return (
    <BannerMessagesContextProvider>
      <ThemeProvider theme={CjAndradeTheme}>
        <GlobalStyle />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Site de Cléberson José de Andrade, sobre desenvolvimento, programação de sistemas web."
          />
        </Head>

        <Component {...pageprop} />
      </ThemeProvider>
    </BannerMessagesContextProvider>
  );
}
