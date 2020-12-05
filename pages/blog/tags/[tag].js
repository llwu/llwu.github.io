import Head from 'next/head';
import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';

import { Posts, TagCounts } from 'metadata/posts';
import BlogItem from 'components/BlogItem';
import Layout from 'components/Layout';

export const config = { amp: 'hybrid', unstable_runtimeJS: false };

const TagPage = () => {
  const amp = useAmp() ? '.amp' : '';
  const router = useRouter();
  const { tag } = router.query;
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
      "name": "Blog",
      "item": "https://llwu.me/blog",
    },{
      "@type": "ListItem",
      "position": 3,
      "name": `#${tag}`,
    }]
  };

  return (
    <Layout title={`#${tag} // Blog // Lawrence Wu`} description={`All posts tagged #${tag}.`}>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <h1>
        #{tag} // {" "}
        <a href={`/blog${amp}`}>Blog</a> // {" "}
        <a href={`/${amp && 'index'}${amp}`}>Lawrence Wu</a>
      </h1>
      <hr />
      {Posts.filter(post => post.tags.includes(tag)).map(post => <BlogItem id={post.id} />)}
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  return { props: params };
}

export async function getStaticPaths() {
  return { fallback: false, paths: TagCounts.map((tag) => ({ params: { tag: tag[0]} })) };
}

export default TagPage;
