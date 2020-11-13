import { ReactQueryCacheProvider, QueryCache } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import PropTypes from 'prop-types'
import { Button, Container } from '@glrodasz/components'
import Head from 'next/head'
import Link from 'next/link'

import 'minireset.css'
import '@glrodasz/components/styles/globals.css'
import '@glrodasz/components/styles/tokens.css'
import '../styles/globals.css'

const queryCache = new QueryCache()

function MyApp({ Component, pageProps }) {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {['/', '/home', '/planning'].map((link) => (
        <span key={link} style={{ marginRight: 10 }}>
          <Link href={link}>
            <Button type="tertiary">{link.replace('/', '') || '/index'}</Button>
          </Link>
        </span>
      ))}
      <Container>
        <Component {...pageProps} />
      </Container>
      <ReactQueryDevtools initialIsOpen />
    </ReactQueryCacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.object,
}

export default MyApp
