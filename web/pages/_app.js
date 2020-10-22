import { ReactQueryCacheProvider, QueryCache } from "react-query";
import { ReactQueryDevtools } from 'react-query-devtools'
import { Container } from '@glrodasz/components'
import Head from 'next/head'

import "minireset.css";
import "@glrodasz/components/styles/globals.css";
import "@glrodasz/components/styles/tokens.css";

const queryCache = new QueryCache()

function MyApp({ Component, pageProps }) {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Container>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen />
      </Container>
    </ReactQueryCacheProvider>
  );
}

export default MyApp;
