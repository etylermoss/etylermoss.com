/* 3rd party imports */
import { SxStyleProp } from 'theme-ui';

const header: SxStyleProp = {
	display: 'flex',
	flexGrow: 1,
	fontSize: ['0.8em', '0.95em', '1em'],
	alignItems: 'center',
	fontFamily: 'heading',
	overflow: 'hidden',
	padding: ['0.5em', '0.8em', '1.1em'],
};

const headerChild: SxStyleProp = {
	flex: '1 0 0',
}

const menuButton: SxStyleProp = {
	fontSize: '2em',
}

const shareLinks: SxStyleProp = {
	justifyContent: 'flex-end',
}

const pageLinks: SxStyleProp = {
	fontWeight: 'body',
	justifyContent: 'center',
	'a': {
		margin: '0 0.4em 0 0.4em',
		color: 'layoutLink',
		textDecoration: 'none',
		':hover': {
			color: 'layoutLinkHover',
		}
	}
}

export default { header, headerChild, menuButton, shareLinks, pageLinks };