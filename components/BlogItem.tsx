import { useAmp } from 'next/amp';

import { PostMap } from 'metadata/posts';
import TagLink from 'components/TagLink';

const BlogItem: React.FunctionComponent<{ id: string }> = ({ id }) => {
  const amp = useAmp() && PostMap[id].amp ? '.amp' : '';
  return (
    <h3>
      <a href={`/blog/${id}${amp}`}>
        {PostMap[id].title}
      </a>
      <br />
      {PostMap[id].date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}{' '}
      {PostMap[id].tags.map((tag: any) => <><TagLink tag={tag} />{' '}</>)}
    </h3>
  );
};

export default BlogItem;
