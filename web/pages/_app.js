import { ReactQueryDevtools } from 'react-query-devtools'
import { Container } from '@glrodasz/components'

import "minireset.css";
import "@glrodasz/components/styles/globals.css";
import "@glrodasz/components/styles/tokens.css";


function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen />
    </Container>
  );
}

export default MyApp;
