import { useAmp } from 'next/amp';

const TagLink: React.FunctionComponent<{ tag: string }> = ({ tag }) => {
  const amp = useAmp() ? '.amp' : '';
  return <a href={`/blog/tags/${tag}${amp}`}>#{tag}</a>;
};

export default TagLink;
