import React from 'react';
import { useAmp } from 'next/amp';
import Head from 'next/head';
import Layout from 'components/Layout';

import { PostMap } from 'metadata/posts';
import TagLink from 'components/TagLink';
import Quicklink from 'components/Quicklink';

type Props = {
  children?: React.ReactNode
  id: string
};

const BlogPost = ({ children, id }: Props) => {
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
      "name": PostMap[id].title,
    }]
  };
  return (
    <Layout title={`${PostMap[id].title} // Blog // Lawrence Wu`} description={`${PostMap[id].description}`}>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      {!amp && <Quicklink />}
      <h1>
        {PostMap[id].title} // {" "}
        <a href={`/blog${amp}`}>Blog</a> // {" "}
        <a href={`/${amp && 'index'}${amp}`}>Lawrence Wu</a>
      </h1>
      <h3>
        {PostMap[id].date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}{' '}
        {PostMap[id].tags.map((tag: any) => <><TagLink tag={tag} />{' '}</>)}
      </h3>
      <hr />
      {children}
      <hr />
      {PostMap[id].redditUrl && <><a
        href={PostMap[id].redditUrl}
        target="_blank"
        rel="noreferrer"
      >
        Comment on Reddit
      </a><br /></>}
      {PostMap[id].redditUrl && <a
        href={PostMap[id].twitterUrl}
        target="_blank"
        rel="noreferrer"
      >
        Comment on Twitter
      </a>}
    </Layout>
  );
};

export default BlogPost;
