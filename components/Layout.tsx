import React, { ReactNode } from 'react';
import Head from 'next/head';
import { useAmp } from 'next/amp';
import { GA_TRACKING_ID } from 'metadata/constants';

type Props = {
  children?: ReactNode
  title?: string
  description?: string
};

const Layout = ({ children, title = 'Lawrence Wu', description = '' }: Props) => {
  const isAmp = useAmp();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS feed for blog posts"
          href="https://llwu.me/rss.xml"
        />
        <meta name="description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@llllvvuu" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        {
          isAmp? <>
            <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
          </> : <>
            <script src="/instantpage.js" type="module" defer></script>
            <script defer src="https://www.googletagmanager.com/gtag/js?id=G-MBWQ2DW007"></script>
            <script dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_TRACKING_ID}');`
            }} />
          </>
        }
      </Head>
      {isAmp && (
        <amp-analytics type="gtag" data-credentials="include">
        <script type="application/json" dangerouslySetInnerHTML={{
          __html: `{
"vars" : {
  "gtag_id": "${GA_TRACKING_ID}",
  "config" : {
    "${GA_TRACKING_ID}": { "groups": "default" }
  }
}
}`
        }} />
          </amp-analytics>)
      }
      <div style={{
        maxWidth: '900px',
        margin: 'auto',
        fontFamily: 'Georgia,Times,Times New Roman,serif',
      }}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
