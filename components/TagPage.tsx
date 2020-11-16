import { useAmp } from 'next/amp';
import Link from 'next/link';
import Head from 'next/head';
import Layout from 'components/Layout';

import { Posts } from 'metadata/posts';
import BlogItem from 'components/BlogItem';

const TagPage = (tag: string) => () => {
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
      "item": "https://llwu.me/blog",
    },{
      "@type": "ListItem",
      "position": 3,
      "name": `#${tag}`,
    }]
  };

  return (
    <Layout title={`#${tag} // Blog // Lawrence Wu"`} description={`All posts tagged #${tag}.`}>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <h1>
        #{tag} // {" "}
        <Link href={`/blog${amp}`}>
          <a>Blog</a>
        </Link> // {" "}
        <Link href={`/${amp && 'index'}${amp}`}>
          <a>Lawrence Wu</a>
        </Link>
      </h1>
      <hr />
      {Posts.filter(post => post.tags.includes(tag)).map(post => <BlogItem id={post.id} />)}
    </Layout>
  );
};

export default TagPage;
