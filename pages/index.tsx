import Link from 'next/link';
import Layout from 'components/Layout';

const IndexPage = () => (
  <Layout title="Lawrence Wu">
    <h1 style={{ marginBottom: 0 }}>Lawrence Wu</h1>
    <a href="https://twitter.com/llllvvuu" target="_blank" rel="noreferrer">
      @llllvvuu
    </a>
    <h3>
      <Link href="/creative-coding/">
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
      </a>
    </h3>
  </Layout>
)

export default IndexPage;
