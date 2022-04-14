import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '@comp/Navbar'
import { Header } from '@comp/Header'
import { Content } from '@comp/Content'
const Home: NextPage = () => {
  return (
    <div>
      <Header title="Home Page | Atorasu" />
      <Content />
    </div>
  )
}

export default Home
