import { useAmp } from 'next/amp';
import Link from 'next/link';
import Layout from 'components/Layout';

export const config = { amp: 'hybrid' }

const IndexPage = () => {
  const amp = useAmp() ? '.amp' : '';

  return (
    <Layout title="Lawrence Wu" description="Personal Site of Lawrence Wu">
      <h1 style={{ marginBottom: 0 }}>Lawrence Wu</h1>
      <a href="https://twitter.com/llllvvuu" target="_blank" rel="noreferrer">
        @llllvvuu
      </a>
      <hr />
      <h3>
        <Link href={`/blog${amp}`}>
          <a>Blog</a>
        </Link>
      </h3>
      <h3>
        <Link href={`/creative-coding${amp}`}>
          <a>Creative Coding</a>
        </Link>
      </h3>
      <h3>
        <a href="https://github.com/llwu" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </h3>
      <h3>
        <a href="https://qualiaresearchinstitute.org" target="_blank" rel="noreferrer">
          Qualia Research Institute
        </a>{' ['}
        <a href="https://psychophysics.qualiaresearchinstitute.org" target="_blank" rel="noreferrer">
          1
        </a>] [
        <a
          href="https://qualiacomputing.com/2020/10/09/modeling-psychedelic-tracers-with-qris-psychophysics-toolkit-the-tracer-replication-tool/"
          target="_blank"
          rel="noreferrer"
        >
          2
        </a>]
      </h3>
    </Layout>
  )
}

export default IndexPage;
