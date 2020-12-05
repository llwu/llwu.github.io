import { writeFileSync } from 'fs';
import { useAmp } from 'next/amp';
import Head from 'next/head';
import Layout from 'components/Layout';

import { Posts, TagCounts } from 'metadata/posts';
import TagLink from 'components/TagLink';
import BlogItem from 'components/BlogItem';

export const config = { amp: 'hybrid', unstable_runtimeJS: false };

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
        <a href={`/${amp && 'index'}${amp}`}>
          Lawrence Wu
        </a>
      </h1>
      <a href="/rss.xml">RSS Feed</a><br/>
      Tags: {TagCounts.map((tag: any, i) => <>{i === 0 ? '' : ', '}<TagLink tag={tag[0]} />{` (${tag[1]})`}</>)}
      <hr />
      {Posts.map(post => <BlogItem id={post.id} />)}
    </Layout>
  );
};

const generateRssItem = (post: any): string => `
  <item>
    <guid>https://llwu.me.com/blog/${post.id}</guid>
    <title>${post.title}</title>
    <link>https://llwu.me/blog/${post.id}</link>
    <description>${post.description}</description>
    <pubDate>${post.date.toUTCString()}</pubDate>
  </item>
`;

const generateRss = (posts: any[]): string => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Lawrence Wu's Blog</title>
      <link>https://llwu.me/blog</link>
      <description>Lawrence Wu's Blog RSS Feed</description>
      <language>en</language>
      <lastBuildDate>${posts[0].date.toUTCString()}</lastBuildDate>
      <atom:link href="https://llwu.me/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`;

export const getStaticProps = async () => {
  const rss = generateRss(Posts);

  writeFileSync('./public/rss.xml', rss);

  return { props: {} };
};

export default BlogPage;
