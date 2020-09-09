/** @jsx jsx */
/* 3rd party imports */
import { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { jsx, useColorMode } from 'theme-ui';
import { Button, Flex } from '@theme-ui/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as faMoonLine } from '@fortawesome/free-regular-svg-icons';

/* 1st party imports */
import LinkSpacer from '@/components/LinkSpacer';
import Styles from '@/components/Header/styles';

interface Props {
	openMenu: () => void;
}

const Component: FunctionComponent<Props> = ({ openMenu }) => {
	const [colorMode, setColorMode] = useColorMode<'default' | 'dark'>('default');

	return (
		<header sx={Styles.header}>
			<Flex sx={{...Styles.headerChild, ...Styles.menuButton}}>
				<Button variant="header" onClick={openMenu}>
					<FontAwesomeIcon icon={faBars}/>
				</Button>
			</Flex>
			<Flex sx={{...Styles.pageLinks, ...Styles.headerChild}}>
				<Link to="/">Home</Link>
				<LinkSpacer/>
				<Link to="/gallery">Gallery</Link>
				<LinkSpacer/>
				<Link to="/posts">Posts</Link>
				<LinkSpacer/>
				<Link to="/contact">Contact</Link>
			</Flex>
			<Flex sx={{...Styles.headerChild, ...Styles.shareLinks}}>
				<Button variant="header" onClick={() => setColorMode(colorMode === 'default' ? 'dark' : 'default')}>
					<FontAwesomeIcon icon={colorMode === 'default' ? faMoonLine : faMoon}/>
				</Button>
			</Flex>
		</header>
	);
};

export default Component;