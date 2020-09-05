/* 3rd party imports */
import { SxStyleProp } from 'theme-ui';

const container: SxStyleProp = {
	display: 'flex',
	fontSize: ['0.55em', '0.75em', '1em'],
	alignItems: 'center',
	boxShadow: '#aaa 0px -10px 6px 12px',
	fontFamily: 'heading',
	overflow: 'hidden',
	width: '100%',
};

const title: SxStyleProp = {
	margin: 0,
	'a': {
		color: 'primary',
		textDecoration: 'none',
	},
}

const pageLinksContainer: SxStyleProp = {
	margin: '0 1.25em 0 auto',
	fontWeight: 'body',
	'a': {
		margin: '0 0.4em 0 0.4em',
		color: 'primary',
		textDecoration: 'none',
		letterSpacing: 'prebold',
		':hover': {
			fontWeight: 'bold',
			letterSpacing: 'bold'
		}
	}
}

export default { container, title, pageLinksContainer };