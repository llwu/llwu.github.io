const Posts = [
  {
    'id': 'bayes-contingency-table',
    'title': 'Bayesian analysis of contingency tables (feat. COVID-19 vaccines)',
    'description': '2x2, mxn, hierarchical, multiple covariates, approximation, prior and posterior plots',
    'date': new Date('2020-11-26T02:35:00Z'),
    'tags': ['stats', 'bayes'],
    'redditUrl': 'https://www.reddit.com/user/llllvvuu/comments/k2ddy9/bayesian_analysis_of_contingency_tables_feat/',
    'twitterUrl': 'https://twitter.com/llllvvuu/status/1332974138517032960',
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
