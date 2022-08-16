import React from 'react'
import type { AppProps } from 'next/app'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore, persistor } from '../state'

import Providers from '../Providers'

import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <>
      <Providers store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Providers>
    </>
  )
}

export default MyApp
