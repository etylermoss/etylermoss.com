const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'Eden Tyler-Moss',
		description: 'My portfolio website.',
		author: 'Eden Tyler-Moss',
		email: 'eden@etylermoss.com',
		mobile: '+44 (0)7460 195524',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-offline',
		'gatsby-plugin-typescript',
		'gatsby-transformer-remark',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
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
				name: 'Eden Tyler-Moss - My website',
				short_name: 'etylermoss.com',
				start_url: '/',
				background_color: '#9696F3',
				theme_color: '#9696F3',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png',
			},
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Noto Sans:400,700', 'Ubuntu:400,700'],
				}
			}
		},
		{
			resolve: 'gatsby-plugin-alias-imports',
			options: {
				alias: {
					'@': path.resolve(__dirname, 'src'),
				},
			},
		}
	],
}
