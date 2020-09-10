/* 3rd party imports */
import { SxStyleProp } from 'theme-ui';

const container: SxStyleProp = {
	boxShadow: theme => `0 0 3px 0px ${theme.colors.shadow}`,
	backgroundColor: 'background',
};

const image: SxStyleProp = {
	overflow: 'hidden',
};

const infoContainer: SxStyleProp = {
	display: 'inline-block',
	textDecoration: 'none',
	padding: ['0.3em', '0.45em'],
	color: 'cardText',
	backgroundColor: 'card',
	width: '100%',
};

const title: SxStyleProp = {
	margin: 0,
};

const date: SxStyleProp = {
	margin: '0 0 0 auto',
};

export default { container, image, infoContainer, title, date };