import Head from 'next/head'
import type { FC } from 'react'
import { CONF, ILinkProps } from '@libs/config'
import Link from 'next/link'

let links = [
  {
    title: '/home',
    href: '/',
  },
  {
    title: '/projects',
    href: '/projects',
  },
] as ILinkProps[]

export const Navbar: FC = () => {
  return (
    <div className="container mx-auto my-9 h-12 ">
      <div className="flex justify-center py-2 text-center">
        {links.length > 0
          ? links.map((link) => (
              <Link key={link.title} href={link.href}>
                <a className="px-3 text-base text-black transition-all hover:text-gray-400  ">
                  {link.title}
                </a>
              </Link>
            ))
          : null}
      </div>
    </div>
  )
}
