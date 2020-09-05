/* 3rd party imports */
import { SxStyleProp } from 'theme-ui';

const rootContainer: SxStyleProp = {
	flexDirection: 'column',
	height: '100%',
};

const mainContainer: SxStyleProp = {
	position: 'absolute',
};

const contentContainer: SxStyleProp = {
	padding: '1em',
	fontFamily: 'body',
};

export default { rootContainer, mainContainer, contentContainer };