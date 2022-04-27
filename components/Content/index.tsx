import Head from 'next/head'
import type { FC } from 'react'
import { CONF, ILinkProps } from '@libs/config'
import Link from 'next/link'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { SpotifyCard } from '@comp/SpotifyCard'

export const Content: FC = () => {
  return (
    <div className="container mx-auto h-full w-11/12  rounded-lg  shadow-lg  md:h-[15rem] md:w-[75rem]">
      <div className="flex flex-col justify-center py-2 px-4 md:flex md:flex-row md:justify-between">
        <div className="py-4 text-center md:text-left">
          <h1 className=" max-w-[35.9rem] text-4xl text-black">
            self taught <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text  font-extrabold text-transparent">
              full-stack
            </span>{' '}
            Developer
          </h1>
          <p className="py-4 text-xl text-blue-500">
            Hello. I'm Atorasu. I'm a 16 Years Old From İstanbul/Turkey.
          </p>
          <SpotifyCard />
        </div>
        <div className="flex justify-center">
          <img
            className=" w-2/4 rounded-lg md:h-52 md:w-56"
            src="https://cdn.discordapp.com/avatars/760499240966684683/a_dba85b5a642edaca85e521f4b774d73a.gif?size=2048"
          />
        </div>
      </div>
    </div>
  )
}
