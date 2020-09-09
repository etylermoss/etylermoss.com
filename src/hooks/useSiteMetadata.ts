/* 3rd party imports */
import { useStaticQuery, graphql } from 'gatsby';

interface Query {
	site: {
		siteMetadata: {
			author: string;
			description: string;
			email: string;
			mobile: string;
			siteUrl: string
			title: string;
		}
	}
}

const Hook = () => {
	const { site } = useStaticQuery<Query>(graphql`
		query SiteMetadata {
			site {
				siteMetadata {
					author
					description
					email
					mobile
					siteUrl
					title
				}
			}
		}
	`);

	return site.siteMetadata;
}

export default Hook;
