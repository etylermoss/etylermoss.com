/* 3rd party imports */
import { SxStyleProp } from 'theme-ui';

const portrait: SxStyleProp = {
	width: ['14em', '17em', '20em'],
	float: ['none', 'right', 'right'],
	margin: ['0 auto 0 auto', '0 0 0 1.5em', '0 0 0 2em'],
	borderRadius: '50%',
	boxShadow: 'none',
}

const portraitDark: SxStyleProp = {
	...portrait,
	boxShadow: '0 0 15px -5px #9696F3',
}

const greetings: SxStyleProp = {
	margin: '1em 0 0.3em 0',
	wordSpacing: '0.3em',
	fontSize: 2,
	color: 'primary',
}

const title: SxStyleProp = {
	margin: 0,
	'a': {
		color: 'text',
		textDecoration: 'none',
	},
}

const clearFloat: SxStyleProp = {
	clear: 'both',
}

const featuredPostHeader: SxStyleProp = {
	margin: '4em 0 0.5em 0',
}

const featuredPost: SxStyleProp = {
	
}

const featuredPostImage: SxStyleProp = {
	width: ['unset', '30em', '42em'],
	height: ['14em', '19em', '24em'],
}

const recentPostsHeader: SxStyleProp = {
	margin: '2.5em 0 0.5em 0',
	textAlign: 'center',
}

const recentPostsContainer: SxStyleProp = {
	flexFlow: 'row wrap',
	justifyContent: 'space-evenly',
	alignItems: 'flex-start',
	alignContent: 'stretch',
	flex: '0 1 auto',
}

const recentPost: SxStyleProp = {
	flexBasis: ['75%', '40%', '30%'],
	maxWidth: ['75%', '40%', '30%'],
	fontSize: '0.8em',
	marginBottom: '2em',
}

const recentPostImage: SxStyleProp = {
	height: ['12em', '15em'],
}

const recentPostInfo: SxStyleProp = {
	height: ['unset', '5em'],
}

export default {
	portrait,
	portraitDark,
	greetings,
	title,
	clearFloat,
	featuredPostHeader,
	featuredPost,
	featuredPostImage,
	recentPostsHeader,
	recentPostsContainer,
	recentPost,
	recentPostImage,
	recentPostInfo,
};