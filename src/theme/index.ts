/* 3rd party imports */
import { Theme } from 'theme-ui';

/* 1st party imports */
import Fonts from '@/theme/fonts';
import Colors from '@/theme/colors';
import Buttons from '@/theme/buttons';

export default {
	...Fonts,
	colors: Colors,
	buttons: Buttons,
	breakpoints: ['40rem', '60rem', '70rem'],
} as Theme;