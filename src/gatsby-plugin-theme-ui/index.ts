/* 3rd party imports */
import { Theme } from 'theme-ui';

/* 1st party imports */
import Fonts from '@/gatsby-plugin-theme-ui/fonts';
import Colors from '@/gatsby-plugin-theme-ui/colors';
import Buttons from '@/gatsby-plugin-theme-ui/buttons';

export default {
	...Fonts,
	useColorSchemeMediaQuery: true,
	colors: Colors,
	buttons: Buttons,
	breakpoints: ['40rem', '60rem', '70rem'],
} as Theme;