import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '@comp/Navbar'
import { Header } from '@comp/Header'
import { Content } from '@comp/Content'
import { Project } from '@comp/Content/Project'
const Home: NextPage = () => {
  return (
    <div>
      <Header title="Projects | Atorasu" />
      <Project />
    </div>
  )
}

export default Home
