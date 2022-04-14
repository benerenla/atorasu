import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Navbar } from '@comp/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
