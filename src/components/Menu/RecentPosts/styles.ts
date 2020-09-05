/* 3rd party imports */
import { SxStyleProp } from 'theme-ui';

const container: SxStyleProp = {
	m: '0.25em 0 0 0.7em',
	p: '0.2em 0 0.2em 0',
	display: 'flex',
	borderLeft: '1px solid #DDD',
};

const list: SxStyleProp = {
	width: 0,
	flexGrow: 1,
	listStyleType: 'none',
	m: '0 0 0 1em',
	p: 0,
	'>li:last-child': {
		mb: 0,
	},
};

const listItem: SxStyleProp = {
	mb: '0.8em',
	'a': {
		color: 'link',
	},
};

const listItemDescription: SxStyleProp = {
	margin: 0,
	color: 'subtext',
}

export default { container, list, listItem, listItemDescription };