import { useAmp } from 'next/amp';
import Link from 'next/link';

const TagLink: React.FunctionComponent<{ tag: string }> = ({ tag }) => {
  const amp = useAmp() ? '.amp' : '';
  return (
    <Link href={`/blog/tags/${tag}${amp}`}>
      <a>#{tag}</a>
    </Link>
  );
};

export default TagLink;
