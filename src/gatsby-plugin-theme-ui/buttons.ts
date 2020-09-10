/* 3rd party imports */
import { Theme } from 'theme-ui';

export default {
	header: {
		color: 'text',
		bg: 'background',
		cursor: 'pointer',
		outline: 'none',
		'&:hover': {
			color: 'layoutLinkHover'
		}
	}
} as Theme['buttons'];