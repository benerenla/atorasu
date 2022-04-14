import Head from 'next/head'
import type { FC } from 'react'
import { CONF, ILinkProps } from '@libs/config'
import Link from 'next/link'
import { FaGithub, FaTwitter, FaBackward } from 'react-icons/fa'

export const Project: FC = () => {
  return (
    <div className="container mx-auto text-center text-3xl">
      <h1 className="text-4xl">being done</h1>
      <button className=" my-4 rounded bg-indigo-600 py-4 px-6 text-xl text-white">
        <FaBackward className="inline mx-2 " />
        Home Page
      </button>
    </div>
  )
}
