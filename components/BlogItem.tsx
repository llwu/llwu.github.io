import { useAmp } from 'next/amp';
import Link from 'next/link';

import { PostMap } from 'metadata/posts';
import TagLink from 'components/TagLink';

const BlogItem: React.FunctionComponent<{ id: string }> = ({ id }) => {
  const amp = useAmp() ? '.amp' : '';
  return (
    <h3>
      <Link href={`/blog/${id}${amp}`}>
        <a>{PostMap[id].title}</a>
      </Link>
      <br />
      {PostMap[id].date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}{' '}
      {PostMap[id].tags.map((tag: any) => <><TagLink tag={tag} />{' '}</>)}
    </h3>
  );
};

export default BlogItem;
