import { useAmp } from 'next/amp';
import Layout from 'components/Layout';
import Quicklink from 'components/Quicklink';

export const config = { amp: 'hybrid', unstable_runtimeJS: false };

const IndexPage = () => {
  const amp = useAmp() ? '.amp' : '';

  return (
    <Layout title="Lawrence Wu" description="Personal Site of Lawrence Wu">
      {!amp && <Quicklink />}
      <h1 style={{ marginBottom: 0 }}>Lawrence Wu</h1>
      <a href="https://twitter.com/llllvvuu" target="_blank" rel="noreferrer">
        @llllvvuu
      </a>
      <hr />
      <h3>
        <a href={`/visuals${amp}`}>
          Visuals
        </a>
      </h3>
      <h3>
        <a href={`/blog${amp}`}>
          Blog
        </a>
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
