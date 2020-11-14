import * as React from "react";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Layout from 'components/Layout';

const P5Wrapper = dynamic(import('react-p5-wrapper'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
}) as any;

const DEFAULT_HARMONIC = 20;

const EigenmodePage: React.FunctionComponent<{}> = () => {
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
    <Layout title="Eigenmodes // Creative Coding // Lawrence Wu">
      <h1>
        Eigenmodes //{' '}
        <Link href="/creative-coding">
          <a>Creative Coding</a>
        </Link> //{' '}
        <Link href="/">
          <a>Lawrence Wu</a>
        </Link>
      </h1>
      Eigenvalue #<input type="number" defaultValue={DEFAULT_HARMONIC} onChange={handleHarmonic} />
      (range from 0 to {ELEMS - 1})
      <P5Wrapper sketch={Eigenmodes(eigenmodesProps)}/>
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
