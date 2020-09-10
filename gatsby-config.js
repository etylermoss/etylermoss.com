const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'Eden Tyler-Moss',
		description: 'My website, built with Gatsby & TypeScript.',
		author: 'Eden Tyler-Moss',
		email: 'eden@etylermoss.com',
		mobile: '+44 (0)7460 195524',
		siteUrl: 'https://www.etylermoss.com',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-offline',
		'gatsby-plugin-typescript',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-cname',
		'gatsby-plugin-theme-ui',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				excerpt_separator: '<!-- excerpt -->',
			},
		},
		{
			resolve: 'gatsby-plugin-page-creator',
			options: {
				path: `${__dirname}/src/pages`,
				ignore: ['**/styles.ts'],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'markdown-pages',
				path: `${__dirname}/src/posts`,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Eden Tyler-Moss',
				short_name: 'etylermoss.com',
				start_url: '/',
				background_color: '#9696F3',
				theme_color: '#9696F3',
				display: 'minimal-ui',
				icon: `${__dirname}/src/images/portrait.png`,
			},
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Noto Sans:400,700', 'Ubuntu:400,700'],
				},
			},
		},
		{
			resolve: 'gatsby-plugin-alias-imports',
			options: {
				alias: {
					'@': path.resolve(__dirname, 'src'),
				},
			},
		},
	],
}
