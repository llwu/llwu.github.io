const Posts = [
  {
    'id': 'years-later-highlights-from-undergrad-math',
    'title': 'Years later: highlights from undergrad math',
    'description': 'A list of links to revisit to recall good times and inspire an appreciation of math.',
    'date': new Date('2020-11-13T12:00:00Z'),
    'tags': ['math'],
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
