/** @jsx jsx */
/* 3rd party imports */
import { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { Button, Flex } from '@theme-ui/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';

/* 1st party imports */
import LinkSpacer from '@/components/LinkSpacer';
import Styles from '@/components/Header/styles';

interface Props {
	openMenu: () => void;
}

const Component: FunctionComponent<Props> = ({ openMenu }) => {

	return (
		<header sx={Styles.header}>
			<Flex sx={{...Styles.headerChild, ...Styles.menuButton}}>
				<Button variant="header" onClick={openMenu}><FontAwesomeIcon icon={faBars}/></Button>
			</Flex>
			<Flex sx={{...Styles.pageLinks, ...Styles.headerChild}}>
				<Link to="/">Home</Link>
				<LinkSpacer/>
				<Link to="/gallery">Gallery</Link>
				<LinkSpacer/>
				<Link to="/posts">Posts</Link>
			</Flex>
			<Flex sx={{...Styles.headerChild, ...Styles.shareLinks}}>
				<Button variant="header"><FontAwesomeIcon icon={faEnvelope}/></Button>
			</Flex>
		</header>
	);
};

export default Component;