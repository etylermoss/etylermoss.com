/* 3rd party imports */
import { SxStyleProp } from 'theme-ui';

const footer: SxStyleProp = {
	position: 'absolute',
	left: 0,
	bottom: 0,
	right: 0,
	padding: 0.5 + 'em',
	textAlign: 'center',
	fontFamily: 'heading',
}

const link: SxStyleProp = {
	textDecoration: 'none',
	'&:visited': {
		color: 'link',
	}
};

export default { footer, link };