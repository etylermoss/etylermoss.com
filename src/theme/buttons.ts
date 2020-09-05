/* 3rd party imports */
import { Theme } from 'theme-ui';

export default {
	primary: {
		color: 'text',
		bg: 'background',
		cursor: 'pointer',
		'&:hover': {
			color: 'primary'
		}
	},
	menu: {
		color: 'text',
		bg: 'background',
		cursor: 'pointer',
		fontSize: '2em',
		'&:hover': {
			color: 'primary'
		}
	}
} as Theme['buttons'];