import Head from 'next/head'
import type { FC } from 'react'
import { CONF } from '@libs/config'

type HeadProps = {
  title: String
}

export const Header: FC<HeadProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
        rel="stylesheet"
      />
    </Head>
  )
}
