/* 3rd party imports */
import { SxStyleProp } from 'theme-ui';

const boxShadow = (theme: any) => `0 0 5px 0px ${theme.colors.shadow}`;

const container: SxStyleProp = {
	position: 'relative',
	flexDirection: ['column', 'row'],
	boxShadow: [boxShadow, 'none'],
};

const image: SxStyleProp = {
	overflow: 'hidden',
	boxShadow: ['none', boxShadow],
};

const infoContainer = (forceDarkColorMode: boolean): SxStyleProp => ({
	display: 'inline-block',
	position: [null, 'absolute'],
	width: [null, '30em', '40em'],
	bottom: [null, '8%', '7%'],
	left: [null, '11%', '8%'],
	textDecoration: 'none',
	padding: ['0.3em', '0.45em'],
	backgroundColor: 'primary',
	color: theme => forceDarkColorMode ? theme.colors.modes.dark.bold : 'bold',
});

const headerContainer: SxStyleProp = {
	margin: ['0em 0 0.65em 0', '0em 0 0.75em 0'],
};

const title: SxStyleProp = {
	margin: 0,
};

const date: SxStyleProp = {
	margin: '0 0 0 auto',
};

const excerpt: SxStyleProp = {
	margin: 0,
	fontSize: '0.8em',
};

export default { container, image, infoContainer, headerContainer, title, date, excerpt };