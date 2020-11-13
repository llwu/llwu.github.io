import * as React from "react";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Layout from 'components/Layout';

const P5Wrapper = dynamic(import('react-p5-wrapper'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
}) as any;

const EigenmodePage: React.FunctionComponent<{}> = () => {
  const { default: sketch, getHarmonic, setHarmonic, ELEMS } = require('sketches/eigenmodes');
  const handleHarmonic = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(Number(e.target.value) >= 0)) {
      setHarmonic(0);
    } else if (!(Number(e.target.value) < ELEMS)) {
      setHarmonic(ELEMS - 1);
    } else {
      setHarmonic(e.target.value)
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
      Eigenvalue #<input type="number" defaultValue={20} onChange={handleHarmonic} />
      (range from 0 to {ELEMS - 1})
      <P5Wrapper sketch={sketch}/>
    </Layout>
  )
}

export default EigenmodePage;
