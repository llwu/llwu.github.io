import { useAmp } from 'next/amp';
import Link from 'next/link';
import Head from 'next/head';
import Layout from 'components/Layout';

export const config = { amp: 'hybrid' }

const CreativeCodingPage = () => {
  const amp = useAmp() ? '.amp' : '';
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Lawrence Wu",
      "item": "https://llwu.me",
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Creative Coding",
    }]
  };

  return (
    <Layout title="Creative Coding // Lawrence Wu" description="A collection of sketches I've made.">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <h1>
        Creative Coding //{" "}
        <Link href={`/${amp && 'index'}${amp}`}>
          <a>Lawrence Wu</a>
        </Link>
      </h1>
      <hr />
      <h3>
        <Link href="/creative-coding/eigenmodes">
          <a>Eigenmodes (WIP)</a>
        </Link>
      </h3>
    </Layout>
  );
};

export default CreativeCodingPage;
