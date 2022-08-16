import React, { ReactNode } from 'react'
// import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/Nav'
import MobileNav from '../components/MobileNav'
import Toast from '../components/toast'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Qshop' }: Props) => (
  <div className="w-full ">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;400;500;600;700&EB+Garamond:wght@800&family=Roboto:wght@300;400;500;700;900&family=Work+Sans:wght@100;200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
    </Head>
    <MobileNav />
    <Nav />
    <Toast />
    <div className='max-w-screen-2xl mx-auto m-auto px-5 xl:px-36 pb-10'>{children}</div>
  </div>
)

export default Layout
