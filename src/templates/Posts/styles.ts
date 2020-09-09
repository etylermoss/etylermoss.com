/* 3rd party imports */
import { SxStyleProp } from 'theme-ui';

const header: SxStyleProp = {
	margin: ['1em 0 2em 0', '1em 0 3em 0'],
	flexDirection: ['column', 'row'],
};

const headerTitle: SxStyleProp = {
	margin: 0,
	color: 'primary',
};

const headerTime: SxStyleProp = {
	margin: ['0.5em 0 0 0', '0 0 0 auto'],
};

export default { header, headerTitle, headerTime };