/** @jsx jsx */
/* 3rd party imports */
import { FunctionComponent } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { jsx } from 'theme-ui';

/* 1st party imports */
import Styles from '@/components/Menu/RecentPosts/styles';

interface Query {
	allMarkdownRemark: {
		edges: {
			node: {
				frontmatter: {
					slug: string;
					title: string;
					date: string;
				}
			}
		}[]
	}
}

const Component: FunctionComponent = () => {
	const { allMarkdownRemark } = useStaticQuery<Query>(graphql`
		query RecentPostsQuery {
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 6
			) {
				edges {
					node {
						frontmatter {
							slug
							title
							date
						}
					}
				}
			}
		}
	`);

	const Posts = allMarkdownRemark.edges.map(e => {
		return {
			date: new Date(e.node.frontmatter.date),
			slug: e.node.frontmatter.slug,
			title: e.node.frontmatter.title
		}
	});

	return (
		<nav sx={Styles.container}>
			<ol sx={Styles.list}>
				{Posts.map(post =>
					<li key={post.slug} sx={Styles.listItem}>
						<Link to={`/posts/${post.slug}`}>
							{post.title}
						</Link>
						<p sx={Styles.listItemDescription}>
							{post.date.toLocaleDateString()}
						</p>
					</li>
				)}
			</ol>
		</nav>
	);
};

export default Component;