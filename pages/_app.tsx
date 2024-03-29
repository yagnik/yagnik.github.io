import '../public/styles/globals.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import Logo from '../public/logo.svg'
import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { Fragment } from 'react'
import { Socials } from '../lib/socials'
import Head from 'next/head'

function HeadingMenu() {
  // function SubMenu({ items }) {
  //   return (
  //     <Transition
  //       as={Fragment}
  //       enter="transition ease-out duration-100"
  //       enterFrom="transform opacity-0 scale-95"
  //       enterTo="transform opacity-100 scale-100"
  //       leave="transition ease-in duration-75"
  //       leaveFrom="transform opacity-100 scale-100"
  //       leaveTo="transform opacity-0 scale-95"
  //     >
  //       <Menu.Items className="absolute mt-7 grid divide-y divide-gray-500">
  //         {items.map((item, index) => {
  //           return (
  //             <Menu.Item key={index}>
  //               <Link className="py-2 hover:text-text-highlight text-left" href={item.href}>
  //                 {item.label}
  //               </Link>
  //             </Menu.Item>
  //           )
  //         })}
  //       </Menu.Items>
  //     </Transition>
  //   )
  // }

  let paths = [
    // { text: 'Notes', path: '/notes' },
    // { text: 'Now', path: '/now' },
    // { text: 'Hire', path: '/hire' },
    // { text: 'About', path: '/about' },
  ]

  return (
    <Menu as="nav" className="grid gap-6 grid-flow-col relative content-center">
      {/* <div>
        <Menu.Button className="group inline-flex items-center">
          <p>Garden</p>
          <ChevronDownIcon className="h-5 w-5 text-text-highlight " aria-hidden="true" />
        </Menu.Button>
      </div> */}
      {paths.map((path, index) => (
        <Link key={index} className="hover:text-text-highlight" href={path.path}>
          {path.text}
        </Link>
      ))}
      {/* <SubMenu items={[{ label: 'Notes', href: '/notes' }]} /> */}
    </Menu>
  )
}

function Header() {
  return (
    <header className="w-full grid grid-flow-col py-2 px-8 justify-between">
      <Link href="/">
        <Image alt="logo" src={Logo.src} width="24" height="24" />
      </Link>
      <HeadingMenu />
    </header>
  )
}

function Footer() {
  return (
    <footer className="w-full py-2 px-8 bottom-0">
      <div className="h-0.5 bg-gray-200 w-full" />
      <div className="w-full grid grid-flow-col max-w-6xl p-8 justify-between mx-auto">
        <div className="grid grid-flow-col gap-8">
          {Socials.map((social, index) => (
            <Link key={index} href={social.href} target="_blank">
              <Image alt={social.label} src={social.src} width="24" height="24" />
            </Link>
          ))}
        </div>
        <div>&#169; 2023 Yagnik </div>
      </div>
    </footer>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preload" href="/fonts/Orpheus Pro.otf" as="font" type="font/otf" />
        <link rel="preload" href="/fonts/IvyMode-Italic.woff2" as="font" type="font/woff2" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
