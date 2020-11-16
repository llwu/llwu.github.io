import { useAmp } from 'next/amp';
import Link from 'next/link';
import Head from 'next/head';
import Layout from 'components/Layout';

import { Posts, TagCounts } from 'metadata/posts';
import TagLink from 'components/TagLink';
import BlogItem from 'components/BlogItem';

export const config = { amp: 'hybrid' }

const BlogPage = () => {
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
      "name": "Blog",
    }]
  };
  return (
    <Layout title="Blog // Lawrence Wu" description="Speculating about how society and the world works.">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <h1>
        Blog // {" "}
        <Link href={`/${amp && 'index'}${amp}`}>
          <a>Lawrence Wu</a>
        </Link>
      </h1>
      Tags: {TagCounts.map((tag: any, i) => <>{i === 0 ? '' : ', '}<TagLink tag={tag[0]} />{` (${tag[1]})`}</>)}
      <hr />
      {Posts.map(post => <BlogItem id={post.id} />)}
    </Layout>
  );
};

export default BlogPage;
