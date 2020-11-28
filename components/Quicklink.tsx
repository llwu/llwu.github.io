import Head from 'next/head';

const Quicklink = () => (
  <Head>
    <script defer src="/quicklink.umd.js" key="quicklink" />
    <script
      defer
      dangerouslySetInnerHTML={{
        __html: `window.addEventListener('load',()=>quicklink.listen())`
      }}
    />
  </Head>
);

export default Quicklink;
