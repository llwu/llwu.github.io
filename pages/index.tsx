import Link from 'next/link';
import Layout from 'components/Layout';

const IndexPage = () => (
  <Layout title="Lawrence Wu">
    <h1>Lawrence Wu</h1>
    <h2>
      <Link href="/creative-coding/">
        <a>Creative Coding</a>
      </Link>
    </h2>
  </Layout>
)

export default IndexPage;
