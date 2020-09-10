const path = require('path');

const markdownPostsQueryText = `
{
	allMarkdownRemark(
		sort: { order: DESC, fields: frontmatter___date }
		limit: 1000
	) {
		edges {
			node {
				frontmatter {
					slug
					featuredImage
				}
			}
		}
	}
}
`;

const featuredPostQueryText = `
{
	allMarkdownRemark(
		sort: { order: DESC, fields: frontmatter___date },
		filter: { frontmatter: { featured: { eq: true } } }
		limit: 1,
	) {
		edges {
			node {
				frontmatter {
					date
					slug
					title
					featuredImage
				}
				excerpt(format: PLAIN, pruneLength: 160)
			}
		}
	}
}
`;

const recentPostsQueryText = `
{
	allMarkdownRemark(
		sort: { order: DESC, fields: [frontmatter___date] }
		limit: 6
	) {
		edges {
			node {
				frontmatter {
					slug
					featuredImage
				}
			}
		}
	}
}
`;

exports.createPages = async ({ actions, graphql, reporter }) => {
	const markdownPostsQuery = await graphql(markdownPostsQueryText);
	const featuredPostQuery = await graphql(featuredPostQueryText);
	const recentPostsQuery = await graphql(recentPostsQueryText);

	if (markdownPostsQuery.errors || featuredPostQuery.errors || recentPostsQuery.errors) {
		reporter.panicOnBuild('Error while running GraphQL query.');
		return;
	}

	/* Generate posts. */
	markdownPostsQuery.data.allMarkdownRemark.edges.forEach(({ node }) => {
		actions.createPage({
			path: 'posts/' + node.frontmatter.slug,
			component: path.resolve('src/templates/Post/index.tsx'),
			context: {
				slug: node.frontmatter.slug,
				featuredImage: node.frontmatter.featuredImage,
			},
		});
	});

	/* Generate Index page. */
	const featuredPost = featuredPostQuery.data.allMarkdownRemark.edges?.[0].node;
	const recentPostsFeaturedImages = recentPostsQuery.data.allMarkdownRemark.edges.reduce((acc, edge) => {
		if (edge.node.frontmatter?.featuredImage) {
			acc.push(edge.node.frontmatter.featuredImage);
		}
		return acc;
	}, []);
	actions.createPage({
		path: '/',
		component: path.resolve('src/templates/IndexPage/index.tsx'),
		context: {
			...featuredPost.frontmatter,
			excerpt: featuredPost.excerpt,
			recentPostsFeaturedImages,
		},
	});
};