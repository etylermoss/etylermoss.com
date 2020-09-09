/* 3rd party imports */
import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

/* 1st party imports */
import useSiteMetadata from '@/hooks/useSiteMetadata';

interface Props {
	description?: string;
	lang?: string;
	meta?: any[];
	title: string;
}

const Component: FunctionComponent<Props> = ({ description = '', lang = 'en', meta = [], title }) => {
	const siteMetadata = useSiteMetadata();

	const metaDescription = description || siteMetadata.description;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${siteMetadata.title}`}
			meta={[
				{
					name: 'description',
					content: metaDescription,
				},
				{
					property: 'og:title',
					content: title,
				},
				{
					property: 'og:description',
					content: metaDescription,
				},
				{
					property: 'og:type',
					content: 'website',
				},
				{
					name: 'twitter:card',
					content: 'summary',
				},
				{
					name: 'twitter:creator',
					content: siteMetadata.author,
				},
				{
					name: 'twitter:title',
					content: title,
				},
				{
					name: 'twitter:description',
					content: metaDescription,
				},
			].concat(meta)}
		/>
	)
}

export default Component;
