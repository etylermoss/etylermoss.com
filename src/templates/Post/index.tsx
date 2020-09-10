/** @jsx jsx */
/* 3rd party imports */
import { FunctionComponent } from 'react';
import { jsx, Flex } from 'theme-ui';
import { graphql, PageProps } from 'gatsby';

/* 1st party imports */
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Styles from '@/templates/Post/styles';

interface Query {
	markdownRemark: {
		frontmatter: {
			slug: string,
			title: string,
			date: string,
		},
		html: string,
	}
}

const Template: FunctionComponent<PageProps<Query>> = ({ data }) => {
	const { markdownRemark } = data;
	const { frontmatter, html } = markdownRemark;
	const date = new Date(frontmatter.date);
	
	return (
		<Layout>
			<SEO title={frontmatter.title}/>
			<article>
				<Flex sx={Styles.header}>
					<h1 sx={Styles.headerTitle}>{frontmatter.title}</h1>
					<time sx={Styles.headerTime} dateTime={date.toISOString()}>{date.toLocaleDateString()}</time>
				</Flex>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</article>
		</Layout>
	);
}

export default Template;

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				date
				slug
				title
			}
		}
	}
`
