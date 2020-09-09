/* 3rd party imports */
import { SxStyleProp } from 'theme-ui';

const rootContainer: SxStyleProp = {
	flexDirection: 'column',
	height: 100 + '%',
};

const mainContainer: SxStyleProp = {
	position: 'absolute',
	width: 100 + 'vw',
	height: 100 + 'vh',
	overflowX: 'hidden',
};

const contentContainer: SxStyleProp = {
	fontFamily: 'body',
	padding: ['1% 5.5% 0 5.5%', '1.5% 6% 0 6%', '2% 7.5% 0 7.5%'],
};

export default { rootContainer, mainContainer, contentContainer };