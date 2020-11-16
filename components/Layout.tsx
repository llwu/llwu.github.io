import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode
  title?: string
  description?: string
};

const Layout = ({ children, title = 'Lawrence Wu', description = '' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@llllvvuu" />
      <meta property="og:title" content="Lawrence Wu" />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Head>
    <div style={{
      maxWidth: '900px',
      margin: 'auto',
      fontFamily: 'Georgia,Times,Times New Roman,serif',
    }}>
      {children}
    </div>
  </div>
)

export default Layout;
