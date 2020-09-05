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
	breakpoints: ['30em', '37em', '45em']
} as Theme;