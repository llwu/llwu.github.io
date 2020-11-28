import * as React from "react";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout';
import Quicklink from 'components/Quicklink';

const P5Wrapper = dynamic(import('react-p5-wrapper'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
}) as any;

const DEFAULT_HARMONIC = 20;

const EigenmodePage: React.FunctionComponent<{}> = () => {
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
      "item": "https://llwu.me/visuals",
    },{
      "@type": "ListItem",
      "position": 3,
      "name": "Eigenmodes",
    }]
  };

  const { default: Eigenmodes, EigenmodesProps, ELEMS } = require('sketches/eigenmodes');
  const eigenmodesProps = { harmonic: DEFAULT_HARMONIC };
  const handleHarmonic = (e: React.ChangeEvent<HTMLInputElement>) => {
    const h = Number(e.target.value);
    if (!(h >= 0)) {
      eigenmodesProps.harmonic = 0;
    } else if (!(h < ELEMS)) {
      eigenmodesProps.harmonic = ELEMS - 1;
    } else {
      eigenmodesProps.harmonic = h;
    }
  };
  return (
    <Layout
      title="Eigenmodes (WIP) // Visuals // Lawrence Wu"
      description="Visualization of solutions to the wave equation on a graph, by eigendecomposition of the Laplacian."
    >
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <Quicklink />
      <h1>
        Eigenmodes (WIP) //{' '}
        <a href="/visuals">Visuals</a> //{' '}
        <a href="/">Lawrence Wu</a>
      </h1>
      Eigenvalue #<input type="number" defaultValue={DEFAULT_HARMONIC} onChange={handleHarmonic} />
      {' '}(range from 0 to {ELEMS - 1})
      <hr />
      <P5Wrapper sketch={Eigenmodes(eigenmodesProps)}/>
      <hr />
      <a
        href="https://github.com/llwu/llwu.github.io/blob/master/sketches/eigenmodes/index.ts"
        target="_blank"
        rel="noreferrer"
      >
        View Source on GitHub
      </a>
    </Layout>
  )
}

export default EigenmodePage;
