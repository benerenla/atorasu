import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react'
import { Navbar } from '@comp/Navbar'
import { useLanyardWs } from 'use-lanyard'
import { CONF } from '@libs/config'
export const AppContext = createContext<ReturnType<typeof useLanyardWs> | null>(
  null
)

function MyApp({ Component, pageProps }: AppProps) {
  const lanyard = useLanyardWs(CONF.USER_ID)

  return (
    <AppContext.Provider value={lanyard}>
      <Navbar />
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
