const Posts = [
  {
    'id': 'my-principles',
    'title': 'My principles (at the time of this writing)',
    'description': 'What I think matters and why.',
    'date': new Date('2020-11-18T02:35:00Z'),
    'tags': ['ethics'],
    'redditUrl': '',
  },
  {
    'id': 'math-bangers',
    'title': '[Linkpost] Math bangers',
    'description': 'A list of links to inspire an appreciation of math.',
    'date': new Date('2020-11-13T12:00:00Z'),
    'tags': ['math', 'linkpost'],
    'redditUrl': '',
  },
];
Posts.sort((a, b) => (b.date.valueOf() - a.date.valueOf()));

const PostMap = {} as any;
Posts.forEach((post) => (PostMap[post.id] = post));

const unsortedTags = {} as {[k: string]: number};
Posts.forEach((post) => post.tags.forEach((tag) => {
  unsortedTags[tag] = (unsortedTags[tag] || 0) + 1;
}));
const TagCounts = Object.entries(unsortedTags).sort((a, b) => (b[1] - a[1]));

export { Posts, PostMap, TagCounts };
