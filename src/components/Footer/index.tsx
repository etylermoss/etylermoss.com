/** @jsx jsx */
/* 3rd party imports */
import { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

/* 1st party imports */
import useSiteMetadata from '@/hooks/useSiteMetadata';
import Styles from '@/components/Footer/styles';

const Component: FunctionComponent = () => {
	const { author } = useSiteMetadata();

	return (
		<footer sx={Styles.footer}>
			<span>
				© {new Date().getFullYear()} <Link sx={Styles.link} to="/">{author}</Link>
			</span>
		</footer>
	);
};

export default Component;