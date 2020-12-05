import { useAmp } from 'next/amp';
import Head from 'next/head';
import Layout from 'components/Layout';

export const config = { amp: 'hybrid', unstable_runtimeJS: false };

const VisualsPage = () => {
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
      "name": "Visuals",
    }]
  };

  return (
    <Layout title="Visuals // Lawrence Wu" description="A collection of sketches I've made.">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <h1>
        Visuals //{" "}
        <a href={`/${amp && 'index'}${amp}`}>
          Lawrence Wu
        </a>
      </h1>
      <hr />
      <h3>
        <a href="/visuals/eigenmodes">
          Eigenmodes (WIP)
        </a>
      </h3>
    </Layout>
  );
};

export default VisualsPage;
