/* 3rd party imports */
import { SxStyleProp } from 'theme-ui';

const container: SxStyleProp = {
	minWidth: [ '72vw', '60vw', '34vw' ],
	flexDirection: 'column',
	boxSizing: 'border-box',
	fontSize: '0.9em',
	p: '1.5em',
	bg: 'background',
	height: '100%',
	fontFamily: 'heading',
	position: 'relative',
};

const recentPostsHeader: SxStyleProp = {
	color: 'bold',
	m: '0.8em 0 0.5em 0',
};

const footer: SxStyleProp = {
	mt: 'auto',
}

const githubLink: SxStyleProp = {
	color: 'link',
	textDecoration: 'none',
}

const githubLinkRepoText: SxStyleProp = {
	color: 'subtext',
	m: '-0.3em 0 0 0',
	fontSize: '0.85em',
}

export default { container, recentPostsHeader, footer, githubLink, githubLinkRepoText };