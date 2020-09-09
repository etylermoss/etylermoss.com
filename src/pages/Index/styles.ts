/* 3rd party imports */
import { SxStyleProp } from 'theme-ui';

const portrait: SxStyleProp = {
	width: ['14em', '17em', '20em'],
	float: ['none', 'right', 'right'],
	margin: ['0 auto 0 auto', '0 0 0 1.5em', '0 0 0 2em'],
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

export default { portrait, greetings, title };