/* 3rd party imports */
import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

/* 1st party imports */
import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface Query {
	data: {
		markdownRemark: {
			frontmatter: {
				slug: string,
				title: string,
				date: string,
			},
			html: string,
		}
	}
}

const Template: FunctionComponent<Query> = ({ data }) => {
	const { markdownRemark } = data;
	const { frontmatter, html } = markdownRemark;
	
	return (
		<Layout>
			<SEO title={frontmatter.title}/>
			<div className="post">
				<h1>{frontmatter.title}</h1>
				<h2>{new Date(frontmatter.date).toLocaleDateString()}</h2>
				<div
				className="post-content"
				dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
		</Layout>
	)
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
