import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode
  title?: string
};

const Layout = ({ children, title = 'Lawrence Wu' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="description" content="Personal Site of Lawrence Wu" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@llllvvuu" />
      <meta property="og:title" content="Lawrence Wu" />
      <meta property="og:description" content="Personal Site of Lawrence Wu" />
      <meta property="og:url" content="https://llwu.me/" />
      <meta property="og:type" content="website" />
    </Head>
    {children}
  </div>
)

export default Layout;
