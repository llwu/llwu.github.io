import Link from 'next/link';
import Layout from 'components/Layout';

const CreativeCodingPage = () => (
  <Layout title="Creative Coding // Lawrence Wu">
    <h1>
      Creative Coding //{" "}
      <Link href="/">
        <a>Lawrence Wu</a>
      </Link>
    </h1>
    <h2>
      <Link href="/creative-coding/eigenmodes">
        <a>Eigenmodes</a>
      </Link>
    </h2>
  </Layout>
)

export default CreativeCodingPage;
