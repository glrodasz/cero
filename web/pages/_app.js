import { ReactQueryCacheProvider, QueryCache } from "react-query";
import { ReactQueryDevtools } from 'react-query-devtools'
import { Container } from '@glrodasz/components'

import "minireset.css";
import "@glrodasz/components/styles/globals.css";
import "@glrodasz/components/styles/tokens.css";

const queryCache = new QueryCache()

function MyApp({ Component, pageProps }) {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Container>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen />
      </Container>
    </ReactQueryCacheProvider>
  );
}

export default MyApp;
